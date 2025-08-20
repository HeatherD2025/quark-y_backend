import express from 'express';
import { loggedIn } from '../middleware/loggedIn.js';
import { setAvatar, removeAvatar } from '../controllers/avatarController.js';

const router = express.Router();

// set or change avatar
router.put('/me', loggedIn, setAvatar);
// delete avatar
router.put('/me', loggedIn, removeAvatar);

export default router;