import React from "react";
import ProfilePic from "../components/Profile";
import Contact from "../components/Contact";
import { Row, Container, Col } from "../components/Grid";
import Image from "../images/about/backgroundImage.jpg";
import "./style.css";


function About() {
  return (
      <>
      <ProfilePic backgroundImage={Image}>
        <h1>Salvador Gamez</h1>
        <h2>Customer's are the HEROES</h2>
      </ProfilePic>

      <Container>
        <Row>
          <Col size="md-12">
            <h1>Welcome To My Page Everyone!</h1>
          </Col>
        </Row>
        </Container>

        <Container>
        <Row>
          <Col size="md-12">
            <p></p>
            <p>
             
            </p>
            <p>
    
            </p>
            <Row>
              <Contact />
            </Row>
          </Col>
        </Row>
      </Container>
   
    </>
  );
}

export default About;
