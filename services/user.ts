
const db = require("../models");

export const createUser = async(username: string, email: string, password: string) => {
    const user = await db.User.create({username, email, password});
    return user;
}

export const findUserById = async(id: number) => {
    const user = await db.User.findByPk(id);
    return user;
}

export const findUserByEmail = async(email: string) => {
    const user = await db.User.findOne({ where: { email } });
    return user;
}

export const findAllUsers = async() => {
    const users = await db.User.findAll();
    return users;
}