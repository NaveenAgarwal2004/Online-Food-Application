import React from 'react';
import { Col, Card as BootstrapCard } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../../Styles/HomeStyle.css';

const MenuCard = ({ image, rating, title, price, paragraph, renderRatingIcon }) => {
  return (
    <Col sm={6} lg={4} xl={3} className="mb-4">
      <BootstrapCard className="overflow-hidden">
        <div className="overflow-hidden images">
          <BootstrapCard.Img variant="top" src={image} />
        </div>
        <BootstrapCard.Body>
          <div className="d-flex align-items-center justify-content-between">
            <div className="item_rating">{renderRatingIcon(rating)}</div>
            <div className="Wishlist">
              <i className="bi bi-heart"></i>
            </div>
          </div>
          <BootstrapCard.Title>{title}</BootstrapCard.Title>
          <BootstrapCard.Text>{paragraph}</BootstrapCard.Text>
          <div className="d-flex align-items-center justify-content-between">
            <div className="menu_price">
              <h5 className="mb-0">{price}</h5>
            </div>
            <div className="add_to_cart">
              <Link to="/">
                <i className="bi bi-bag me-2"></i>
                Add to Cart
              </Link>
            </div>
          </div>
        </BootstrapCard.Body>
      </BootstrapCard>
    </Col>
  );
};

export default MenuCard;