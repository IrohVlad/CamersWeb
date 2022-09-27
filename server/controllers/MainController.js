import { MainContent } from '../models/model.js'
class MainController {
    async getContent(req, res) {
        const Content = await MainContent.findAll({attributes: ['id','img','logo','title', 'disc', 'whyUsText']});
        res.json(Content);
    }
    async changeContent(req, res) {
        const {img, logo, title, disc, whyUsText } = req.body;
        let image;
        if (req.file){
            image = req.file.originalname;
        }
        else{
            image = img;
        }
            MainContent.update({ img: image, logo: logo, title: title, disc: disc, whyUsText: whyUsText }, { where: { id: 1 } });
            const Content = await MainContent.findAll({attributes: ['id','img','logo','title', 'disc', 'whyUsText']});
            console.log({ image, logo, title, disc, whyUsText });
            res.json(Content);
        }
        // async addContent(req, res){
        //     const {img, logo, title, disc, whyUsText} = req.body;
        //     const Content = await MainContent.create({img, logo, title, disc, whyUsText});
        //     res.json(Content);
        // }

}
export default new MainController;