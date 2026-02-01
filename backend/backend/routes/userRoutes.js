import express from 'express'
import { deleteUser, getAllUsers, loginUser, registerUser } from '../controllers/userController.js'
import upload from '../middlewares/uploadsMiddleware.js';
import { verifyToken } from '../middlewares/authMiddleware.js';


 let router = express.Router()

 router.post('/register',upload.single("photo"),registerUser);
 router.post('/login',loginUser)
 router.get('/getuser',verifyToken,getAllUsers)
 router.delete('/:id',verifyToken,deleteUser)
 export default router  