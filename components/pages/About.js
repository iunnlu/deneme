import React from 'react';
import { Row, Image, Col, Container, Button } from 'react-bootstrap';
import aboutimage from '../../src/about.jpg';

class About extends React.Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col className="col-7 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                        <h1 className="about-header"><b><span className="about-header-1" id="about-id">ABOUT ME</span></b></h1>
                        <p className="about-text"><b>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                                incididunt ut labore et dolore magn est laborum.</b></p>
                        <div style={{ textAlign: "right" }}><Button size="lg" variant="dark">More</Button></div>
                    </Col>
                    <Col className="col-5 col-sm-6 col-md-6 col-lg-6 col-xl-6 about-image-col">
                        <Image className="about-image" src={aboutimage} roundedCircle />
                    </Col>
                </Row>
            </Container >
        )
    }
}

export default About;