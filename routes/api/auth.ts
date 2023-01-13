import { Request, Response } from 'express';
import { login, signup } from '../../controllers/auth';
const route = require('express').Router();

route.post('/signup', signup);
route.post('/login', login);
route.post('/logout', );
  
module.exports = route;