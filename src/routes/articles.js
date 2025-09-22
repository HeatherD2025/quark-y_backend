import express from 'express';
import { PrismaClient } from '@prisma/client';
import { loggedIn } from '../middleware/loggedIn';
import { getArticle } from '../controllers/articleController';

const router = express.Router();
const prisma = new PrismaClient();

router.get('/articles/:articleId', loggedIn, getArticle);

router.get('/', async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const pageSize = parseInt(req.query.pageSize) || 10;

    const articles = await prisma.article.findMany({
      skip: (page - 1) * pageSize,
      take: pageSize,
      orderBy: {
        publishedAt: 'desc',
      },
    });

    const totalCount = await prisma.article.count();
    const hasMore = page * pageSize < totalCount;

    if (!hasMore) {
      return res.json({
        error: true,
        message: 'No more articles found',
      });
    }

    return res.json({
      articles,
      hasMore,
    });
  } catch (error) {
    console.error('Error fetching articles:', error);
    return res.status(500).json({
      error: error.message,
      message: 'An error occurred while fetching articles',
    });
  }
});

export default router;
