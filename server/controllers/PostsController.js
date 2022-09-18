import { Posts } from '../models/model.js';
class PostsController {
    async getPosts(req, res) {
        const posts = await Posts.findAll({attributes: ['id','title','img','text','updatedAt']});
        res.send(posts);
    }
    async postPost(req, res) {
        const post = await Posts.create({ title: "def", img: "def", text: "def" });
        const posts = await Posts.findAll({attributes: ['id','title','img','text', 'updatedAt']});
        res.send(posts);
    }
    async changePost(req, res) {
        const { id, title, img, text } = req.body;
        const post = await Posts.update({ title: title, img: img, text: text }, { where: { id: id } });
        const posts = await Posts.findAll({attributes: ['id','title','img','text', 'updatedAt']});
        res.send(posts);

    }
    async deletePost(req, res) {
        const { id } = req.body;
        const Card = await Posts.destroy({ where: { id: id } });
        const posts = await Posts.findAll({attributes: ['id','title','img','text', 'updatedAt']});
        res.send(posts);
    }
}
export default new PostsController;