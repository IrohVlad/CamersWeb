import { WhyUsCards } from '../models/model.js'

class WhyUsController {
    async getWhyUs(req, res) {
        const Cards = await WhyUsCards.findAll({attributes: ['icon','title','text']});
        res.json(Cards);
    }
    async postWhyUs(req, res) {
        const Card = await WhyUsCards.create({ icon: "def", title: "def", text: "def" });
        const Cards = await WhyUsCards.findAll({attributes: ['icon','title','text']});
        res.json(Cards);
    }
    async changeWhyUs(req, res) {
        const { id, icon, title, text } = req.body;
        const Card = await WhyUsCards.update({ icon, title, text }, { where: { id: id } });
        const Cards = await WhyUsCards.findAll({attributes: ['icon','title','text']});
        res.json(Cards);
    }
    async deleteWhyUs(req, res) {
        const { id } = req.body;
        const Card = await WhyUsCards.destroy({ where: { id: id } });
        const Cards = await WhyUsCards.findAll({attributes: ['icon','title','text']});
        res.json(Cards);
    }
}
export default new WhyUsController;