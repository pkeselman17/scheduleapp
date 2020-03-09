import { Router } from 'express';
import UserRouter from './Users';
import api from './api';

// Init router and path
const router = Router();

// Add sub-routes
router.use('/users', UserRouter);
router.use('/api', api);

// Export the base-router
export default router;
