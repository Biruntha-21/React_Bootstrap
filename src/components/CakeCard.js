import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const CakeCard = () => {
  return (

    <Container>
      <Row className="justify-content-between">
        <Col className="d-flex">
          <Card style={{ width: '28rem' }} className='m-3'>
            <Card.Img variant="top" src={require('../assets/cheesecake.jpg')} />
            <Card.Body>
              <Card.Title className="text-center">Cheesecake</Card.Title>
              <Card.Text>
              Cheesecake is a dessert with a thick, creamy filling of cheese, eggs, and sugar, and a crust.
              </Card.Text>
              <div className="text-center">
                <Button variant="primary">Add to Cart</Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="justify-content-between">
      <Col className="d-flex">
          <Card style={{ width: '28rem' }} className='m-3'>
            <Card.Img variant="top" src={require('../assets/fairycupcake.jpg')} />
            <Card.Body>
              <Card.Title className="text-center">Fairy Cupcake</Card.Title>
              <Card.Text>
              Fairy cakes are often drizzled with icing  rather than piled high with a rosette of buttercream or cream cheese frostings
              </Card.Text>
              <div className="text-center">
                <Button variant="primary">Add to Cart</Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="justify-content-between">
      <Col className="d-flex">
          <Card style={{ width: '28rem' }} className='m-3'>
            <Card.Img variant="top" src={require('../assets/brownie.jpg')} />
            <Card.Body>
              <Card.Title className="text-center"> Chocolate Brownie</Card.Title>
              <Card.Text>
                a small, square chocolate cake that is soft in the middle, often with pieces of chocolate or nuts in it
              </Card.Text>
              <div className="text-center">
                <Button variant="primary">Add to Cart</Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    
  )
}

export default CakeCard;