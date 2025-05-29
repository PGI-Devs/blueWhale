// routes/employee.routes.js
import express from 'express';
import { verifyToken } from '../middleware/authMiddleware.js';
import { isEmployee } from '../middleware/isEmployee.js';
import { querymy } from '../controllers/materials.controller.js';

const router = express.Router();

// All routes are protected ay
router.get('/querymy', verifyToken, isEmployee, querymy);
export default router;