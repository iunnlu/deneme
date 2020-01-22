import { getComments } from "../../../src/comments";

const getcomments = getComments();

export default (req, res) => {
  console.log(getcomments)
  res.json({
    comments: getcomments.filter(comment => comment.postId === parseInt(req.query.commentId))
  });
};