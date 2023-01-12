import { Request, Response } from 'express';
const route = require('express').Router();

/* Logout user */
// route.post('/logout', auth, async (req, res) => {
//     const { user } = req;
//     try {
//         user.tokens = user.tokens.filter(token => {
//         return token.token !== req.token;
//         });
//         await user.save();
//         res.send({ message: 'You have successfully logged out!' });
//     } catch (e) {
//         res.status(400).send(e);
//     }
// });

route.post('/user', async (req: Request, res: Response) => {
    res.send("this is create user route");
});
route.get('/users', async (req: Request, res: Response) => {
    res.send("this is get all users route");
});
route.get('/user/:id', async (req: Request, res: Response) => {
    res.send("this is get one user route");
});
  
  
module.exports = route;