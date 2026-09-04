export const castVote = (req, res) => {
  const { voterId, candidate } = req.body || {}

  res.status(200).json({
    status: 'Development stage',
    message: 'Blockchain integration is pending.',
    project: 'BioBlockVote',
    request: {
      voterId,
      candidate,
    },
  })
}
