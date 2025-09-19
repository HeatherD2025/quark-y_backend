import express from 'express';
import { loggedIn } from '../middleware/loggedIn.js';
import {
  getMe,
  updateAvatar,
  deleteOwnAccount,
  removeAvatar
} from '../controllers/userController.js';

const router = express.Router();

router.get('/user', loggedIn, getMe);
router.put('/user', loggedIn, updateAvatar);
router.delete('/user', loggedIn, deleteOwnAccount);
router.delete('/user', loggedIn, removeAvatar)

export default router;
