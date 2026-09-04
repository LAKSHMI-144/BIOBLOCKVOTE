export const getResults = (req, res) => {
  res.status(200).json({
    status: 'Development stage',
    note: 'Sample / development data only. These are not live election results.',
    project: 'BioBlockVote',
    results: [
      {
        candidate: 'Candidate A',
        party: 'Progressive Alliance',
        voteCount: 1120,
      },
      {
        candidate: 'Candidate B',
        party: 'People First Party',
        voteCount: 980,
      },
      {
        candidate: 'Candidate C',
        party: 'National Unity Coalition',
        voteCount: 760,
      },
    ],
  })
}
