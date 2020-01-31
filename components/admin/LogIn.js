import React from 'react'
import router from 'next/router';
import { auth, firebase } from '../database'
import { Card, Container, Row, Col } from 'react-bootstrap';
import '../../styles/adminLoginStyle.scss';

class LogIn extends React.Component {
    state = { email: null, password: null, error: null }
    changeName = (event) => {
        this.setState({ email: event.target.value })
    }
    changePassword = (event) => {
        this.setState({ password: event.target.value })
    }
    submitForm = () => {
        const { email, password } = this.state;
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then((user) => {
                router.push('/admin/home');
              })
              .catch((error) => {
                this.setState({error: error.message})
              });
    }
    render() {
        return (
            <Card className="admin-login">
                <Card.Header>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <h4><b>Admin Menu</b></h4>
                    </div>
                </Card.Header>
                <Card.Body style={{padding:"20px 60px"}}>
                    <Row style={{marginBottom: "10px"}}>
                        <Col style={{padding:"0px"}} className="col-3">
                            <h5>Username</h5>
                        </Col>
                        <Col className="col-9">
                            <input style={{width:"100%"}} name="email" type="text" placeholder="Enter a email" onChange={this.changeName}></input>
                        </Col>
                    </Row>
                    <Row style={{marginBottom: "10px"}}>
                        <Col style={{padding:"0px"}}  className="col-3">
                            <h5>Password</h5>
                        </Col>
                        <Col className="col-9">
                            <input style={{width:"100%"}} name="password" type="password" placeholder="Enter a password" onChange={this.changePassword}></input>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h6 style={{color:"red", marginBottom:"10px"}}>{this.state.error}</h6>
                        </Col>
                    </Row>
                    <Row>
                        <Col style={{textAlign:"right"}}>
                            <button className="btn btn-info" onClick={this.submitForm}>Submit</button>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        )
    }
}
export default LogIn;