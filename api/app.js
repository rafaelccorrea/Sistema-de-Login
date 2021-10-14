import express from 'express';
import config from "dotenv";
import cors from "cors";

import {
  UserRoutes
} from './server/routes'

import { TokenMiddleware } from "./server/middlewares";

const port = process.env.PORT || 8000;
const app = express();
config.config();

//Config
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cors());


//Rotas
app.get("*", (req, res) =>
  res.status(200).send({
    message: "Api Online.",
  })
);

app.use("/api/*", TokenMiddleware);
app.use("/", UserRoutes);



app.listen(port, () => {
  console.log(`Server is running on PORT ${port}`);
});

export default app;