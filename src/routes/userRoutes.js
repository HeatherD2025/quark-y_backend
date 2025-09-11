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
router.put('/me', loggedIn, updateAvatar);
router.delete('/me', loggedIn, deleteOwnAccount);
router.delete('/me', loggedIn, removeAvatar)

export default router;
