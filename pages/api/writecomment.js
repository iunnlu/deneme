import { commentsRef } from '../../components/database';

const writecomment = (req, res) => {
    if (req.method === 'POST') {
        const currentDate = new Date().getTime();
        let object = {
            postSlug: req.body.postSlug,
            name: req.body.name,
            surname: req.body.surname,
            comment: req.body.comment,
            date: currentDate
        }
        commentsRef.push().set(object)
        res.send(200);
        res.end("Post write completed\n");
    }
}

export default writecomment;
