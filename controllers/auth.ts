import { Request, Response } from 'express';
import { createUser, findUserByEmail } from '../services/user';

export const signup = async(req: Request, res: Response) => {
    const { username, email, password } = req.body;
    const existingUser = await findUserByEmail(email);
    if(existingUser){
        res.send({message: "user email already exist, please login or use a different email"});
    }
    const newUser = await createUser(username, email, password);
    res.send(JSON.stringify(newUser));
}

export const login = async(req: Request, res: Response) => {
    const { email, password } = req.body;
    const existingUser = await findUserByEmail(email);
    if(existingUser.password !== password ){
        res.send({message: "user login incorrect, please sign up"});
    }

    res.send(JSON.stringify(existingUser));
}