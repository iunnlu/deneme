import React from 'react';
import axios from 'axios';
import { Card, ListGroup, Col, Image, Row } from 'react-bootstrap';
import '../styles/commentsStyle.scss';

class Comments extends React.Component {
    state = { comments: [] }
    componentDidMount() {
        axios.get(`http://localhost:3000/api/comments/${this.props.post.id}`)
            .then(
                (result) => {
                    this.setState({
                        comments: result.data.comments
                    });
                })
    }
    renderComments = () => {
        return this.state.comments.map((item,index) => {
            return (
                <ListGroup variant="flush" className="comments-list">
                    <ListGroup.Item style={index === 0 ? {borderTop:"1px solid #bababa"} : {}}>
                        <Row className="comments-row">
                            <Col className="col-3 col-sm-2 col-md-3 col-lg-2 col-xl-2 comments-image-col">
                                <Image className="comments-image" src="https://moonvillageassociation.org/wp-content/uploads/2018/06/default-profile-picture1.jpg" roundedCircle />
                            </Col>
                            <Col className="col-9 col-sm-10 col-md-9 col-lg-10 col-xl-10 comments-content-col">
                                <span className="comment-content-header">
                                    {item.name}&nbsp;{item.surname}
                                </span>
                                <br />
                                <p className="comment-content-text">
                                    {item.comment}
                                </p>
                            </Col>
                        </Row>
                    </ListGroup.Item>
                </ListGroup>
            )
        })
    }
    render() {
        if (this.state.comments.length === 0) return <div></div>
        return (
            <React.Fragment>
                <h2 style={{margin:"20px 0px 20px 28px"}}>Comments</h2>
                {this.renderComments()}
            </React.Fragment>
        )
    }
}

export default Comments;