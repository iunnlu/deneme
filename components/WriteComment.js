import React, {useState} from 'react';
import '../styles/writeComment.css';

class WriteComment extends React.Component {
    state = {name:"", surname:""}
    postIslemi(){
        var obj = {
            table: []
         };
         obj.table.push({id: 1, square:2});
         var json = JSON.stringify(obj);
    }
    changeNameHandler = (event) => {
        this.setState({name: event.target.value})
    }
    changeSurnameHandler = (event) => {
        this.setState({surname: event.target.value})
    }
    commentRender = () => {
        if(this.state.name != "" && this.state.surname)
            return(
                <div className="col" style={{textAlign:"center"}}>
                    <p style={{fontSize:"20px", margin:"0px", marginBottom:"5px", textAlign:"left"}}>Your Comment</p>
                    <textarea className="custom-textarea" placeholder="Write your comment..." />
                    <div style={{textAlign:"right", marginTop:"5px", marginBottom:"5px"}}>
                        <button className="btn btn-dark" >Submit</button>
                    </div>
                </div>
            )
    }
    render(){
        return(
            <form method="POST" onSubmit={this.props.postIslemi}>
            <div className="custom-comment-card card" style={{marginTop:"20px"}}>
                <div class="card-body">
                    <h2 class="card-title" style={{marginTop:"10px", marginLeft:"10px"}}>Write a comment!</h2>
                    <div className="container" style={{width:"95%"}}>
                    <div className="row" style={{marginBottom:"20px"}}>
                        <div className="col" style={{marginTop:"10px"}}>
                            <p style={{fontSize:"20px", margin:"0px", marginBottom:"5px"}}>Name</p>
                            <input className="custom-input" onChange={this.changeNameHandler} placeholder="Write your name..." />
                        </div>
                        <div className="col" style={{marginTop:"10px"}}>
                            <p style={{fontSize:"20px", margin:"0px", marginBottom:"5px"}}>Surname</p>
                            <input className="custom-input" onChange={this.changeSurnameHandler} placeholder="Write your name..." />
                        </div>
                    </div>
                    <div className="row"> 
                        {this.commentRender()}
                    </div>
                    </div>
                </div>
            </div>
            </form>
        )
    }
}


export default WriteComment;