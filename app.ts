import express, { Application, Request, Response } from 'express';

const cors = require('cors');

const app: Application = express();
const PORT: number = 3001;

// const corsOptions = {
//     origin: "http://localhost:8081"
// };  
// app.use(cors(corsOptions));

const db = require("./models");
db.sequelize.sync()
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err: any) => {
    console.log("Failed to sync db: " + err.message);
  });

// Body parsing Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.disable('x-powered-by');
//app.use(expressStatusMonitor());
// app.use((req, res, next) => {
//   res.locals.user = req.user;
//   next();
// });

// api routes
app.use(require('./routes'));


app.use('/', (req: Request, res: Response): void => {
    res.send('Express Authentication System');
});

app.listen(PORT, (): void => {
    console.log('SERVER IS UP ON PORT:', PORT);
});