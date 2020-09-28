import Cep from "../../../models/Cep";
import dbConnect from "../../../util/dbConnect";

dbConnect();

export default async (req, res) => {
    const { method } = req

    switch(method) {
        case 'GET':
            try {
                const ceps = await Cep.find({})
                res.status(200).json({ success: true, data: ceps })
            } catch (error) {
                console.error(error)
                res.status(400).json({ success: false })
            }
            break;
        case 'POST':
            try {
                const newCep = await Cep.create(req.body);

                res.status(201).json({ success: true, data: newCep })
            } catch (error) {
                console.error(error)
                res.status(400).json({ success: false })
            }
            break;
        default:
            res.status(400).json({ success: false })
            break;
    }
}