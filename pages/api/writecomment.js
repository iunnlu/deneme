import { getPosts } from "../../src/blog-posts";
import { getComments } from "../../src/comments";

const posts = getPosts();
const fetchComments = getComments();

const deneme = async (req, res) =>{
    if(req.method === 'POST'){
        const fs = require('fs');
        const source = 'src/comments/comments.json';
        let newItem = {};
        let id=0;
        if(fetchComments === []){
            id=0;
        }else{
            await fetchComments.map(item => {
                id = item.commentId;
            })
        }
        await posts.map(item => {
            if(req.body.postId === item.id){
                newItem.commentId = id+1;
                newItem.postId = item.id;
                newItem.name = req.body.name;
                newItem.surname = req.body.surname;
                newItem.comment = req.body.comment;
                fetchComments.push(newItem);
            }
        })

        let data = JSON.stringify(fetchComments, null, 2);
        fs.writeFile(source, data, (err) => {
            if (err) throw res.send(404);
            res.send(200);
        });
    }
}

export default deneme;