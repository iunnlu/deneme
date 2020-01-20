import React from "react";
import Link from "next/link";
import ReactMarkdown from "react-markdown";

const Post = ({ post }) => (
    <div className="card custom-post">
        <img className="card-img-top" src={post.image} />
        <div class="card-body">
            <h1 class="card-title">{post.title}</h1>
            <p class="card-text">{post.details}</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
    </div>
);

export default Post;
