import React from 'react';
import LastPosts from '../assets/LastPosts';
import PopularTags from '../assets/PopularTags';
import { Row, Col, Container } from 'react-bootstrap';
import Post from '../assets/Post';
import WriteComment from '../assets/WriteComment';
import '../../styles/postPageStyle.scss';

const PostPage = (props) => {
    return (
        <Container style={{marginBottom:"30px"}}>
            <Row>
                <Col className="col-12 col-sm-12 col-md-6 col-lg-8 col-xl-8">
                    <Post post={props.post} />
                    <WriteComment post={props.post} comments={props.comments}/>
                </Col>
                <Col className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
                    <LastPosts posts={props.posts}/>
                </Col>
            </Row>
        </Container>
    )
}

export default PostPage;