import type { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "@src/lib/mongodb/dbConnect";
import Meal from "@src/models/meal";


export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    await dbConnect();

    if (req.method === 'POST') {
        const { name, price, description, category, mediaUrl, discountPrice } = req.body;

        // const validator = new Validator({ username, email, password });

        if (!name || !price || !description || !category || !mediaUrl ) {
            res.status(422).json({ message: "Invalid data", ok: false });
        }

        try {
            // const ifExist = await User.findOne({ email });
            // if (ifExist) {
            //     res.status(422).json({ message: 'User already exists', ok: false });
            // } else {
            const data = await Meal.create({ name, price, description, category, mediaUrl, discountPrice });
            if (data) {
                res.status(201).json({ message: 'New meal added successfully!', ...data, ok: true });
            }
            // }
        } catch (err) {
            console.error(err);
            res.status(500).send({ message: "Failed to add meal!" });
        }
    }
}


