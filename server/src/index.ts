import express from "express";
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import http from 'http'
import cors from 'cors'

import { db, createRoutes } from './cors'

const app = express();

const httpServer = http.createServer(app)

dotenv.config()

db()

app.use(bodyParser.json())
app.use(cors())

createRoutes(app)

httpServer.listen(process.env.PORT, () =>
  console.log(`Server start http://localhost:${process.env.PORT}`)
);