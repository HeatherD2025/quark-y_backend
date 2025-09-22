import express from 'express';
import { loggedIn } from '../middleware/loggedIn.js';
import {
  getMe,
  updateAvatar,
  removeAvatar
} from '../controllers/userController.js';

const router = express.Router();

router.get('/me', loggedIn, getMe);
router.patch('/user/avatar', loggedIn, updateAvatar);    // Update avatar
router.delete('/user/avatar', loggedIn, removeAvatar);

export default router;
