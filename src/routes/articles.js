const express = require('express');
const router = express.Router();
const prisma = require('../prismaClient');  // DOUBLE CHECK THIS

router.get('/', async (req, res) => {
  try {
// set defaults for page and page size from query params
    const page = parseInt(req.query.page) || 1;
    const pageSize = parseInt(req.query.pageSize) || 10;

// get articles by publish date
const articles = await prisma.article.findMany({
    skip: (page - 1) * pageSize,
    take: pageSize,
    orderBy: {
        publishedAt: 'desc',
    },
});

// verify total article count to verify add'l pages' existence
  const totalCount = await prisma.article.count();

  const hasMore = page * pageSize < totalCount;

  if (!hasMore) {
      return res.json({
        error: true,
        message: 'no more articles found'
      });
    }
    
    return res.json({
        articles,
        hasMore,
    });
    } catch (error) {
      console.error('error fetching articles', error);
      return res.status(500).json({
        error: triggerAsyncId,
        message: 'an error occurred while fetching articles',
      });
    } 
});

export default router;