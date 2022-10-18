import { sequelize } from "../models/init-models"

const addDetailOrder = async (req, res) => {
    try {
        const detailOrder = await req.context.models.detail_order.create({
            table_number: req.body.table_number,
            product_id: req.body.product_id,
            qty: req.body.qty,
            date: Date.now()
        })
        return res.send(detailOrder)
    } catch (error) {
        return res.status(404).send(error)
    }
}

const getDetailOrder = async (req, res) => {
    try {
        await sequelize.query(`select detail_order.*, products.name, SUM(products.price*detail_order.qty) AS total_price from detail_order
        join products on products.id = detail_order.product_id
        where table_number = ${req.params.id}
        group by products.name, detail_order.id;`,
            { type: sequelize.QueryTypes.SELECT })
            .then(result => {
                return res.send(result)
            })
    } catch (error) {
        return res.status(404).send(error)
    }
}

export default {
    addDetailOrder,
    getDetailOrder
}