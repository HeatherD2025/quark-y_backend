const express = require('express');
const router = express.Router();
require('dotenv').config();
import { LoggedIn } from '../middleware/loggedIn';

const { getComments, createComment, deleteComment } = require('../controllers/commentController');

router.get('/articles/:articleUrl/comments', LoggedIn, getComments);

router.post('/articles/:articleUrl/comments', LoggedIn, createComment);

router.delete('/articles/:articleUrl/comments', LoggedIn, deleteComment);

module.exports = router;