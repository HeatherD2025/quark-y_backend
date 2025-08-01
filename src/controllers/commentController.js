import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import prisma from '../common/prismaClient.js';

const JWT_SECRET = process.env.JWT_SECRET;


export const getComments = async (req, res) => {
  try {
    const articleUrl =   decodeURIComponent(req.params.articleUrl);

    const comments = await prisma.comment.findMany({
      where: { articleUrl },
      include: { user: true },
      orderBy: { dateCreated: "desc" },
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
    const { content } = req.body;
    const userId = req.user.id;

    const comment = await prisma.comment.create({
      data: {
        content,
        article: { connect: { articleUrl } },
        user: { connect: { id: userId } },
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
  const { commentId } = req.params;
  const { content, userId } = req.body;

  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ message: 'authorization token required' });
    }

    const token = authHeader.replace('Bearer ', '');
    const decoded = jwt.verify(token, JWT_SECRET);

    const comment = await prisma.comment.findUnique({
      where: { id: commentId },
    });

    if (!comment) {
      return res.status(404).json({ message: 'comment not found' });
    }

    if (comment.userId !== decoded.id) {
      return res.status(403).json({ message: 'forbidden: cannot edit others comments' });
    }

    const updatedComment = await prisma.comment.update({
      where: { id: commentId },
      data: { content },
    });

    res.status(200).json(updatedComment);
  } catch (error) {
    console.error('error updating comment', error);
    res.status(500).json({ message: 'server error updating comment' });
  }
};


export const deleteComment = async (req, res) => {
  const { articleUrl, commentId } = req.params;

  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ message: "authorization token required" });
    }

    const token = authHeader.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const authenticateUserId = decoded.id;

    const comment = await prisma.comment.findUnique({
        where: { id: commentId }
    });

    if (!comment) {
      return res.status(404).json({ message: "comment not found" });
    }

    if (comment.userId !== authenticateUserId) {
      return res.status(403).json({ message: "comment does not match the specified article" });
    }

    const removeComment = await prisma.comment.delete({
      where: { id: commentId },
    });

    res.status(200).json({
      message: "Comment deleted successfully",
      comment: removeComment,
    });

  } catch (error) {
    console.error("Error removing comment:", error);
    res.status(500).json({ message: "Server error removing comment" });
  }
};
