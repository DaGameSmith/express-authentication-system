import { Request, Response } from 'express';
const route = require('express').Router();

route.post('/signup', async (req: Request, res: Response) => {
    res.send("this is signup route");
});
route.post('/login', async (req: Request, res: Response) => {
    res.send("this is login route");
});
route.post('/logout', async (req: Request, res: Response) => {
    res.send("this is logout route");
});
  
module.exports = route;