import React, { useEffect } from "react";
import { Container, Row, Col, Button, Form,Card } from "react-bootstrap";
import "../App.css"
import NavBar from "../components/NavBar";
import Banner from "../assets/d5984956d31d491fa815.jpg"

import "bootstrap/dist/css/bootstrap.min.css";
import MyCard from "../components/card";

function Home() {
    const lst = ["Action", "Fantacy", "Mystery", "Comedy", "Teenagers", "Science Fiction"]
  return (
    <Container fluid  className="MYHOME" style={{marginLeft:"-1%"}}>
      {/* <Row> */}
      <NavBar />
          <div className='Container'>
        <header>
          <div className='HeaderText'>
            <div className="SearchBox">
              <Row className="mb-4 RowStyle">
                <Form.Group className="SearchJob" as={Col} sm={10} md={3}>
                  <Form.Select id='Category'>
                    <option>All Category</option>
                    <option value="Doctor" >Doctor</option>
                    <option value="Computer Engineer" >Computer Engineer</option>
                    <option value="Engineer" >Engineer</option>
                    <option value="Receptionist" >Receptionist</option>
                    <option value="Teacher" >Teacher</option>
                    <option value="Business" >Business</option>



                  </Form.Select>
                </Form.Group>

                <Form.Group as={Col} className="SearchJob" sm={10} md={3}>
                  <Form.Select id='Location' >
                    <option>All Location</option>
                    <option value="Karachi">Karachi</option>
                    <option value="Lahore">Lahore</option>
                    <option value="Islamabad">Islamabad</option>
                    <option value="Hyderabad">Hyderabad</option>
                    <option value="Quetta">Quetta</option>
                    <option value="Peshawar">Peshawar</option>



                  </Form.Select>
                </Form.Group>

                <Form.Group as={Col} className="SearchJob" sm={10} md={3}>
               
    <Form.Control id="Keyword" style={{marginTop:18}} type="text" placeholder="Search Keyword" />
                </Form.Group>

                <Form.Group as={Col} sm={10} md={3}>
                  <Button className="search-btn" style={{backgroundColor:"rgb(202,15,95)"}}>Search Items</Button>
                </Form.Group>

              </Row>
            </div>

          </div>
        </header>
      </div>
      <Row style={{marginLeft:"2%",marginTop:"3%"}}>
        <Col m={4}>
        <MyCard/>
        </Col>
        <Col m={4}>
        <MyCard/>
        </Col>
        <Col m={4}>
        <MyCard/>
        </Col><Col m={4}>
        <MyCard/>
        </Col>
        
      </Row>
      <Row style={{marginLeft:"2%",marginTop:"3%"}}>
        <Col m={4}>
        <MyCard/>
        </Col>
        <Col m={4}>
        <MyCard/>
        </Col>
        <Col m={4}>
        <MyCard/>
        </Col><Col m={4}>
        <MyCard/>
        </Col>
        
      </Row>
      <Row style={{marginLeft:"2%",marginTop:"3%"}}>
        <Col m={4}>
        <MyCard/>
        </Col>
        <Col m={4}>
        <MyCard/>
        </Col>
        <Col m={4}>
        <MyCard/>
        </Col><Col m={4}>
        <MyCard/>
        </Col>
        
      </Row>
      <Row style={{marginLeft:"2%",marginTop:"3%"}}>
        <Col m={4}>
        <MyCard/>
        </Col>
        <Col m={4}>
        <MyCard/>
        </Col>
        <Col m={4}>
        <MyCard/>
        </Col><Col m={4}>
        <MyCard/>
        </Col>
        
      </Row>
    </Container>
  );
}

export default Home;