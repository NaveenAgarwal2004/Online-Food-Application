import React from 'react'
import { Col, Container, Row, Carousel } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import AppStore from '../../../Backend/Public/Assest/Shop/1.svg'
import PlayStore from '../../../Backend/Public/Assest/Shop/2.svg'
import EShop from '../../../Backend/Public/Assest/Shop/Download.webp'
import Brand1 from '../../../Backend/Public/Assest/Brand/Brand1.png'
import Brand2 from '../../../Backend/Public/Assest/Brand/Brand2.png'
import Brand3 from '../../../Backend/Public/Assest/Brand/Brand3.png'
import Brand4 from '../../../Backend/Public/Assest/Brand/Brand4.png'
import Brand5 from '../../../Backend/Public/Assest/Brand/Brand5.png'
import Brand6 from '../../../Backend/Public/Assest/Brand/Brand6.png'
import Brand7 from '../../../Backend/Public/Assest/Brand/Brand7.png'
import Brand8 from '../../../Backend/Public/Assest/Brand/Brand8.png'
import Brand9 from '../../../Backend/Public/Assest/Brand/Brand9.png'
import Brand10 from '../../../Backend/Public/Assest/Brand/Brand10.png'
import Brand11 from '../../../Backend/Public/Assest/Brand/Brand11.png'
import '../../Styles/HomeStyle.css'
const Section5 = () => {
  return (
    <>
        <section className="shop_Section">
            <Container>
                <Row className="align-items-center">
                    <Col lg={6} className='text-center text-lg-start mb-5 mb-lg-0'>
                        <h4>Download Mobile App And</h4>
                        <h2>Get $10 Off</h2>
                        <p>Download our mobile app and get $10 off your first purchase. Use code MOBILE10 at checkout. Limited time only.</p>
                        <Link to="/">
                            <img src={AppStore} alt="IOS" className="img-fluid store me-3 btn" />
                        </Link>
                        <Link to="/">
                            <img src={PlayStore} alt="Android" className="img-fluid store me-3 btn" />
                        </Link>
                    </Col>
                    <Col lg={6}>
                    <img src={EShop} alt="E-Shop" className="img-fluid" />
                    </Col>
                </Row>
            </Container>
        </section>



        <section className="brand_section">
            <Container>
                <Row>
                <Carousel>
                <Carousel.Item>
                    <Carousel.Caption>
                        <div className='d-flex align-items-center justify-content-between'>
                            <div className="brand_img">
                                <img src={Brand1} alt="brand-1" className="img-fluid" />
                            </div>
                            <div className="brand_img">
                                <img src={Brand2} alt="brand-2" className="img-fluid" />
                            </div>
                            <div className="brand_img">
                                <img src={Brand3} alt="brand-3" className="img-fluid" />
                            </div>
                            <div className="brand_img">
                                <img src={Brand4} alt="brand-4" className="img-fluid" />
                            </div>
                            <div className="brand_img">
                                <img src={Brand5} alt="brand-5" className="img-fluid" />
                            </div>
                            <div className="brand_img">
                                <img src={Brand6} alt="brand-6" className="img-fluid" />
                            </div>
                            <div className="brand_img">
                                <img src={Brand7} alt="brand-7" className="img-fluid" />
                            </div>
                            <div className="brand_img">
                                <img src={Brand8} alt="brand-8" className="img-fluid" />
                            </div>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Carousel.Caption>
                        <div className='d-flex align-items-center justify-content-between'>
                        <div className="brand_img">
                                <img src={Brand4} alt="brand-4" className="img-fluid" />
                            </div>
                            <div className="brand_img">
                                <img src={Brand5} alt="brand-5" className="img-fluid" />
                            </div>
                            <div className="brand_img">
                                <img src={Brand6} alt="brand-6" className="img-fluid" />
                            </div>
                            <div className="brand_img">
                                <img src={Brand7} alt="brand-7" className="img-fluid" />
                            </div>
                            <div className="brand_img">
                                <img src={Brand8} alt="brand-8" className="img-fluid" />
                            </div>
                            <div className="brand_img">
                                <img src={Brand9} alt="brand-9" className="img-fluid" />
                            </div>
                            <div className="brand_img">
                                <img src={Brand10} alt="brand-10" className="img-fluid" />
                            </div>
                            <div className="brand_img">
                                <img src={Brand11} alt="brand-11" className="img-fluid" />
                            </div>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                </Carousel>
                </Row>
            </Container>
        </section>
    </>
  )
}

export default Section5
