import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Container, Col, Row, Nav, Image } from "react-bootstrap";
import js from "../assets/js.png";
import image1 from "../assets/image2.png";
import image3 from "../assets/image3.jpg";
import image4 from "../assets/image4.jpg";

export default function Header() {
  const h = "100vh";

  return (
    <div>
      <Container className="bg-dark" style={{ height: h }}>
        <Row className="" style={{ backgroundColor: "#020912" }}>
          <Col className="text-warning">
            <Image fluid roundedCircle width={40} src={js} alt="Portfolio" />{" "}
            <code> Amit Portfolio</code>
          </Col>

          <Col>
            <Nav
              defaultActiveKey="/home"
              as="ul"
              className="justify-content-end"
            >
              <Nav.Item as="li">
                <Nav.Link className="link-light" link-white href="/home">
                  Home
                </Nav.Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Nav.Link className="link-light" eventKey="link-1">
                  About me
                </Nav.Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Nav.Link className="link-light" eventKey="link-2">
                  Contact me
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
        </Row>

        <Row
          fluid
          className="justify-content-center align-items-center text-warning  "
          style={{
            backgroundColor: "#020912",
            height: "100vh",
            minHeight: "600px",
          }}
        >
          <Col
            xs={7}
            className=" display-1 text-start  text-light "
            style={{ paddingLeft: "100px" }}
          >
            <p>
              Hi, I'm{" "}
              <span className="" style={{ color: "#98e8cd" }}>
                Amit,
              </span>{" "}
            </p>
            <p className="display-6">
              <pre>I'm Web/App Developer.</pre>
            </p>
          </Col>
          <Col className="text-warning ">
            <Image fluid src={image1} width="400" alt="image" />
          </Col>
        </Row>

        <Row
          fluid
          className="  text-warning  "
          style={{
            backgroundColor: "#020912",
            height: "100vh",
            minHeight: "600px",
          }}
        >
          <Col className=" display-6    text-light text-start">
            <p>
             
              <span className=" p-3" style={{ color: "#98e8cd" }}>
                About Amit
              </span>
            </p>
            <p className="h4 p-3 border border-secondary ">
              I have over 4 years of experience designing the user interface and
              user experience of dozens of today's top websites and apps. I am
              passionate about bold but intuitive design, and doing work for
              companies with social responsibility.
            </p>

            <Image
              fluid
              className="p-3 pt-3"
              src={image3}
              style={{ width: "100%", height: "300px", objectFit: "cover" }}
              alt="image3"
            />
          </Col>
        </Row>

        <Row
          fluid
          className=" p-3  text-warning  "
          style={{
            backgroundColor: "#020912",
            height: "100vh",
            minHeight: "600px",
          }}
        >
          <Col className="p-3 display-6  text-light align-self-start" >
            <p>
              <span className="">
                Credentials
              </span>
            </p>
            <Image
              fluid
              className=""
              src={image4}
              style={{ width: "100%", height: "300px", objectFit: "cover" }}
              alt="image3"
            />
          </Col>

          <Col className="p-5 pt-6 align-self-center">
            <Row>
              <Col  className=" h5 text-end" style={{ color: "#98e8cd" }}>
                Education:
              </Col>
              <Col className="h5 text-light" >
                <p>Master of Computer Application (MCA)</p>
                <pre>(2011-2014)</pre>
              </Col>
            </Row>
            <Row>
              <Col  className=" h5 text-end" style={{ color: "#98e8cd" }}>
                Skills:
              </Col>
              <Col className="h5 text-light" >
                <p>ReactJs, JavaScript, Flutter, HTML, CSS</p>
                
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
