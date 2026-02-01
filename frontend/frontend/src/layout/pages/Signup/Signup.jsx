import React, { useState } from 'react'
import axios from 'axios'

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    address: '',
    photo: null
  })

  const [showPassword, setShowPassword] = useState(false)
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value, files } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: files ? files[0] : value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setMessage('')
    setLoading(true)

    try {
      const data = new FormData()
      data.append('name', formData.name)
      data.append('email', formData.email)
      data.append('password', formData.password)
      data.append('address', formData.address)
      data.append('photo', formData.photo)

      const res = await axios.post(
        'http://localhost:5000/api/auth/register',
        data
      )

      if (res.data.success) {
        setMessage('✅ User registered successfully')

        // 🔄 form reset
        setFormData({
          name: '',
          email: '',
          password: '',
          address: '',
          photo: null
        })

        document.getElementById('photo').value = ''
      } else {
        setMessage(res.data.message)
      }
    } catch (error) {
      setMessage('❌ Something went wrong')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="container py-3" style={{ minHeight: '100vh', display: 'flex',
     alignItems: 'center', justifyContent: 'center', fontFamily: 'Montserrat, sans-serif',
     color:'rgba(28, 83, 77, 1)' }}>

      <div className="row w-100 justify-content-center">
        <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5">
          <div className="card shadow border-0">
            <div className="card-body p-4 p-md-5">

              <h2 className="mb-1 fw-bold text-center" style={{color:'rgba(28, 83, 77, 1)'}}>
                Create Account
              </h2>
              <p className="text-center mb-3" style={{color:'rgba(28, 83, 77, 1)'}}>
                Join us and start your journey
              </p>

              {message && (
                <div className="alert alert-success text-center py-2">
                  {message}
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate>

                <div className="mb-3">
                  <label className="form-label fw-semibold">Full Name</label>
                  <input
                    name="name"
                    type="text"
                    className="form-control"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label fw-semibold">Email Address</label>
                  <input
                    name="email"
                    type="email"
                    className="form-control"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label fw-semibold">Address</label>
                  <input
                    name="address"
                    type="text"
                    className="form-control"
                    value={formData.address}
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label fw-semibold">Password</label>
                  <div className="input-group">
                    <input
                      name="password"
                      type={showPassword ? 'text' : 'password'}
                      className="form-control"
                      value={formData.password}
                      onChange={handleChange}
                    />
                    <button
                      type="button"
                      className="btn btn-outline-secondary"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? 'Hide' : 'Show'}
                    </button>
                  </div>
                </div>

                <div className="mb-4">
                  <label className="form-label fw-semibold">Photo</label>
                  <input
                    id="photo"
                    name="photo"
                    type="file"
                    className="form-control"
                    onChange={handleChange}
                  />
                </div>

                <div className="d-grid mt-4">
                  <button
                    type="submit"
                    className="btn btn-lg fw-semibold"
                    style={{ backgroundColor:'rgba(28, 83, 77, 1)', color:'#fff' }}
                    disabled={loading}
                  >
                    {loading ? 'Please wait...' : 'Sign Up'}
                  </button>
                </div>

              </form>

              <div className="text-center mt-4">
                <small>Already have an account? <a href="#login">Login</a></small>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup
