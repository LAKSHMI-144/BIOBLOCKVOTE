export const registerVoter = (req, res) => {
  const { voterId, fullName, age, gender, address } = req.body || {}

  res.status(201).json({
    status: 'Development stage',
    message: 'Registration interface completed. Backend integration pending.',
    project: 'BioBlockVote',
    received: {
      voterId,
      fullName,
      age,
      gender,
      address,
    },
  })
}
