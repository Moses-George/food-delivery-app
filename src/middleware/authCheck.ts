import { NextApiRequest, NextApiResponse } from "next"; 
import { User } from "next-auth";
import { getToken } from "next-auth/jwt";

const secret = process.env.NEXTAUTH_SECRET;

interface IUser extends User {
    userId: string;
    name: string;
    email: string;
    role: string;
}

// CHECKING FUNCTIONS
export const hasToken = async (req: NextApiRequest) => {
    const token = await getToken({ req, secret })
    if (!token) {
        return false;
    }
    return true;
}

export const isAdmin = async (req: NextApiRequest) => {
    const token = await getToken({ req, secret });
    const user = token?.user as IUser
    if (!token || user.role !== 'admin') {
        return false;
    }
    return true;
}

// API MIDDLEWARE
export const hasTokenMiddleware = async (req: NextApiRequest, res: NextApiResponse, next: any) => {
    const token = await getToken({ req, secret })
    if(!token){
      return next(new Error('Not Allowed - Not logged in'));
    }
    next()
  }
  export const isAdminMiddleware = async (req: NextApiRequest, res: NextApiResponse, next: any) => {
    const token = await getToken({ req, secret });
    const user = token?.user as IUser
    if(!token || user.role !== 'admin'){
      return next(new Error('Not Allowed - Not admin'));
    }
    next()
  }