import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import prisma from '../common/prismaClient.js';
import { loggedIn } from '../middleware/loggedIn.js';

const JWT_SECRET = process.env.JWT_SECRET;

export const getComments = async (req, res) => {
  const { articleUrl } = req.params;

  try {
    const comments = await prisma.comment.findMany({
      where: { articleUrl },
      include: {
        user: true,
      },
      orderBy: {
        dateCreated: "desc",
      },
    });

    if (!comments || comments.length === 0) {
      return res.status(404).json({
        message: "no comments found for this article",
      });
    }

    res.status(200).json(comments);
  } catch (error) {
    console.error("error fetching comment", error);
    res.status(500).json({ message: "server error fetching comment" });
  }
};

export const createComment = async (req, res, next) => {
  try {
    const { articleUrl } = req.params;
    const { text } = req.body;
    const userId = req.user.id;

    const comment = await prisma.comment.create({
      data: {
        text,
        article: {   // changed from `comment` to `article` assuming this is the correct relation field
          connect: { url: articleUrl },
        },
        user: {
          connect: { id: userId },
        },
      },
    });

    res.status(201).json(comment);
  } catch (error) {
    console.error("error creating comment", error);
    res.status(500).json({
      error: "an error occurred while creating the comment",
    });
    next(error);
  }
};

export const updateComment = async (req, res) => {
  // Implementation needed
  const { articleUrl } = req.params;
  const { comment, userId } = req.body;
  // You can add update logic here when ready
  res.status(501).json({ message: "Update comment not implemented" });
};

export const deleteComment = async (req, res) => {
  const { articleUrl } = req.params;
  const { comment, userId } = req.body;

  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ message: "authorization token required" });
    }

    const token = authHeader.replace("Bearer ", "");
    const decoded = jwt.verify(token, JWT_SECRET);
    const authenticateUserId = decoded.id;

    if (authenticateUserId !== userId) {
      return res
        .status(403)
        .json({ message: "incorrect authentication, please try again" });
    }

    const article = await prisma.article.findUnique({  // changed from `item` to `article` assuming your model name is article
      where: { url: articleUrl },
    });

    if (!article) {
      return res.status(404).json({ message: "article not found" });
    }

    const removeComment = await prisma.comment.delete({
      where: {
        id: comment.id,  // Deleting by id is required; you can't delete by data object
      },
    });

    res.status(200).json(removeComment);
  } catch (error) {
    console.error("error removing comment", error);
    res.status(500).json({ message: "server error removing comment" });
  }
};
