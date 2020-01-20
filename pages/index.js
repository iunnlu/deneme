import React from "react";
import fetch from "isomorphic-unfetch";
import Layout from '../components/Layout';
import Posts from '../components/Posts';

class Home extends React.Component{
  render(){
    return(
      <Layout>
        <Posts posts={this.props.posts}/>
      </Layout>
    )
  }
}

Home.getInitialProps = async ({ req }) => {
  // TODO: aşağıdaki satırda bulunan adresi kendi sunucu adresinle değiştirmelisin
  const res = await fetch("http://localhost:3000/api/posts");
  const json = await res.json();
  return { posts: json.posts };
};


export default Home;