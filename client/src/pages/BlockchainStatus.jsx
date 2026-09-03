const functionsList = ['registerVoter()', 'castVote()', 'getResults()']

function BlockchainStatus() {
  return (
    <div className="page">
      <section className="section-header">
        <p className="eyebrow">Blockchain</p>
        <h1>Blockchain Status</h1>
      </section>

      <div className="status-card">
        <div className="status-grid">
          <div className="status-row">
            <span>Network</span>
            <strong>Local Ethereum</strong>
          </div>
          <div className="status-row">
            <span>Smart Contract</span>
            <strong>Integration Pending</strong>
          </div>
          <div className="status-row">
            <span>Transaction</span>
            <strong>Not Available</strong>
          </div>
          <div className="status-row">
            <span>Ledger Status</span>
            <strong>Development Stage</strong>
          </div>
        </div>

        <div className="function-box">
          <h3>Planned Smart Contract Functions</h3>
          <ul>
            {functionsList.map((func) => (
              <li key={func}>{func}</li>
            ))}
          </ul>
        </div>

        <p className="development-note">
          Blockchain integration will be implemented during the next development stage.
        </p>
      </div>
    </div>
  )
}

export default BlockchainStatus
