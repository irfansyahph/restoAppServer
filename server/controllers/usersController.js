const findAll = async (req, res) => {
    try {
        const users = await req.context.models.users.findAll()

        // return res.send(products)
        if (users) {
            res.status(200).json({ ResponseCode: "00", ResponseDesc: users });
        } else {
            res.status(404).json({ ResponseCode: "01", ResponseDesc: users });
        }
    } catch (error) {
        return res.status(404).send(error)
    }
}

const findOne = async (req, res) => {
    try {
        const users = await req.context.models.users.findOne({
            where: { id: req.params.id }
        })

        // return res.send(products)
        if (users) {
            res.status(200).json({ ResponseCode: "00", ResponseDesc: users });
        } else {
            res.status(404).json({ ResponseCode: "01", ResponseDesc: users });
        }
    } catch (error) {
        return res.status(404).send(error)
    }
}

export default {
    findAll,
    findOne
}