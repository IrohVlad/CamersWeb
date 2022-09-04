import {MainContent} from '../models/model.js'
class MainController {
    async getContent(req, res){
        const Content = MainContent.findAll();
        res.json(Content);
    }
    async changeContent(req, res){

    }
    async addContent(req, res){
        const {img, logo, title, disc, whyUsText} = req.body;
        const Content = await MainContent.create({img, logo, title, disc, whyUsText});
        res.json(Content);
    }

}
export default new MainController;