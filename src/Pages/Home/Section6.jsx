import React from "react";
import { Container, Row, Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import User1 from "../../../Backend/Public/Assest/Review/User1.jpg";
import User2 from "../../../Backend/Public/Assest/Review/User2.jpg";
import User3 from "../../../Backend/Public/Assest/Review/User3.jpg";
import User4 from "../../../Backend/Public/Assest/Review/User4.jpg";
import User5 from "../../../Backend/Public/Assest/Review/User5.jpg";
import User6 from "../../../Backend/Public/Assest/Review/User6.jpg";
import User7 from "../../../Backend/Public/Assest/Review/User7.jpg";
import User8 from "../../../Backend/Public/Assest/Review/User8.jpg";

const Section6 = () => {
  return (
    <>
      <section className="blog_section">
        <Container>
          <Row>
            <Carousel>
              <Carousel.Item>
                <Carousel.Caption>
                  <div className="user_img">
                    <img src={User1} alt="John Doe" className="img-fluid" />
                  </div>
                  <p>
                    I was a bit skeptical about the quality of the pizza, but
                    after trying the Blazing Margherita, I can say it’s worth
                    every penny! The smoky crust and fresh ingredients are
                    unbeatable. Delivery was on time, and I’ll definitely
                    recommend it to my friends and family.
                  </p>
                  <div className="item_rating mb-2">
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                  </div>
                  <h5>John Doe</h5>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <Carousel.Caption>
                  <div className="user_img">
                    <img src={User2} alt="Sarah Miller" className="img-fluid" />
                  </div>
                  <p>
                    The wood-fired pizza here is next level! The Pepperoni
                    Inferno had the perfect balance of spice and flavor, and the
                    crust was so crispy. I also loved the garlic bread on the
                    side—it’s a must-try. Can’t wait to order again!
                  </p>
                  <div className="item_rating mb-2">
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                  </div>
                  <h5>Sarah Miller</h5>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <Carousel.Caption>
                  <div className="user_img">
                    <img
                      src={User3}
                      alt="Michael Brown"
                      className="img-fluid"
                    />
                  </div>
                  <p>
                    I ordered a custom pizza with extra mozzarella, and it was
                    absolutely delicious! The wood-fired taste really shines
                    through, and the ingredients were so fresh. The $10 off
                    mobile app deal was a nice bonus too. Highly recommend!
                  </p>
                  <div className="item_rating mb-2">
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                  </div>
                  <h5>Michael Brown</h5>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <Carousel.Caption>
                  <div className="user_img">
                    <img src={User4} alt="Emily Davis" className="img-fluid" />
                  </div>
                  <p>
                    This place has become my go-to for pizza nights! The
                    artisanal touch on every pizza is incredible, and the smoky
                    flavor from the wood-fired oven is unmatched. The free
                    delivery on orders over $50 is a great perk. Love it!
                  </p>
                  <div className="item_rating mb-2">
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                  </div>
                  <h5>Emily Davis</h5>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <Carousel.Caption>
                  <div className="user_img">
                    <img src={User5} alt="David Wilson" className="img-fluid" />
                  </div>
                  <p>
                    I tried the Veggie Delight pizza, and it was a flavor
                    explosion! The fresh basil and roasted veggies paired
                    perfectly with the smoky crust. The customer service was
                    amazing—they even called to confirm my order. Five stars all
                    the way!
                  </p>
                  <div className="item_rating mb-2">
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                  </div>
                  <h5>David Wilson</h5>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <Carousel.Caption>
                  <div className="user_img">
                    <img
                      src={User6}
                      alt="Lisa Thompson"
                      className="img-fluid"
                    />
                  </div>
                  <p>
                    Hands down the best pizza I’ve ever had! The Four Cheese
                    pizza was so creamy and flavorful, and you can really taste
                    the wood-fired difference. The packaging was great, and the
                    pizza arrived hot. I’m officially a fan!
                  </p>
                  <div className="item_rating mb-2">
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                  </div>
                  <h5>Lisa Thompson</h5>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <Carousel.Caption>
                  <div className="user_img">
                    <img src={User7} alt="Chris Evans" className="img-fluid" />
                  </div>
                  <p>
                    The pizza here is phenomenal! I ordered the BBQ Chicken
                    pizza, and the smoky crust paired with the tangy sauce was
                    perfection. The mobile app made ordering super easy, and the
                    10% off first order deal was a nice touch. Highly
                    recommend!
                  </p>
                  <div className="item_rating mb-2">
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                  </div>
                  <h5>Chris Evans</h5>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <Carousel.Caption>
                  <div className="user_img">
                    <img src={User8} alt="Anna Lee" className="img-fluid" />
                  </div>
                  <p>
                    I love the passion behind every pizza here! The Margherita
                    was a classic done right—fresh tomatoes, creamy mozzarella,
                    and that perfect wood-fired char. The garlic bread side was
                    a great addition too. I’ll definitely be back for more!
                  </p>
                  <div className="item_rating mb-2">
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                  </div>
                  <h5>Anna Lee</h5>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Section6;
