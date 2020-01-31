import {postsRef} from '../../../components/database';

export default async (req, res) => {
    if(req.method === "POST"){
        await postsRef.orderByChild("slug").equalTo(req.body.slug).on("child_added", function (snapshot) {
            snapshot.ref.remove();
        });
    }
};