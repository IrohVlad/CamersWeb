import { WhyUsCards } from '../models/model.js'

class WhyUsController {
    async getWhyUs(req, res) {
        const Cards = await WhyUsCards.findAll();
        res.json(Cards);
    }
    async postWhyUs(req, res) {
        const { icon, title, text } = req.body;
        const Card = await WhyUsCards.create({ icon, title, text });
        res.send(Card);
    }
    async deleteWhyUs(req, res) {

    }
}
export default new WhyUsController;