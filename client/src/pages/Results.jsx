import { useEffect, useState } from 'react'

const fallbackResults = [
  { candidate: 'Candidate A', party: 'Progressive Alliance', votes: 1120 },
  { candidate: 'Candidate B', party: 'People First Party', votes: 980 },
  { candidate: 'Candidate C', party: 'National Unity Coalition', votes: 760 },
]

function Results() {
  const [results, setResults] = useState(fallbackResults)

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/results')
        const data = await response.json()

        if (!response.ok) {
          throw new Error(data.message || 'Unable to load results.')
        }

        if (Array.isArray(data.results) && data.results.length > 0) {
          setResults(
            data.results.map((item) => ({
              candidate: item.candidate,
              party: item.party,
              votes: item.voteCount,
            })),
          )
        }
      } catch (error) {
        setResults(fallbackResults)
      }
    }

    fetchResults()
  }, [])

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
