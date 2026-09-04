export const authenticateVoter = (req, res) => {
  const { voterId } = req.body || {}

  res.status(200).json({
    status: 'Development stage',
    message: 'Biometric authentication integration is pending.',
    project: 'BioBlockVote',
    request: {
      voterId,
    },
  })
}
