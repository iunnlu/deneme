import React from "react";
import Layout from '../components/Layout';
import PostPage from '../components/pages/PostPage';
import fetch from 'isomorphic-unfetch';

const BlogPost = ({post, comments, posts}) => (
  <Layout>
    <PostPage post={post} comments={comments} posts={posts}/>
  </Layout>
);
BlogPost.getInitialProps = async ({ req, query }) => {
  // TODO: aşağıdaki satırda bulunan adresi kendi sunucu adresinle değiştirmelisin
  const resPost = await fetch(`http://localhost:3000/api/post/${query.postId}`);
  const jsonPost = await resPost.json();
  const resComments = await fetch(`http://localhost:3000/api/comments/${query.postId}`);
  const jsonComments = await resComments.json();
  const resPosts = await fetch(`http://localhost:3000/api/posts`);
  const jsonPosts = await resPosts.json();
  return { post: jsonPost.post, comments: jsonComments.comments, posts: jsonPosts.posts };
};
export default BlogPost;