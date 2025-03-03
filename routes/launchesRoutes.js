import express from 'express';
import { getAllLaunches, getLaunchSummary } from '../controllers/launchesController.js';

const router = express.Router();

router.get('/launches', getAllLaunches);
router.get('/summary', getLaunchSummary);

export default router;
