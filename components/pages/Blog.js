import React from 'react';
import LastPosts from '../assets/LastPosts';
import PopularTags from '../assets/PopularTags';
import Posts from '../assets/Posts';
import { Row, Col, Container, Spinner } from 'react-bootstrap';
import '../../styles/blogStyle.scss';

class Blog extends React.Component {
    state = { posts: [], tags: [], selectedTag: "" };
    removeDuplicates(array) {
        return array.filter((a, b) => array.indexOf(a) === b)
    };
    async componentDidMount() {
        let array = [];
        await this.props.posts.map((post) => {
            var tags = post.tags.split(" ");
            tags.map((item) => {
                array.push(item);
            })
        })
        this.setState({ tags: this.removeDuplicates(array), posts: this.props.posts });
    }
    tagsChange = async (event) => {
        if (event.target.value === undefined) {

        } else {
            let array = [];
            let val = event.target.value;
            this.props.posts.map(post => {
                var tags = post.tags.split(" ");
                tags.map((item) => {
                    if (item === val) {
                        array.push(post)
                    }
                })
            })
            console.log(array)
            this.setState({ selectedTag: event.target.value, posts: this.removeDuplicates(array) });
        }
    }
    filterPosts = () => {
        this.setState({ selectedTag: "", posts: this.props.posts });
    }
    render() {
        return (
            <div className="blog-container" style={{paddingBottom:"50px"}}>
                <Container>
                    <p className="blog-header"><span className="blog-header-1"><b>MY BLOG</b></span></p>
                    <Row style={{ marginTop: "40px" }}>
                        <Col className="col-12 col-sm-12 col-md-6 col-lg-8 col-xl-8">
                            <Posts posts={this.state.posts} comments={this.props.comments} />
                        </Col>
                        <Col className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
                            <LastPosts posts={this.props.posts} />
                            <PopularTags tags={this.state.tags} filterPosts={this.filterPosts} tagsChange={this.tagsChange} selectedTag={this.state.selectedTag} />
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Blog;