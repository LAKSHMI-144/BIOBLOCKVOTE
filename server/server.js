import express from 'express'
import cors from 'cors'
import voterRoutes from './routes/voterRoutes.js'
import authRoutes from './routes/authRoutes.js'
import voteRoutes from './routes/voteRoutes.js'
import resultRoutes from './routes/resultRoutes.js'

const app = express()
const PORT = 5000

app.use(
  cors({
    origin: 'http://localhost:5173',
    credentials: true,
  }),
)

app.use(express.json())

app.get('/api/health', (req, res) => {
  res.status(200).json({
    status: 'Backend is running',
    project: 'BioBlockVote',
  })
})

app.use('/api/voters', voterRoutes)
app.use('/api/auth', authRoutes)
app.use('/api/votes', voteRoutes)
app.use('/api/results', resultRoutes)

app.use((err, req, res, next) => {
  if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
    return res.status(400).json({
      error: 'Invalid JSON format',
      message: 'Request body could not be parsed. Please send valid JSON data.',
    })
  }

  console.error('Server error:', err.message)
  return res.status(500).json({
    error: 'Internal server error',
    message: 'Something went wrong on the server.',
  })
})

app.use((req, res) => {
  res.status(404).json({
    error: 'Route not found',
    message: 'The requested endpoint does not exist on this server.',
  })
})

app.listen(PORT, () => {
  console.log('====================================')
  console.log('BioBlockVote backend server started')
  console.log(`Server running on: http://localhost:${PORT}`)
  console.log('Routes loaded:')
  console.log('  - /api/health')
  console.log('  - /api/voters')
  console.log('  - /api/auth')
  console.log('  - /api/votes')
  console.log('  - /api/results')
  console.log('====================================')
})
