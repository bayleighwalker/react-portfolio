import React, { useState } from "react";
import { Row, Container, Col } from "../components/Grid";
import Contact from "../components/Contact";
import Carousel from "react-bootstrap/Carousel";
import Jumbotron from "react-bootstrap/Jumbotron";
import Project2 from "../images/projects/scheduler.jpg";
import Project3 from "../images/projects/passwordgenerator.jpg";
import Project4 from "../images/projects/notetaker.JPG";
import Project6 from "../images/projects/budgettracker.jpg";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import "./style.css";

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <Jumbotron>
        <Container>
          <Row>
            <Col size="md-12">
              <h1>Full Stack Projects</h1>
              <p>
                All projects display the use of several coding languages for
                example: NodeJS, JavaScript, HTML, CSS, React, SQL, MongoDB.
  
              </p>
            </Col>
          </Row>

          <Row>
            <Contact />
          </Row>
        </Container>
      </Jumbotron>

      <Container>
        <Row>
          <Col size="md-12">
            <Carousel activeIndex={index} onSelect={handleSelect}>
              <Carousel.Item>
                <Image
                  className="d-block w-100"
                  src={Project1}
                  alt="WeatherDashboard"
                />
                <Carousel.Caption>
                  <h3>Weather Dashboard Demo</h3>
                  <Button
                    variant="outline-dark"
                    href="https://github.com/bayleighwalker/weather"
                    target="_blank"
                  >
                    Click
                  </Button>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <Image
                  className="d-block w-100"
                  src={Project2}
                  alt="WorkDay Scheduler"
                />
                <Carousel.Caption>
                  <h3>WorkDay Scheduler Demo</h3>
                  <Button
                    variant="outline-dark"
                    href="https://github.com/bayleighwalker/workday-planner"
                    target="_blank"
                  >
                    Click
                  </Button>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <Image
                  className="d-block w-100"
                  src={Project3}
                  alt="Password Generator"
                />
                <Carousel.Caption>
                  <h3>Password Generator Demo</h3>
                  <Button
                    variant="outline-dark"
                    href="https://github.com/bayleighwalker/pwdgenerator"
                    target="_blank"
                  >
                    Click
                  </Button>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <Image
                  className="d-block w-100"
                  src={Project4}
                  alt="Note Taker"
                />
                <Carousel.Caption>
                  <h3>Note Taker Demo</h3>
                  <Button
                    variant="outline-dark"
                    href="https://github.com/bayleighwalker/note-taker"
                    target="_blank"
                  >
                    Click
                  </Button>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <Image
                  className="d-block w-100"
                  src={Project6}
                  alt="Budget Tracker"
                />
                <Carousel.Caption>
                  <h3>Budget Tracker Demo</h3>
                  <Button
                    variant="outline-dark"
                    href="https://github.com/bayleighwalker/budget-tracker"
                    target="_blank"
                  >
                    Click
                  </Button>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default ControlledCarousel;
