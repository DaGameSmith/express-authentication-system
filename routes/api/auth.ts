import { login, signup } from '../../controllers/auth';
const route = require('express').Router();

route.post('/signup', signup);
route.post('/login', login);
  
module.exports = route;