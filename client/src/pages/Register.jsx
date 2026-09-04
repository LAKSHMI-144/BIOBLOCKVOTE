import { useState } from 'react'

const initialForm = {
  voterId: '',
  name: '',
  age: '',
  gender: 'Male',
  address: '',
}

function Register() {
  const [formData, setFormData] = useState(initialForm)
  const [statusMessage, setStatusMessage] = useState('')

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      const response = await fetch('http://localhost:5000/api/voters/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          voterId: formData.voterId,
          fullName: formData.name,
          age: formData.age,
          gender: formData.gender,
          address: formData.address,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || 'Registration request failed.')
      }

      setStatusMessage(data.message || 'Registration interface completed. Backend integration pending.')
    } catch (error) {
      setStatusMessage(error.message || 'Registration interface completed. Backend integration pending.')
    }
  }

  return (
    <div className="page">
      <section className="section-header register-header">
        <h1>Voter Registration</h1>
        <p>
          Register your details and capture biometric information for voter
          authentication.
        </p>
      </section>

      <div className="register-layout">
        <div className="form-card details-card">
          <h3>Voter Details</h3>
          <div className="form-grid">
            <label className="field">
              <span>Voter ID</span>
              <input
                type="text"
                name="voterId"
                value={formData.voterId}
                onChange={handleChange}
                placeholder="Enter voter ID"
              />
            </label>

            <label className="field">
              <span>Full Name</span>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter full name"
              />
            </label>

            <label className="field">
              <span>Age</span>
              <input
                type="number"
                name="age"
                min="18"
                value={formData.age}
                onChange={handleChange}
                placeholder="Enter age"
              />
            </label>

            <label className="field">
              <span>Gender</span>
              <select name="gender" value={formData.gender} onChange={handleChange}>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </label>

            <label className="field full-width">
              <span>Address</span>
              <textarea
                name="address"
                value={formData.address}
                onChange={handleChange}
                rows="4"
                placeholder="Enter residential address"
              />
            </label>
          </div>
        </div>

        <aside className="face-panel">
          <div className="face-panel-header">
            <h3>Biometric Face Capture</h3>
          </div>

          <div className="face-capture-box">
            <div className="camera-preview-wrapper">
              <div className="camera-preview-header">
                <span className="camera-dot" />
                <span className="camera-dot" />
                <span className="camera-dot" />
              </div>

              <div className="camera-preview-area">
                <div className="camera-overlay" />
                <div className="camera-face-box">
                  <span className="camera-corner tl" />
                  <span className="camera-corner tr" />
                  <span className="camera-corner bl" />
                  <span className="camera-corner br" />

                  <div className="camera-face-outline">
                    <span className="camera-eye left" />
                    <span className="camera-eye right" />
                    <span className="camera-nose" />
                    <span className="camera-mouth" />
                  </div>

                  <div className="camera-scan-line" aria-hidden="true" />
                </div>
                <div className="camera-caption">Camera Preview</div>
                <div className="camera-note">Webcam integration pending</div>
              </div>
            </div>
          </div>

          <button type="button" className="secondary-button full-width-button">
            Capture Face
          </button>

          <p className="capture-helper">
            Face images will be used to generate the biometric representation
            during AI integration.
          </p>
        </aside>
      </div>

      <button type="button" className="primary-button submit-button register-submit" onClick={handleSubmit}>
        Register Voter
      </button>

      {statusMessage && <div className="status-banner">{statusMessage}</div>}
    </div>
  )
}

export default Register
