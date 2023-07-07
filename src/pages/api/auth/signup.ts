import type { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "@src/lib/mongodb/dbConnect";
import User from "@src/models/user";
import { Validator } from "@src/utils/validator/credentialValidator";


export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    await dbConnect();

    if (req.method === 'POST') {
        const { username, email, password } = req.body;

        const validator = new Validator({ username, email, password });

        if (!validator.CredentialisValid()) {
            res.status(422).json({ message: validator.errorMessage(), ok: false });
        }

        try {
            const ifExist = await User.findOne({ email });
            if (ifExist) {
                res.status(422).json({ message: 'User already exists', ok: false });
            } else {
                const data = await User.create({ username, email, password });
                if (data) {
                    res.status(201).json({ message: 'User created', ...data, ok: true });
                }
            }
        } catch (err) {
            console.error(err);
            res.status(500).send({ message: err });
        }
    }
}


