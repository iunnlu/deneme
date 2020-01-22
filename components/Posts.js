import React from 'react';
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import "../styles/postsStyle.css";

class Posts extends React.Component {
  renderPosts() {
    return this.props.posts.map(post => {
      return (
        <Link href={post.slug}>
          <div className="card custom-posts" style={{ border: "1px solid #B3B6B7", cursor: "pointer" }}>
            <img className="card-img-top" style={{ maxHeight: "300px" }} src={post.image} />
            <div className="card-body">
              <h5 className="card-title" style={{ marginTop: "15px" }}>
                <a className="blog-title-link" style={{ textDecoration: "none", color: "black", fontSize: "30px" }}><b>{post.title}</b></a>
              </h5>
              <p className="card-text" style={{ maxHeight: "300px", overflow: "hidden" }}><ReactMarkdown source={post.details} /></p>
              <p style={{ color: "gray", textAlign: "right" }}><b>Read More...</b></p>
            </div>
            <div class="card-footer text-muted d-flex justify-content-between bg-transparent border-top-0">
              <div class="views"><i class="fa fa-calendar"></i>&nbsp;&nbsp;{post.date}
              </div>
              <div class="stats">
                <i class="fa fa-comment"></i> 12
                    </div>
            </div>
          </div>
        </Link>
      )
    })
  }
  render() {
    return (
      <div className="card-columns">
        {this.renderPosts()}
      </div>
    )
  }
}

export default Posts;