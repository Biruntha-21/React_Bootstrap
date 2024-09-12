import React, { useState } from 'react'
import { Col, Container, Row, Image, Button } from 'react-bootstrap';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';

const WeeklySpecial = () => {
    const [show, setShow] = useState(false);
  return (
    <section id="musttry" className='my-3'>
        <div className="text-center my-2 py-5">
        <h2 className="display-6"><span><i class="bi bi-search-heart"></i> Weekly Special! </span></h2>
        <hr></hr>
        </div>
        <div>
        <Container>
            <Row className='align-items-center'>
                <Col md={7}>
                    <Image src={require('../assets/redvelvet.jpg')} fluid={true} alt='RedvelvetCake'rounded></Image>
                </Col>
                <Col md={5}>
                    <div className='p-3'>
                        <h2 className="display-6">Red velvet Cake</h2>
                        <p className="lead text-muted">Red velvet cake is a unique cake flavor that is known for its distinctive taste. It has a slightly tangy and slightly chocolatey flavor that is balanced out by the sweetness of the cake.</p>
                        <Button onClick={()=> setShow(true)}>
                            <i class="bi bi-bag-heart"></i> Order Now
                        </Button>
                    </div>
                </Col>
            </Row>

            <ToastContainer className="position-fixed bottom-0 end-0 p-3" position='bottom-end'>
              <Toast onClose={()=> setShow(false)} show={show} delay={3000} autohide>
                <Toast.Header closeButton={false}>
                    <img
                     src="holder.js/20x20?text=%20"
                     className="rounded me-2"
                     alt=""
                    />
                    <strong className="me-auto">Added!</strong>
                    <small>1 mins ago</small>
                </Toast.Header>
                <Toast.Body>Your order has been placed successfully. <i class="bi bi-emoji-smile"></i></Toast.Body>
               </Toast>
            </ToastContainer>
            </Container>
            </div>
            <hr></hr>
             
            <div>
            <Container>
            <Row className='align-items-center'>
                <Col md={7}>
                    <Image src={require('../assets/mango.jpg')} fluid={true} alt='MangoPudding' rounded></Image>
                </Col>
                <Col md={5}>
                    <div className='p-3'>
                        <h2 className="display-6">Mango Pudding</h2>
                        <p className="lead text-muted">A smooth, velvety and soft Thai mango pudding made with whipping cream .</p>
                        <Button onClick={()=> setShow(true)}>
                            <i class="bi bi-bag-heart"></i> Order Now
                        </Button>
                    </div>
                </Col>
            </Row>

            <ToastContainer className="position-fixed bottom-0 end-0 p-3" position='bottom-end'>
              <Toast onClose={()=> setShow(false)} show={show} delay={3000} autohide>
                <Toast.Header closeButton={false}>
                    <img
                     src="holder.js/20x20?text=%20"
                     className="rounded me-2"
                     alt=""
                    />
                    <strong className="me-auto">Added!</strong>
                    <small>1 mins ago</small>
                </Toast.Header>
                <Toast.Body>Your order has been placed successfully. <i class="bi bi-emoji-smile"></i></Toast.Body>
               </Toast>
            </ToastContainer>
        </Container>
        </div>

        <hr></hr>
             
             <div>
             <Container>
             <Row className='align-items-center'>
                 <Col md={7}>
                     <Image src={require('../assets/Oreamousse.jpg')} fluid={true} alt='OreoMousse' rounded></Image>
                 </Col>
                 <Col md={5}>
                     <div className='p-3'>
                         <h2 className="display-6">Oreo Mousse</h2>
                         <p className="lead text-muted">Crushed Oreo cookies mixed with whipped cream and sometimes softened cream cheese or condensed milk for added richness and texture.</p>
                         <Button onClick={()=> setShow(true)}>
                             <i class="bi bi-bag-heart"></i> Order Now
                         </Button>
                     </div>
                 </Col>
             </Row>
 
             <ToastContainer className="position-fixed bottom-0 end-0 p-3" position='bottom-end'>
               <Toast onClose={()=> setShow(false)} show={show} delay={3000} autohide>
                 <Toast.Header closeButton={false}>
                     <img
                      src="holder.js/20x20?text=%20"
                      className="rounded me-2"
                      alt=""
                     />
                     <strong className="me-auto">Added!</strong>
                     <small>1 mins ago</small>
                 </Toast.Header>
                 <Toast.Body>Your order has been placed successfully. <i class="bi bi-emoji-smile"></i></Toast.Body>
                </Toast>
             </ToastContainer>
         </Container>
         </div>
        
    </section>
  )
}

export default WeeklySpecial