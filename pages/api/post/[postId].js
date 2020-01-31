import {postsRef} from '../../../components/database';

export default async (req, res) => {
  await postsRef.orderByChild("slug").equalTo(req.query.postId).on("child_added", function (snapshot) {
    res.json({ post: snapshot.val() })
  });
};