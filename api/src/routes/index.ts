import { Router } from 'express';
import UserRouter from './Users';
import testAPIRouter from './testAPI';

// Init router and path
const router = Router();

// Add sub-routes
router.use('/users', UserRouter);
router.use('/testApi', testAPIRouter);

// Export the base-router
export default router;
