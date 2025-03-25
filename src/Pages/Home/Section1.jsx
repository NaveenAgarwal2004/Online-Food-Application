import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Pizza from '../../Food_Assets/assets/hero/pizza.jpg';
import { Link } from 'react-router-dom';

const Section1 = () => {
  return (
    <section className="hero_section">
      <Container>
        <Row>
          <Col lg={7} className="mb-5 mb-lg-0">
            <div className="position-relative">
              <img src={Pizza} className="img-fluid" alt="Wood-fired pizza" />
              <div className="price_Badge">
                <div className="badge_Text">
                  <h4 className="h4_xs">Starting at</h4>
                  <h3 className="h3_xs">$12.99</h3>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={5}>
            <div className="hero_text text-center">
              <h1 className="text-white">New Pizza</h1>
              <h2 className="text-white">Hand-crafted, wood-fired, and bubbling with flavor</h2>
              <p className="text-white font-weight-bold pt-2 pb-4">
                Our artisanal dough is stretched by hand, topped with premium ingredients and slow-roasted to perfection in our wood-fired oven. Experience the perfect balance of crispy crust and melty cheese that makes every slice unforgettable.
              </p>
              <Link to="/" className="btn order" aria-label="Order pizza now">
                Order Now
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Section1;