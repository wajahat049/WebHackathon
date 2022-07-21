import React, { useState, useEffect } from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Button,
  CardGroup,
  Card,
  Container,
  Row,
  Col,
  Modal,
} from "react-bootstrap";
import cardImage1 from "../assets/photo-1555939594-58d7cb561ad1.avif"

function MyCard() {
  
  return (
    // <Container>
    //   <Container>
        <Row className="g-4">
            <Col>
              <Card className="my_card" key={"data[idx].id"}>
                <Card.Img 
                // onClick={() => OpenPdf(data[idx].id, data[idx].Pdf)}
                  variant="top"
                  src={cardImage1}
                  style={{height:"300px"}}
                />
                <Card.Body>
                  <Card.Title style={{fontWeight: "bold"}}>
                    Platter
                  </Card.Title>
                  <Card.Text className="my_card_text">
                    Delicous and Yummy bbq platter
                  </Card.Text>
                </Card.Body>
                <Card.Text
                  className="stars_div text-center"
                  type="button"
                //   onClick={() => ShowModal(true, data[idx].id)}
                >
                  {[...Array(5)].map((_, index) => {
                    return (
                      <span
                      style={{
                  color:"yellow"

                      }}
                      >
                        &#9733;
                      </span>
                    );
                  })}

                </Card.Text>

              </Card>
            </Col>
          {/* ))} */}
        </Row>
  );
}

export default MyCard;



