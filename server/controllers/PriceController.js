import { PriceList } from '../models/model.js'
class PriceController {
    async getPrices(req, res) {
        res.json('posts');
    }
    async postPrice(req, res) {
        const Card = await PriceList.create({ title: "def", disc: "def", price: "def" });
        res.send(Card);
    }
    async deletePrice(req, res) {
        const { id } = req.body;
        const Card = await PriceList.destroy({ where: { id: id } });
    }
}
export default new PriceController;