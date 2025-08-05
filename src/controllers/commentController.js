import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import prisma from '../common/prismaClient.js';

const JWT_SECRET = process.env.JWT_SECRET;

export const createComment = async (req, res) => {
  const articleUrl = decodeURIComponent(req.params.articleUrl);
  const { content, articleTitle } = req.body;
  const userId = req.user.id;

  if (!content || !articleUrl) {
    return res.status(400).json({ message: 'Content and articleUrl are required.' });
  }

  try {
    await prisma.item.upsert({
      where: { articleUrl },
      update: {}, 
      create: {
        articleUrl,
      },
    });

    const newComment = await prisma.comment.create({
      data: {
        content,
        articleUrl,
        userId,
      },
    });

    res.status(201).json(newComment);
  } catch (error) {
    console.error('Create comment error:', error);
    res.status(500).json({ message: 'Failed to create comment' });
  }
};

export const getCommentsByArticle = async (req, res) => {
  const articleUrl = decodeURIComponent(req.params.articleUrl);

  if (!articleUrl) {
    return res.status(400).json({ message: 'Missing articleUrl' });
  }

  try {
    const comments = await prisma.comment.findMany({
      where: { articleUrl },
      include: { user: { select: { username: true } } },
      orderBy: { dateCreated: 'desc' },
    });

    res.status(200).json(comments);
  } catch (error) {
    console.error('getCommentsByArticle error:', error);
    res.status(500).json({ message: 'Failed to fetch comments' });
  }
};


export const updateComment = async (req, res) => {
  const { commentId } = req.params;
  const { content } = req.body;
  const user = req.user;

  try {
    const comment = await prisma.comment.findUnique({
      where: { id: commentId },
    });

    if (!comment) {
      return res.status(404).json({ message: 'Comment not found' });
    }
    if (comment.userId !== user.id && !user.isAdmin) {
      return res.status(403).json({ message: 'You are not authorized to edit this comment' });
    }
    if (!content?.trim()) {
      return res.status(400).json({ message: 'Content is required' });
    }

    const updatedComment = await prisma.comment.update({
      where: { id: commentId },
      data: { content },
    });

    res.status(200).json(updatedComment);
  } catch (error) {
    console.error('Error updating comment:', error);
    res.status(500).json({ message: 'Server error updating comment' });
  }
};

export const deleteComment = async (req, res) => {
  const { commentId } = req.params;
  const user = req.user;

  try {
    const comment = await prisma.comment.findUnique({
      where: { id: commentId },
    });

    if (!comment) {
      return res.status(404).json({ message: 'Comment not found' });
    }

    if (comment.userId !== user.id && !user.isAdmin) {
      return res.status(403).json({ message: 'You are not authorized to delete this comment' });
    }

    await prisma.comment.delete({
      where: { id: commentId },
    });

    res.status(200).json({ message: 'Comment deleted successfully' });
  } catch (error) {
    console.error('Error removing comment:', error);
    res.status(500).json({ message: 'Server error removing comment' });
  }
};
