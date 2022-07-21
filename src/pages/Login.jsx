import React, { Component } from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
// import "bootstrap"
export default class Login extends Component {
  render() {
    return (
        <div style={{width:"60%",margin:"5% 20% 5% 20%"}}>
      {/* <form> */}
        <h3 style={{color:"rgb(202,15,95)"}}>LogIn</h3>
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
        <div className="mb-3">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>
        <div className="d-grid">
        <a href="./Home">
          <button  type="submit" style={{backgroundColor:"rgb(202,15,95)"}} className="btn btn-primary">
            Submit
          </button>
          </a>
          <br/>
          <a href="./Home" style={{marginBottom:"2%"}}>
          <button  type="submit" style={{backgroundColor:"rgb(202,15,95)"}} className="btn btn-primary">
            Login With Google 
          </button>
          </a>
          <a href="./Home">
          <button  type="submit" style={{backgroundColor:"navy"}} className="btn btn-primary">
            Login With FaceBook 
          </button>
          </a>
        </div>
        <p className="forgot-password text-right">
          <a href="/Signup" style={{color:"rgb(202,15,95)"}}>Signup</a>
        </p>
      {/* </form> */}
      </div>
    )
  }
}