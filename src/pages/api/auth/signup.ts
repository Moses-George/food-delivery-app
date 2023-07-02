import type { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "@src/lib/mongodb/dbConnect";
import User from "@src/models/user";


// const createUser = async (user: IUser) => {
//     const finduser = await User.findOne({
//         email: user.email
//     });
//     if (finduser) throw new Error("User Found, Change Email");
//     const newUser = await User.create(user);
//     return newUser;
// }

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    await dbConnect();

    if (req.method === 'POST') {
        const { username, email, password } = req.body;

        try {
            const ifExist = await User.findOne({ email });
            if (ifExist) {
                res.status(422).json({ message: 'User already exists', ok: false });
            } else {
                const data = await User.create(req.body);
                if (data) {
                    res.status(201).json({ message: 'User created', ...data , ok: true});
                }
            }
        } catch (err) {
            console.error(err);
            res.status(500).send({ message: err });
        }
    }
}


