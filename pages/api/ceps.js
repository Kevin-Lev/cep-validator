import { connectToDatabase } from "../../util/mongodb";

export default async (req, res) => {
    const { db } = await connectToDatabase();
    
    const ceps = await db.collection("ceps").find({}).toArray()

    console.log(ceps)

    res.json(ceps);
}


