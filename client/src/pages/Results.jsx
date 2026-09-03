const results = [
  { candidate: 'Candidate A', party: 'Progressive Alliance', votes: 1120 },
  { candidate: 'Candidate B', party: 'People First Party', votes: 980 },
  { candidate: 'Candidate C', party: 'National Unity Coalition', votes: 760 },
]

function Results() {
  return (
    <div className="page">
      <section className="section-header">
        <p className="eyebrow">Results</p>
        <h1>Election Results</h1>
      </section>

      <div className="results-panel">
        <div className="sample-tag">DEVELOPMENT DATA</div>

        <table>
          <thead>
            <tr>
              <th>Candidate</th>
              <th>Party</th>
              <th>Vote Count</th>
            </tr>
          </thead>
          <tbody>
            {results.map((result) => (
              <tr key={result.candidate}>
                <td>{result.candidate}</td>
                <td>{result.party}</td>
                <td>{result.votes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Results
