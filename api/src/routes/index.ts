import { Router } from 'express';
import api from './api';

// Init router and path
const router = Router();

// Add sub-routes
router.use('/api', api);

// Export the base-router
export default router;
