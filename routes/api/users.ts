import { Request, Response } from 'express';
import passport from 'passport';
import { getAllUsers, getUserById } from '../../controllers/user';
const route = require('express').Router();


route.get('/users', passport.authenticate('jwt', {session: false}), getAllUsers);
route.get('/user/:id', passport.authenticate('jwt', {session: false}), getUserById);
  
  
module.exports = route;