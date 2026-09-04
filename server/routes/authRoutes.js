import express from 'express'
import { authenticateVoter } from '../controllers/authController.js'

const router = express.Router()

router.post('/authenticate', authenticateVoter)

export default router
