import { Request, Response } from 'express';
import passport from 'passport';
import { login, signup } from '../../controllers/auth';
const route = require('express').Router();

route.post('/signup', signup);
route.post('/login', login);
//route.post('/logout', passport.authenticate('jwt', {session: false}), );
  
module.exports = route;