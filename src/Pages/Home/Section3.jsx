import React, { useState, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import MenuCard from '../../Components/Layouts/Carding.jsx'; // Note: Ensure the correct path
import { Link } from 'react-router-dom';

const renderRatingIcon = (rating) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    if (rating > 0.5) {
      stars.push(<i key={i} className="bi bi-star-fill"></i>);
      rating--;
    } else if (rating > 0 && rating < 1) {
      stars.push(<i key="half" className="bi bi-star-half"></i>);
      rating--;
    } else {
      stars.push(<i key={`empty${i}`} className="bi bi-star"></i>);
    }
  }
  return stars;
};

const Section3 = () => {
  const [menuData, setMenuData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/menu')
      .then((response) => response.json())
      .then((data) => setMenuData(data))
      .catch((error) => console.error('Error fetching menu data:', error));
  }, []);

  const baseUrl = 'http://localhost:5000';

  return (
    <section className="menu_section">
      <Container>
        <Row>
          <Col lg={{ span: 8, offset: 2 }} className="text-center mb-5">
            <h2>Sizzling Menu</h2>
            <p className="text-center mb-5 lead text-muted para">
              Dive into a world of bold flavors and artisanal mastery! Our wood-fired pizzas are
              handcrafted with the finest ingredients, kissed by flames for that perfect smoky
              crust. From fiery classics to gourmet creations, each bite tells a story of
              passion—explore the menu and savor the sizzle!
            </p>
          </Col>
        </Row>
        <Row className="g-4"> {/* Added g-4 for gutter spacing */}
          {menuData.map((item) => (
            <MenuCard
              key={item.id}
              image={`${baseUrl}${item.image}`}
              rating={item.rating}
              title={item.name}
              paragraph={item.description}
              price={item.price}
              renderRatingIcon={renderRatingIcon}
            />
          ))}
        </Row>
        <Row className="pt-5">
          <Col sm={6} lg={5}>
            <div className="ads_box ads_img1 mb-5 mb-md-0 box1">
              <h4 className="mb-0">Limited Time Offer</h4>
              <h5>Get 10% off on your first order</h5>
              <Link to="/" className="btn btn-red px-4 rounded-0">Order Now</Link>
            </div>
          </Col>
          <Col sm={6} lg={7}>
            <div className="ads_box ads_img2">
              <h4 className="mb-0">Order Now & Get Free Delivery</h4>
              <h5>On orders above $50</h5>
              <Link to="/" className="btn btn-red px-4 rounded-0">Order Now</Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Section3;