import { useState } from 'react'

const candidateOptions = [
  { name: 'Candidate A', party: 'Progressive Alliance' },
  { name: 'Candidate B', party: 'People First Party' },
  { name: 'Candidate C', party: 'National Unity Coalition' },
]

function Vote() {
  const [voterId, setVoterId] = useState('')
  const [selectedCandidate, setSelectedCandidate] = useState('Candidate A')
  const [authStatus, setAuthStatus] = useState('AI authentication integration pending.')
  const [voteStatus, setVoteStatus] = useState('')

  const handleAuthenticate = () => {
    setAuthStatus('AI authentication integration pending.')
    setVoteStatus('')
  }

  const handleCastVote = (event) => {
    event.preventDefault()
    setVoteStatus('AI and backend integration are currently under development.')
  }

  return (
    <div className="page">
      <section className="section-header">
        <p className="eyebrow">Voting</p>
        <h1>Voter Authentication</h1>
      </section>

      <form className="form-card vote-form" onSubmit={handleCastVote}>
        <div className="vote-top-grid">
          <label className="field">
            <span>Voter ID</span>
            <input
              type="text"
              value={voterId}
              onChange={(event) => setVoterId(event.target.value)}
              placeholder="Enter your voter ID"
            />
          </label>

          <div className="face-auth-box">
            <div className="mini-camera-box">
              <div className="mini-face mini-face-small">
                <span className="mini-eye left" />
                <span className="mini-eye right" />
                <span className="mini-nose" />
                <span className="mini-mouth" />
              </div>
            </div>
          </div>
        </div>

        <button type="button" className="primary-button" onClick={handleAuthenticate}>
          Authenticate Voter
        </button>

        <div className="status-box">
          <span className="status-label">Authentication Status</span>
          <p>{authStatus}</p>
        </div>

        <div className="candidate-selection">
          <h3>Select Candidate</h3>
          <div className="candidate-list">
            {candidateOptions.map((candidate) => (
              <label
                key={candidate.name}
                className={`candidate-option ${
                  selectedCandidate === candidate.name ? 'selected' : ''
                }`}
              >
                <input
                  type="radio"
                  name="candidate"
                  value={candidate.name}
                  checked={selectedCandidate === candidate.name}
                  onChange={(event) => setSelectedCandidate(event.target.value)}
                />
                <div>
                  <strong>{candidate.name}</strong>
                  <span>{candidate.party}</span>
                </div>
              </label>
            ))}
          </div>
        </div>

        <button type="submit" className="primary-button submit-button">
          Cast Vote
        </button>

        {voteStatus && <div className="status-banner">{voteStatus}</div>}
      </form>
    </div>
  )
}

export default Vote
