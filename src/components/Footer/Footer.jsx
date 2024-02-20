import React from "react";
import { Container , Row ,Col ,ListGroup ,ListGroupItem } from "reactstrap";
import logo from '../../assets/images/res-logo.png';
import '../../styles/footer.css';
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <footer className="footer">
      <Container>
    <Row>
      <Col lg="3" md ="4" sm="6">
      <div className="footer__logo text-start">
          <img src ={logo} alt="logo"/>
          <h5>Tasty Treat</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Accusamus placeat totam laborum ratione, aspernatur enim 
            error .
          </p>
        </div>
      </Col>

      <Col lg="3" md ="4" sm="6">
        <h5 className="footer__title">Delivery Time</h5>
        <ListGroup className="delivery__time-list">
          <ListGroupItem className=" delivery__time-item border-0 ps-0">
            <span> Monday - Friday</span>
            <p>10:00am - 11:00pm</p>
          </ListGroupItem>

          <ListGroupItem className="delivery__time-item border-0 ps-0">
            <span> Saturday - Sunday </span>
            <p>Off day</p>
          </ListGroupItem>
        </ListGroup>
      </Col>

      <Col lg="3" md ="4" sm="6">
      <h5 className="footer__title">Contact</h5>
        <ListGroup className="delivery__time-list">
        <ListGroupItem className=" delivery__time-item border-0 ps-0">
            <p>Location: MyColony,Lycet-210, Pimpri</p>
          </ListGroupItem>

          <ListGroupItem className=" delivery__time-item border-0 ps-0">
            <span>Phone: 7152369852</span>
          </ListGroupItem>

          <ListGroupItem className="delivery__time-item border-0 ps-0">
            <span>Email: abc@gmail.com</span>
          </ListGroupItem>
        </ListGroup>
      </Col>

      <Col lg="3" md ="4" sm="6">
      <h5 className="footer__title">Newsletter</h5>
      <p>Subscribe our newsletter</p>
      <div className="newsletter">
        <input type="email"placeholder="Enter Your email" />
        <span><i class="ri-send-plane-line"></i></span>
      </div>
      </Col>
    </Row>
    <Row className="mt-5">
      <Col lg="6" md="6">
        <p className="copyright__text">Copyright-2024,Website made by Rutika Saste.
          All Rights Reserved.</p>
      </Col>
      <Col lg="6" md="6">
        <div className="social__links d-flex align-items-center gap-4 justify-content-end">
          <p className="m-0">Follow: </p>
          <span><Link to='https://www.facebook.com/rutikasaste'><i class="ri-facebook-fill"></i></Link></span>
          <span><Link to='https://github.com/sasterutika2219'><i class="ri-github-fill"></i></Link></span>
          <span><Link to='https://www.youtube.com/rutikasaste'><i class="ri-youtube-fill"></i></Link></span>
          <span><Link to='https://www.linkedin.com/rutikasaste'><i class="ri-linkedin-fill"></i></Link></span>
        </div>
      </Col>
    </Row>
  </Container>
    </footer>
  )
  
  
};

export default Footer;