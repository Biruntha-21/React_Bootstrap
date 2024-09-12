import React from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

const Contactus = () => {
  return (
    <section id="contact" className='bg-light py-3'>
        <div className="text-center my-2 py-5">
        <h2 className='display-6'><span><i class="bi bi-envelope-at-fill"></i> Contact Us </span></h2>
        <hr></hr>
        </div>
        <Container>
            <Row className='justify-content-center'>
                <Col md={6}>
                    <Form>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1"><i class="bi bi-envelope-open"></i></InputGroup.Text>
                        <FloatingLabel
                             controlId="floatingInput"
                             label="Email address"
                        >
                         <Form.Control type="email" placeholder="name@example.com" />
                         </FloatingLabel>
                    </InputGroup>

                    <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1"><i class="bi bi-person-circle"></i></InputGroup.Text>
                        <FloatingLabel
                             controlId="floatingInput"
                             label="Name"
                        >
                         <Form.Control type="text" placeholder="Name" />
                         </FloatingLabel>
                    </InputGroup>

                    <FloatingLabel
                        controlId="floatingTextarea"
                        label="Comments"
                        className="mb-3"
                     >
                    <Form.Control as="textarea" placeholder="Leave a comment here" />
                    </FloatingLabel>
                    </Form>
                </Col>
            </Row>
        </Container>

    </section>

  )
}

export default Contactus