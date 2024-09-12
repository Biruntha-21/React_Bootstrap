import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import CakeCard from './CakeCard'

const Menu = () => {

   
  return (
    <section id="menu" className='bg-light'>
        <Container fluid>
            <div className='text-center'>
              <h3 className="display-6 my-3 py-5">Life is all about finding new tastes and flavors!</h3>
            </div>
            <Row className="justify-content-between"> 
                <Col xs={12} md={4} lg={4}  className="d-flex">
                  <CakeCard/>
                </Col>
                <Col xs={12}  md={4} lg={4}  className="d-flex">
                  <CakeCard/>
                </Col>
                <Col xs={12}  md={4} lg={4}  className="d-flex">
                  <CakeCard/>
                </Col>
            </Row>
            
        </Container>

    </section>
  )
}

export default Menu