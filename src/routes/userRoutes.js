import express from 'express';
import { loggedIn } from '../middleware/loggedIn.js';
import { adminOnly } from '../middleware/adminOnly.js';
import {
  getMe,
  getAllUsers,
  deleteUserById,
} from '../controllers/userController.js';

const router = express.Router();

router.get('/me', loggedIn, getMe);
router.get('/', loggedIn, adminOnly, getAllUsers);
router.delete('/:userid', loggedIn, deleteUserById);

export default router;
