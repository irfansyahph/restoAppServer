const findAll = async (req, res) => {
    try {
        const users = await req.context.models.users.findAll()
        return res.send(users)
    } catch (error) {
        return res.status(404).send(error)
    }
}

const findOne = async (req, res) => {
    try {
        const users = await req.context.models.users.findAll({
            where: {
                table_number: req.params.id
            }
        })
        return res.send(users)
    } catch (error) {
        return res.status(404).send(error)
    }
}

export default {
    findAll,
    findOne
}