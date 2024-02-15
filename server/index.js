import express from "express";
import ConnectionToDb from "./Database/DbConnection.js";
import {config} from "dotenv";
import category from "./routes/category.routes.js";
import cors from 'cors'
config();
// Database connection setup (assuming async/await):
(async () => {
  await ConnectionToDb();
})();

const port = 3000;

const app = express();
app.use(express.json());

app.use(cors({
  origin:[process.env.frontend_url],
  credentials:true
}))

app.use("/category", category);

app.all("*", (req, res, next) => {
  console.log(`Can't find ${req.originalUrl} on the server!`);
});

(async () => {
  await app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
})();
