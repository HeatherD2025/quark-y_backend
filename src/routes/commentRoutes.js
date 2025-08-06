// routes/commentRoutes.js
import express from 'express';
import { loggedIn } from '../middleware/loggedIn.js';
import {
  getCommentsByArticle,
  createComment,
  updateComment,
  deleteComment,
} from '../controllers/commentController.js';

const router = express.Router();

router.get('/articles/:articleUrl/comments', getCommentsByArticle); // could be public
router.post('/articles/:articleUrl/comments', loggedIn, createComment);
router.put('/articles/:articleUrl/comments/:commentId', loggedIn, updateComment);
router.delete('/articles/:articleUrl/comments/:commentId', loggedIn, deleteComment);

export default router;
