import React from 'react'
import { Container , Row , Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Section7 = () => {
  return (
    <>
        <section className="contact_section">
            <Container>
                <Row className='justify-content-center'>
                    <Col sm={8} className='text-center'>
                        <h4>Let’s Connect</h4>
                        <h2>Craving the Perfect Wood-Fired Pizza?</h2>
                        <p>Ready to savor the smoky, artisanal flavors of our handcrafted pizzas? Call us now for a quick order, special discounts, or to ask about our $10 off mobile app offer! Our team is here to make your pizza experience unforgettable.</p>
                        <Link to="tel:9079691064" className="btn btn-red px-4 py-2 rounded-0 calling">
                            <i className="fa fa-phone"></i> Call Me: +91 9079691064
                        </Link>
                    </Col>
                </Row>
                
            </Container>
        </section>
    </>
  )
}

export default Section7
