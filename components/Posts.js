import React from 'react';
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import "./stil.css";
import "./style.css"

class Posts extends React.Component{
    renderPosts(){
        return this.props.posts.map(post => {
            return(
              <Link href={post.slug}>
                <div className="card lg p-3 bg-light" style={{border:"1px solid #B3B6B7", cursor:"pointer"}}>

                  <div className="container" style={{marginTop:"20px"}}>
                    <div className="row ">
                      <div className="col-2" style={{paddingRight:"30px", paddingBottom:"10px"}}>
                        <img className="rounded-circle" src="https://images.wallpaperscraft.com/image/man_mountains_clouds_travel_118031_3840x2400.jpg" width="40" height="40"/>
                      </div>
                      <div className="col-10" style={{paddingLeft:"10px"}}>
                        <p>
                        İlhan Ünlü
                        <br />
                        <small className="text-muted">Last updated 3 mins ago</small>
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="card-body">
                    <img src="https://images.wallpaperscraft.com/image/man_mountains_clouds_travel_118031_3840x2400.jpg" className="card-img-top" alt="..." />
                    <h5 className="card-title" style={{marginTop:"15px"}}>
                        <a className="blog-title-link" style={{textDecoration:"none", color:"black"}}><b>{post.title}</b></a>
                    </h5>
                    <p className="card-text" style={{maxHeight:"300px", overflow:"hidden"}}><ReactMarkdown source={post.details}/></p>
                    <p style={{ color:"gray", textAlign:"right" }}><b>Read More...</b></p>
                  </div>
                  
                </div>
              </Link>
            )
          })
      }
      render(){

          return(
            <div className="card-columns">
                {this.renderPosts()}
            </div>
          )
      }
}

export default Posts;