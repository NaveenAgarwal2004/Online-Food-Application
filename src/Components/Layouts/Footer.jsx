import React, { useState, useEffect } from 'react';
import {Container, Row, Col} from "react-bootstrap";
import {Link} from "react-router-dom";

const Footer = () => {

  //Scroll

  const [scroll, setScroll] = useState(false);
  const scrollTop = () => {
    scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleScroll = () => {
    let heightToHidden = 250;
    const windowScroll = document.body.scrollTop || document.documentElement.scrollTop;

    if(windowScroll>heightToHidden){
      setScroll(true);
    }
    else{
      setScroll(false);
      }
  }

  useEffect(()=>{
    addEventListener("scroll", handleScroll);
  })
  return (
    <>
      <footer>
        <Container>
          <Row>
            <Col sm={6} lg={3} className='mb-4 mb-lg-0'>
              <div className="text-center">
                <h5>Location</h5>
                <p>123 Wood-Fired Lane</p>
                <p>Metro City, MH 400001, India</p>
                <p>Visit us for a cozy dining experience!</p>
              </div>
            </Col>
            <Col sm={6} lg={3} className='mb-4 mb-lg-0'>
              <div className="text-center">
                <h5>Working Hours</h5>
                <p>Monday - Friday:11:00AM - 10:00PM</p>
                <p>Saturday - Sunday:10:00AM - 11:00PM</p>
                <p>Closed on Public Holidays</p>
              </div>
            </Col>
            <Col sm={6} lg={3} className='mb-4 mb-lg-0'>
              <div className="text-center">
                <h5>Order Now</h5>
                <p>Call us for a quick delivery!</p>
                <p>
                  <Link to="tel:+919079691064" className="calling">
                    +91 9079691064
                  </Link>
                </p>
              </div>
            </Col>
            <Col sm={6} lg={3} className='mb-4 mb-lg-0'>
              <div className="text-center">
                <h5>Follow us</h5>
                <p> Stay updated with our latest news and offers!</p>
                <ul className='list-unstyled text-center mt-2'>
                  <li>
                    <Link to="https://www.facebook.com/yummypizzas" target="_blank" rel="noopener noreferrer">
                    <i class="bi bi-facebook"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="https://www.twitter.com/yummypizzas" target="_blank" rel="noopener noreferrer">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter-x" viewBox="0 0 16 16">
                        <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
                      </svg>
                    </Link>
                  </li>
                  <li>
                    <Link to="https://www.instagram.com/yummypizzas" target="_blank" rel="noopener noreferrer">
                      <i class="bi bi-instagram"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="https://www.youtube.com/@yummypizzas" target="_blank" rel="noopener noreferrer">
                    <i class="bi bi-youtube"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
          <Row className='copy_right'>
                    <Col>
                        <div>
                            <ul className='list-unstyled text-center mb-0'>
                                <li>
                                    <Link to="/">
                                    © {new Date().getFullYear()} <span> Yummy Pizzas </span> All rights reserved
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/">
                                    About Us
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/">
                                        Terms of Use
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/">
                                    Privacy Policy
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </Col>
                </Row>
        </Container>
      </footer>

      {/* Scroll to top button */}

      {
        scroll && (
        <div className="scroll_top" onClick={scrollTop}>
          <i className="bi bi-arrow-up"></i>
        </div>
        )
      }

      
    </>
  )
}

export default Footer
