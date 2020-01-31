import { postsRef } from '../../components/database';

const writepost = async (req, res) => {
    if (req.method === 'POST') {
        let object = {
            title: req.body.title,
            slug: req.body.slug,
            details: req.body.details,
            date: req.body.date,
            image: req.body.image,
            tags: req.body.tags,
            like: 0
        }
        postsRef.push().set(object)
        res.send(200);
        res.end("Post write completed\n");
    }
}

export default writepost;
