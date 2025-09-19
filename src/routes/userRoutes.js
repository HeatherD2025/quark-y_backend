import express from 'express';
import { loggedIn } from '../middleware/loggedIn.js';
import {
  getMe,
  updateAvatar,
  deleteOwnAccount,
  removeAvatar
} from '../controllers/userController.js';

const router = express.Router();

router.get('/me', loggedIn, getMe);
router.patch('/me/avatar', loggedIn, updateAvatar);
router.delete('/me/avatar', loggedIn, removeAvatar);
router.delete('/me', loggedIn, deleteOwnAccount);

export default router;
