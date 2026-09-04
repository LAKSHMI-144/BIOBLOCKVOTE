import express from 'express'
import { castVote } from '../controllers/voteController.js'

const router = express.Router()

router.post('/cast', castVote)

export default router
