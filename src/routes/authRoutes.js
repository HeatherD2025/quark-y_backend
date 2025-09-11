import express from 'express';
import { loggedIn } from '../middleware/loggedIn.js';
import { adminOnly } from '../middleware/adminOnly.js';
import { 
    login, 
    register,
    getAllUsers,
    deleteUserById 
} from '../controllers/authController.js';

const router = express.Router();

router.post('/register', register);  
router.post('/login', login); 
// admin-only access
router.get('/', loggedIn, adminOnly, getAllUsers);
router.delete('/:userid', loggedIn, adminOnly, deleteUserById);  

export default router;
