import React from "react";
import Layout from '../components/Layout';
import Post from '../components/Post';
import WriteComment from '../components/WriteComment';

const BlogPost = ({ post }) => (
  <Layout>
      <Post post={post}/>
      <WriteComment post={post}/>
  </Layout>
);

BlogPost.getInitialProps = async ({ req, query }) => {
  // TODO: aşağıdaki satırda bulunan adresi kendi sunucu adresinle değiştirmelisin
  const resPost = await fetch(`http://localhost:3000/api/post/${query.postId}`);
  const jsonPost = await resPost.json();
  return { post: jsonPost.post };
};

export default BlogPost;
