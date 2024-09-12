import React from 'react'
import { Col, Container, Row } from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel';


const Banner = () => {
  return (
    <Container fluid>
      <Row className="justify-content-center align-items-center">
        <Col lg={6}>
          <Carousel>
            <Carousel.Item interval={2000}>
              <img
                className="d-block w-100"
                src={require('../assets/cake1.jpg')}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>Chocolate Truffle Cake</h3>
                <p className="d-none d-sm-block">
                  a chocolate layer cake recipe with dense, moist chocolate cake, silky chocolate truffle frosting and chocolate flakes.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
              <img
                className="d-block w-100"
                src={require('../assets/cake2.jpg')}
                alt="Second slide"
              />

              <Carousel.Caption>
                <h3>Fairy Cupcake</h3>
                <p className="d-none d-sm-block">
                  Miniature in stature but massive in flavor.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
              <img
                className="d-block w-100"
                src={require('../assets/cake3.jpg')}
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Blueberry Pancake</h3>
                <p className="d-none d-sm-block">
                  Fluffy blueberry pancakes are simple and delicious perfect for drizzling with topping with butter.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
      <div className="text-center">
        <h2 className="display-5 mt-3">Desserts for Every Occasion!</h2>
        <p className="lead text-muted">Universal language for joy and love that offers a sense of comfort </p>
      </div>
    </Container>
   
  )
}

export default Banner