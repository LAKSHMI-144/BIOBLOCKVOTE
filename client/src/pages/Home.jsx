import { Link } from 'react-router-dom'

const securityFeatures = [
  {
    title: 'Biometric Authentication',
    text: 'Verify voters using facial biometric recognition.',
  },
  {
    title: 'Liveness Detection',
    text: 'Help distinguish a live person from presentation attacks.',
  },
  {
    title: 'Secure Vote Recording',
    text: 'Record voting transactions using tamper-resistant blockchain technology.',
  },
]

const processSteps = [
  { number: '01', title: 'Face Capture' },
  { number: '02', title: 'AI Verification' },
  { number: '03', title: 'Vote Casting' },
  { number: '04', title: 'Secure Recording' },
]

function Home() {
  return (
    <div className="page home-page">
      <section className="hero-panel two-column">
        <div className="hero-copy">
          <h1>BioBlockVote</h1>
          <h2>Privacy-Preserving Biometric E-Voting</h2>
          <p className="lead">
            A biometric authentication based electronic voting system designed to
            improve voter verification and provide secure vote recording.
          </p>

          <div className="cta-row">
            <Link to="/register" className="primary-button">
              Register as Voter
            </Link>
            <Link to="/vote" className="secondary-button">
              Cast Your Vote
            </Link>
          </div>
        </div>

        <div className="hero-visual" aria-label="Biometric verification panel preview">
          <div className="visual-shell">
            <div className="scan-header">
              <span className="dot" />
              <span className="dot" />
              <span className="dot" />
            </div>

            <div className="scan-body">
              <div className="camera-panel-frame">
                <div className="camera-surface">
                  <div className="face-detection-box">
                    <span className="corner top-left" />
                    <span className="corner top-right" />
                    <span className="corner bottom-left" />
                    <span className="corner bottom-right" />

                    <div className="face-outline-professional">
                      <span className="eye left" />
                      <span className="eye right" />
                      <span className="nose" />
                      <span className="mouth" />
                    </div>

                    <div className="scan-line-professional" aria-hidden="true" />
                    <div className="face-tag">FACE DETECTED</div>
                    <div className="status-pill">READY</div>
                  </div>
                </div>
              </div>

              <div className="status-panel">
                <span className="status-title">Biometric Verification</span>
                <strong>Authentication Ready</strong>
                <div className="mini-status-grid">
                  <span>Detection: Ready</span>
                  <span>Liveness: Pending</span>
                  <span>Recognition: Pending</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="section-heading-block">
          <p className="eyebrow">Security Features</p>
          <h3>Built for secure and verifiable voting</h3>
        </div>

        <div className="feature-grid">
          {securityFeatures.map((feature) => (
            <article key={feature.title} className="feature-card">
              <div className="feature-icon" aria-hidden="true" />
              <h4>{feature.title}</h4>
              <p>{feature.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section">
        <div className="section-heading-block">
          <p className="eyebrow">How BioBlockVote Works</p>
          <h3>Four-step verification and voting flow</h3>
        </div>

        <div className="process-flow" aria-label="Project process steps">
          {processSteps.map((step) => (
            <div key={step.number} className="process-step">
              <div className="step-badge">{step.number}</div>
              <div className="step-text">{step.title}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="cta-banner">
        <div>
          <h3>Secure. Verified. Transparent.</h3>
          <p>
            BioBlockVote combines biometric voter verification with secure
            electronic voting and tamper-resistant vote recording.
          </p>
        </div>
        <Link to="/register" className="primary-button compact-button">
          Get Started
        </Link>
      </section>
    </div>
  )
}

export default Home
