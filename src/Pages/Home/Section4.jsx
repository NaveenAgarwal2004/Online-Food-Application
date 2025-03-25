import React from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Section4 = () => {
  return (
    <>
      <section className="promotion_section">
        <Container>
          <Row className="align-items-center">
            {/* Image Column - Full width on small screens, half on large screens */}
            <Col xs={12} lg={6} className="text-center mb-4 mb-lg-0 ">
              <div className="img123">
                <img
                  src="Backend/Public/Assest/Promote/Promotion1.webp"
                  alt="Promotion"
                  className="img-fluid promotion-img"
                />
              </div>
            </Col>
            {/* Text Column - Full width on small screens, half on large screens */}
            <Col xs={12} lg={6} className="px-3 px-md-5 px-lg-4 px-xl-5">
            <div className="text-content">
              <h2 className="text-danger mb-4">
                Savor the Sizzle: <span style={{ color: '#FFD700' }}>20% Off!</span>
              </h2>
              <p>
                Enjoy 20% off your next order when you choose any combo! Mix and match our wood-fired pizzas, savory sides, decadent desserts, and refreshing drinks for the ultimate meal.
              </p>
              <ul>
                <li>
                  <p>
                    <i className="bi bi-check-circle-fill text-success me-2"></i>
                    Applicable to combos of 2 or more items.
                  </p>
                </li>
                <li>
                  <p>
                    <i className="bi bi-check-circle-fill text-success me-2"></i>
                    Offer valid until March 17, 2025.
                  </p>
                </li>
                <li>
                  <p>
                    <i className="bi bi-check-circle-fill text-success me-2"></i>
                    Use code <strong>COMBO20</strong> at checkout.
                  </p>
                </li>
              </ul>
              <Button
                as={Link}
                to="/menu"
                className="mt-4 px-4 rounded-0 btn btn-red"
              >
                Learn More
              </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Parallax Scroll */}
      <section className="bg_parallax_scroll"></section>
    </>
  );
};

export default Section4;