import express from 'express';
import 'dotenv/config';
import { loggedIn } from '../middleware/loggedIn.js';
import { getComments, createComment, updateComment, deleteComment } from '../controllers/commentController.js';

const router = express.Router();

router.get('/articles/:articleUrl/comments', loggedIn, getComments); 
router.post('/articles/:articleUrl/comments', loggedIn, createComment);  
router.put('/articles/:articleUrl/comments/:commentId', loggedIn, updateComment); 
router.delete('/articles/:articleUrl/comments/:commentId', loggedIn, deleteComment);

export default router;

console.log('Routes in comments.js:');
router.stack.forEach((layer) => {
  if (layer.route) {
    console.log(Object.keys(layer.route.methods)[0].toUpperCase(), layer.route.path);
  }
});

