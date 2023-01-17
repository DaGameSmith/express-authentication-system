import * as bcrypt from 'bcryptjs';
import { Request, Response } from 'express';
import { createUser, findUserByEmail } from '../services/user';
import * as jwt from 'jsonwebtoken';

export const signup = async(req: Request, res: Response) => {
    const { username, email, password } = req.body;
    const existingUser = await findUserByEmail(email);
    if(existingUser){
        return res.send({message: "user email already exist, please login or use a different email"});
    }
    const hashedPassword = bcrypt.hashSync(password, 8);
    const newUser = await createUser(username, email, hashedPassword);
    return res.json({message: "user signup successful, please sign in to continue"});
}

export const login = async(req: Request, res: Response) => {
    const { email, password } = req.body;
    const existingUser = await findUserByEmail(email);
    
    if(!bcrypt.compareSync(password, existingUser.password)){
        return res.send({message: "user login incorrect, please sign up"});
    }

    const token = jwt.sign({id: existingUser.id, email: existingUser.email}, 'your_jwt_secret');

    return res.json({message: "user login successful", token });
}