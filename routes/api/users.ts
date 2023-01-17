import { Request, Response } from 'express';
import passport from 'passport';
import { getAllUsers, getUserById } from '../../controllers/user';
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

route.get('/users', passport.authenticate('jwt', {session: false}), getAllUsers);
route.get('/user/:id', passport.authenticate('jwt', {session: false}), getUserById);
  
  
module.exports = route;