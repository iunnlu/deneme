import {commentsRef} from '../../../components/database';

export default async (req, res) => {
  const array = [];
  commentsRef.once("value", snapshot => {
    snapshot.forEach(childSnapshot => {
      array.push(childSnapshot.val())
    })
    res.json({ comments: array });
  })
};
  