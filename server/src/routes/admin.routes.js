// routes/admin.routes.js
import express from 'express';
import { verifyToken } from '../middleware/authMiddleware.js';
import { isAdmin } from '../middleware/isAdmin.js';
import {
  createUser,
  listUsers,
  updateUser,
  deleteUser,
  updateUserPassword
} from '../controllers/user.controller.js';

const router = express.Router();

// All routes are protected and admin-only
router.post('/users', verifyToken, isAdmin, createUser);
router.get('/users', verifyToken, isAdmin, listUsers);
router.put('/users/:user_id', verifyToken, isAdmin, updateUser);
router.delete('/users/:user_id', verifyToken, isAdmin, deleteUser);
router.put('/users/:user_id/password', verifyToken, isAdmin, updateUserPassword);

export default router;