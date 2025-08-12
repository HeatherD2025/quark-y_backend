import express from 'express';
import { loggedIn } from '../middleware/loggedIn.js';
import { adminOnly } from '../middleware/adminOnly.js';
import {
  getMe,
  getAllUsers,
  deleteUserById,
  deleteOwnAccount
} from '../controllers/userController.js';

const router = express.Router();

// get current user's data
router.get('/me', loggedIn, getMe);

// users can delete own account
router.delete('/me', loggedIn, deleteOwnAccount)

// admin-only access
router.get('/', loggedIn, adminOnly, getAllUsers);
router.delete('/:userid', loggedIn, adminOnly, deleteUserById);

export default router;
