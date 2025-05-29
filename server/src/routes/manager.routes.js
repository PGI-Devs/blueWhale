// routes/manager.routes.js
import express from 'express';
import { verifyToken } from '../middleware/authMiddleware.js';
import { isManager } from '../middleware/isManager.js';
import { querymy } from '../controllers/materials.controller.js';

const router = express.Router();

// All routes are protected ay
router.get('/querymy', verifyToken, isManager, querymy);
export default router;