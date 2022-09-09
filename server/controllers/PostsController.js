import { Posts } from '../models/model.js';
class PostsController {
    async getPosts(req, res) {
        const posts = await Posts.findAll();
        res.send(posts);
    }
    async postPost(req, res) {
        const { title, img, text } = req.body;
        const post = await Posts.create({ title, img, text });
        res.send(post);
    }
    async changePost(req, res) {

    }
    async deletePost(req, res) {

    }
}
export default new PostsController;