import React from 'react'

export default function Login() {
  return (
    <div>
        <h1>Login</h1>
        <form >
            <div className="form-group">
              <label for="email">Email</label>
              <input type="email" className="form-control" name="username" />
            </div>
            <div className="form-group">
              <label for="password">Password</label>
              <input type="password" className="form-control" name="password" />
            </div>
            <button type="submit" className="btn btn-dark">Login</button>
          </form>
    </div>
  )
}
