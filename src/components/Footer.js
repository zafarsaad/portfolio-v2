import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/profile-picture.jpeg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center justify-center">
          {/* <MailchimpForm /> */}
          <Col size={12} xs={6}>
            <div className="profile-picture-container profile-picture-container-footer"><img className="profile-picture" src={logo} alt="Logo" /></div>
          </Col>
          <Col size={12} xs={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://github.com/zafarsaad"><img src={navIcon1} alt="" /></a>
              <a href="https://www.linkedin.com/in/zafarsaad/"><img src={navIcon2} alt="" /></a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
