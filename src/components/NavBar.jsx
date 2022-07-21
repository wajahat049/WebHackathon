import React from 'react';
import "../App.css";
import { Link } from "react-router-dom";

import { Navbar, Container } from 'react-bootstrap'

function NavBar() {
  return (
    <Navbar style={{ backgroundColor: "rgb(202,15,95)"}}>
      <Container fluid>
        <Navbar.Brand href="./Home" style={{color:"white"}}>My Restaurant</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse  className="justify-content-end nav">
          <Navbar.Text style={{marginRight:"2%",color:"white" }}>
          {/* <img src={BinanceIcon} alt="Logo" height={"17px"} width={"18px"} className="icon-navBar" /> */}
            <a href="/Item" style={{color:"white"}}><strong> ITEMS </strong></a>
          </Navbar.Text>
          <Navbar.Text style={{marginRight:"2%",color:"white"}}>
          {/* <img src={FTXIcon} alt="Logo" height={"15px"} width={"18px"} className="icon-navBar" /> */}
            <a href="/" style={{color:"white"}}><strong> LOGIN </strong></a>
          </Navbar.Text>
          <Navbar.Text style={{marginRight:"2%",color:"white"}}>
          {/* <img src={InchIcon} alt="Logo" height={"15px"} width={"18px"} className="icon-navBar" /> */}
            <a href="/Signup" style={{color:"white"}}><strong> SIGNUP </strong></a>
          </Navbar.Text>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;