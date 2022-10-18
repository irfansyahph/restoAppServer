const findAll = async (req, res) => {
    try {
        const products = await req.context.models.products.findAll()

        return res.send(products)
    } catch (error) {
        return res.status(404).send(error)
    }
}

const getFood = async (req, res) => {
    try {
        const food = await req.context.models.products.findAll({
            where: { type: req.params.type }
        })

        return res.send(food)
    } catch (error) {
        return res.status(404).send(error)
    }
}

export default {
    findAll,
    getFood
}