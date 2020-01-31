import React from 'react';
import Link from 'next/link';
import { auth, firebase } from '../../components/database';
import { Button, Container, Row, Col } from 'react-bootstrap';

class createuser extends React.Component {
    state = { email: "", password: null }
    changeName = (event) => {
        this.setState({ email: event.target.value })
    }
    changePassword = (event) => {
        this.setState({ password: event.target.value })
    }
    submitForm = (event) => {
        event.preventDefault();
        console.log(this.state)
        const { email, password } = this.state;
        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then((user) => {
                this.props.history.push('/');
            })
            .catch((error) => {
                console.log(error)
            });
    }
    render() {
        return (
            <Container>
                <form method="POST" onSubmit={this.submitForm}>
                    <Row>
                        <Col>
                            <label>Enter your name </label>
                            <input name="email" type="text" placeholder="Enter a email" onChange={this.changeName}></input>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <label>Enter your password </label>
                            <input name="password" type="password" placeholder="Enter a password" onChange={this.changePassword}></input>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <button>Submit</button>
                        </Col>
                    </Row>
                </form>
            </Container>
        )
    }
}

export default createuser;