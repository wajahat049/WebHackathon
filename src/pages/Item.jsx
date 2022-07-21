import React, { useEffect } from "react";
import { Container, Row, Col, Button, Form,Card } from "react-bootstrap";
import "../App.css"
import NavBar from "../components/NavBar";
import Banner from "../assets/d5984956d31d491fa815.jpg"

import "bootstrap/dist/css/bootstrap.min.css";
import MyCard from "../components/card";

function Item(){
    return(
        <>
      <NavBar />
      <h2 style={{color:"rgb(202,15,95)",textAlign:"center",marginTop:"2%"}}>ALL ITEMS</h2>
        <Row style={{marginLeft:"2%",marginTop:"2%"}}>
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
        
      </Row><Row style={{marginLeft:"2%",marginTop:"3%"}}>
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
      </>
    )
}
export default Item