import { Posts } from '../models/model.js';
class PostsController {
    async getPosts(req, res) {
        let posts;
        if (req.query.id){
            const postId = req.query.id;
            posts = await Posts.findAll({where: { id: postId }});
        }
        else{
            posts = await Posts.findAll({attributes: ['id','title', 'text', 'img','updatedAt']});
        }
        res.send(posts);
    }
    async getPrePosts(req, res) {
        let posts;
        if (req.query.limit){
            posts = await Posts.findAll({limit: req.query.limit, attributes: ['id','title','img','updatedAt']});
        }
        else{
            posts = await Posts.findAll({attributes: ['id','title','img','updatedAt']});
        }
        res.send(posts);
    }
    async postPost(req, res) {
        const post = await Posts.create({ title: "def", img: 'digital-art-artwork-fantasy-art-planet-sun-hd-wallpaper-d866fd38b0b06cd800cc016ed8d284fa.jpg', text: "def" });
        const posts = await Posts.findAll({attributes: ['id','title','img','text', 'updatedAt']});
        res.send(posts);
    }
    async changePost(req, res) {
        const { img, id, title, text } = req.body;
        let image;
        if (req.file){
            image = req.file.originalname;
        }
        else{
            image = img;
        }
        const post = await Posts.update({ title: title, img: image, text: text }, { where: { id: id } });
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