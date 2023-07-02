import { hasTokenMiddleware } from "@src/middleware/authCheck"
import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { getToken } from "next-auth/jwt";
import { getSession } from "next-auth/react";
import { createRouter } from "next-connect";

// const router = createRouter<NextApiRequest, NextApiResponse>();

// router.use(hasTokenMiddleware).get(protectedAPI);

// async function protectedAPI(req: NextApiRequest, res: NextApiResponse) {
//   res.status(200).send('Success!');
// }

// export default router.handler({
//     onError: (err, req, res) => {
//         console.error(err);
//         res.status(500).end(err);
//     },
//     onNoMatch: (req, res) => {
//         res.status(404).send("Page not found");
//     },
// })

// API MIDDLEWARE
export default  async (req: NextApiRequest, res: NextApiResponse) => {
    const session = await getSession({ req })
    if(session){
        res.send({ content: "This is a protected content. you can access this because you are signed" });
    } else {
        res.send({error: "You must be authenticated to view the protected content on this page"});
    }
  }