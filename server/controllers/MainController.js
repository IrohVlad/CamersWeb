import {MainContent} from '../models/model.js'
class MainController {
    async getContent(req, res){
        const Content = await MainContent.findAll();
        res.json(Content);
    }
    async changeContent(req, res){
        const {img, logo, title, disc, whyUsText} = req.body;
        // const Content = await MainContent.findAll();
        MainContent.update({img: img, logo: logo, title: title, disc: disc, whyUsText: whyUsText}, {where:{id:1}});
        res.json(req.body);
        // Content.img = img;
        // Content.logo = logo;
        // Content.title = title;
        // Content.disc = disc;
        // Content.whyUsText = whyUsText;
    }
    // async addContent(req, res){
    //     const {img, logo, title, disc, whyUsText} = req.body;
    //     const Content = await MainContent.create({img, logo, title, disc, whyUsText});
    //     res.json(Content);
    // }

}
export default new MainController;