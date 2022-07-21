import React, { Component } from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
export default class SignUp extends Component {
  render() {
    return (
        <div style={{width:"60%",margin:"5% 20% 5% 20%"}}> 
      {/* <form> */}
        <h3 style={{color:"rgb(202,15,95)"}}>Sign Up</h3>
        <div className="mb-3">
          <label>First name</label>
          <input
            type="text"
            className="form-control"
            placeholder="First name"
          />
        </div>
        <div className="mb-3">
          <label>Last name</label>
          <input type="text" className="form-control" placeholder="Last name" />
        </div>
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>
        <div className="d-grid">
        <a href="/">
          <button type="submit" className="btn btn-primary" style={{backgroundColor:"rgb(202,15,95)"}}>
            Sign Up
          </button>
          </a>
        </div>
        <p className="forgot-password text-right">
          Already registered <a href="/">sign in?</a>
        </p>
      {/* </form> */}
      </div>
    )
  }
}