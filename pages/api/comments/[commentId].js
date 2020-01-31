import { commentsRef } from '../../../components/database';

export default async (req, res) => {
  let array = [];
  commentsRef.orderByChild("postSlug").equalTo(req.query.commentId).on("value", async (snapshot) => {
    await snapshot.forEach((childSnapshot) => {
      array.push(childSnapshot.val())
    })
    return res.json({comments: array})
  });
}