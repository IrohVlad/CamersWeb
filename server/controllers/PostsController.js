class PostsController {
    async getPosts(req, res){
        res.json('posts');
    }
    async postPost(req, res){
        res.json('img');
    }
    async changePost(req, res){

    }
    async deletePost(req, res){

    }
}
export default new PostsController;