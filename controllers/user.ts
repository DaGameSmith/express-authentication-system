import * as bcrypt from 'bcryptjs';
import { Request, Response } from 'express';
import { findAllUsers, findUserById } from '../services/user';

export const getAllUsers = async(req: Request, res: Response) => {
    const allUsers = await findAllUsers();
    return res.json({allUsers});
}

export const getUserById = async(req: Request, res: Response) => {
    const user = await findUserById(parseInt(req.params['id'], 10));
    return res.json({user});
}