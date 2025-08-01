import express from 'express';
import 'dotenv/config';
import { loggedIn } from '../middleware/loggedIn.js';
import { login, register, getMe, deleteUserById } from '../controllers/authController.js';

const router = express.Router();

router.post('/register', register);  
router.post('/login', login);   
router.get('/me', loggedIn, getMe); 
router.delete('/deleteUser/:userid', loggedIn, deleteUserById);

export default router;

console.log('Routes in authorized.js:');
router.stack.forEach((layer) => {
  if (layer.route) {
    console.log(Object.keys(layer.route.methods)[0].toUpperCase(), layer.route.path);
  }
});

