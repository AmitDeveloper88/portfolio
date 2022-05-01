import React from "react";
import image1 from '../assets/image2.png'
import "bootstrap/dist/css/bootstrap.css";
import { Container, Col, Row, Image } from "react-bootstrap";

export default function Body() {
  return (
    <div>
      <Container>
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
      </Container>
    </div>
  );
}
