import * as dotenv from "dotenv";

import express from 'express';
import cors from 'cors'
import { connectToMongo } from './src/config/mongoose.js';

import routes from "./src/routes/index.js";

dotenv.config();

const app = express();

app.use(express.json())
app.use(cors());


// ================================================ //
// INITIAL CHECK
// app.listen(port, () => {
//  return console.log("🚀 ~ file: index.js:15 ~ App listening on port:", `${port}`)
// })
// app.get('/', (req, res) => res.send('Hello World!'))

// ================================================ //
// MONGODB CONNECTION USING MONGOOSE

try {
 await connectToMongo();
 app.listen(process.env.PORT, () => {
  // console.log("file: index.js:30 ~ app.listen ~ process.env.PORT:", process.env.PORT);
 })
} catch (error) {
 // console.log("file: index.js:34 ~ error:", error);
}


// ================================================ //

app.use('/', routes)
