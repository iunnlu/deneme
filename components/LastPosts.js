import React from 'react';

class LastPosts extends React.Component{
    render(){
        return(
            <div className="ui segments">
              <div className="ui segment blue">
                <h1 style={{textAlign:"center", color:"gray"}}>Lasted Post</h1>
                <div className="ui middle aligned divided list">
                      <div className="item">
                        <div className="ui grid" style={{marginBottom:"10px", marginTop:"10px"}}>
                          <div className="eight wide column">
                            <img className="ui centered small image" src="https://www.xda-developers.com/files/2019/09/OP7t-wallpaper.jpg"/>
                          </div>
                          <div className="eight wide column">
                            <h4 style={{marginBottom:"0px", color:"grey"}}>Sazan Balıkları</h4>
                            <p style={{fontWeight:"bold", fontSize:"15px", wordWrap:"break-word"}}>
                              Sazan balıkları çok yalnız.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="item">
                        <div className="ui grid" style={{marginBottom:"10px", marginTop:"10px"}}>
                          <div className="eight wide column">
                            <img className="ui centered small image" src="https://www.xda-developers.com/files/2019/09/OP7t-wallpaper.jpg"/>
                          </div>
                          <div className="eight wide column">
                            <h4 style={{marginBottom:"0px", color:"grey"}}>Sazan Balıkları</h4>
                            <p style={{fontWeight:"bold", fontSize:"15px", wordWrap:"break-word"}}>
                              Sazan balıkları çok yalnız.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="item">
                        <div className="ui grid" style={{marginBottom:"10px", marginTop:"10px"}}>
                          <div className="eight wide column">
                            <img className="ui centered small image" src="https://www.xda-developers.com/files/2019/09/OP7t-wallpaper.jpg"/>
                          </div>
                          <div className="eight wide column">
                            <h4 style={{marginBottom:"0px", color:"grey"}}>Sazan Balıkları</h4>
                            <p style={{fontWeight:"bold", fontSize:"15px", wordWrap:"break-word"}}>
                              Sazan balıkları çok yalnız.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="item">
                        <div className="ui grid" style={{marginBottom:"10px", marginTop:"10px"}}>
                          <div className="eight wide column">
                            <img className="ui centered small image" src="https://www.xda-developers.com/files/2019/09/OP7t-wallpaper.jpg"/>
                          </div>
                          <div className="eight wide column">
                            <h4 style={{marginBottom:"0px", color:"grey"}}>Sazan Balıkları</h4>
                            <p style={{fontWeight:"bold", fontSize:"15px", wordWrap:"break-word"}}>
                              Sazan balıkları çok yalnız.
                            </p>
                          </div>
                        </div>
                      </div>
                </div>
              </div>
            </div>
        )
    }
}

export default LastPosts;