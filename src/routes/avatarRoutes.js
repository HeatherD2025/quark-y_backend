import express from 'express';
import { loggedIn } from '../middleware/loggedIn.js';

const router = express.Router();
const {
  changeAvatar,
  removeAvatar,
} = require("../controllers/avatarController.js");


router.post('/register', )
// change avatar
router.put('/me', loggedIn, setAvatar);
// delete avatar
router.put('/me', loggedIn, removeAvatar);

export default router;