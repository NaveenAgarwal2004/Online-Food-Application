import React, { useState, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Section2 = () => {
  const [mockData, setMockData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/about')
      .then((response) => response.json())
      .then((data) => setMockData(data))
      .catch((error) => console.error('Error fetching mock data:', error));
  }, []);

  const baseUrl = 'http://localhost:5000'; // Backend base URL

  return (
    <>
      <section className="about_section">
        <Container>
          <Row>
            <Col lg={{ span: 8, offset: 2 }} className="text-white font-weight-bold pt-2 pb-4 text-center">
              <h2 className="text-white-50 text-black-50">
                Crafting Unforgettable Pizzas with Passion and Tradition
              </h2>
              <p>
                At our pizzeria, every pizza tells a story of dedication and heritage. We blend
                time-honored techniques with the finest ingredients, hand-stretching our artisanal
                dough and firing it to perfection in a wood-fired oven. From the smoky crispness of
                the crust to the rich, bubbling flavors of premium toppings, each bite is a
                celebration of craftsmanship designed to leave a lasting impression. Taste the
                tradition that’s been perfected over generations—pizza as it was meant to be.
              </p>
              <Link to="/" className="btn order btn-red">
                Explore Our Menu
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="about_wrapper">
        <Container>
          <Row className="justify-content-md-center">
            {mockData.map((cardData, index) => (
              <Col md={6} lg={4} className="mb-4 mb-md-0" key={index}>
                <div className="about_box text-center">
                  <div className="about_icon">
                    <img
                      src={`${baseUrl}${cardData.image}`} // Prepend backend base URL
                      alt={cardData.title}
                      className="img-fluid"
                    />
                  </div>
                  <h3>{cardData.title}</h3>
                  <p className="text-white">{cardData.paragraph}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Section2;