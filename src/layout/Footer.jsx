import React from "react";
import "./Footer.css";
import { Container, Row, Col } from "reactstrap";
import logo from "./footer-logo.svg";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <Container fluid={true}>
          {/* <Row> */}
          {/* <Col xs="4"> */}
          <div className="">
            <div>
              <div className="d-flex align-items-center">
                <img src={logo} alt="footer-logo" />
                <span className="text-warning">VET</span>
              </div>
            </div>
          </div>
          {/* </Col> */}
          {/* </Row> */}
        </Container>
      </div>
    </>
  );
};

export default Footer;
