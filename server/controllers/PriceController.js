import { PriceList } from '../models/model.js'
class PriceController {
    async getPrices(req, res) {
        const Prices = await PriceList.findAll({attributes: ['id','title','disc','price']});
        res.json(Prices);
    }
    async postPrice(req, res) {
        const Card = await PriceList.create({ title: "def", disc: "def", price: "def" });
        const Prices = await PriceList.findAll({attributes: ['id','title','disc','price']});
        res.json(Prices);
    }
    async deletePrice(req, res) {
        const { id } = req.body;
        const Card = await PriceList.destroy({ where: { id: id } });
        const Prices = await PriceList.findAll({attributes: ['id','title','disc','price']});
        res.json(Prices);
    }
}
export default new PriceController;