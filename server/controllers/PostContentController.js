import { PostContent } from '../models/model.js';
class PostContentController {
    async getPostContent(req, res) {
        const PostId = req.query;
        const Content = await PostContent.findAll({ where: { postId: PostId } });
        res.send(Content);
    }
    async postPostContent(req, res) {
        const PostId = req.query;

        const Content = await PostContent.findAll();
        await PostContent.create({ id: Content.length, })

    }
}