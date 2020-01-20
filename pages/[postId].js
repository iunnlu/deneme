import React from "react";
import Layout from '../components/Layout';
import Post from '../components/Post';
import WriteComment from '../components/WriteComment';

const BlogPost = ({ post }) => (
  <Layout>
      <Post post={post}/>
      <WriteComment />
  </Layout>
);

BlogPost.getInitialProps = async ({ req, query }) => {
  // TODO: aşağıdaki satırda bulunan adresi kendi sunucu adresinle değiştirmelisin
  const res = await fetch(`http://localhost:3000/api/post/${query.postId}`);
  const json = await res.json();
  return { post: json.post };
};

export default BlogPost;
