import dbConnect from "../../../util/dbConnect";
import Cep from '../../../models/Cep'

dbConnect()

export default async (req, res) => {
    const {
        query: { id },
        method
    } = req;

    switch(method) {
        case 'GET':
            try {
                const cep = await Cep.findById(id);

                if (!cep) {
                    return res.status(400).json({ success: false })
                }

                res.status(200).json({ success: true, data: cep })
            } catch (error) {
                console.error('GET request: ' + error)
                res.status(400).json({ sucess: false })
            }
            break;
        case 'PUT':
            try {
                const cep = await Cep.findByIdAndUpdate(id, req.body, {
                    new: true,
                    runValidators: true
                });

                if (!cep) {
                    return res.status(400).json({ success: false })
                }

            } catch (error) {
                console.error('PUT request' + error)
                res.status(400).json({ sucess: false })
            }
            break;
        case 'DELETE':
            try {
                const deletedCep = await Cep.deleteOne({ _id: id })

                if (!deletedNote) {
                    return res.status(400).json({ success: false })
                }
            } catch (error) {
                console.error('DELETE request: ' + error)
                res.status(400).json({ sucess: false })
            }
            break;
        default:
            res.status(400).json({ success: false })
            break;
    }
}