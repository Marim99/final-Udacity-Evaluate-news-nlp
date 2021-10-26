import dotenv from "dotenv";
dotenv.config();
import path from "path";
import aylien from "aylien_textapi";
import bodyParser from "body-parser";
import express from "express";
import cors from "cors";
import mockAPIResponse from "./mockAPI.js";
import fetch from "node-fetch";
const port = 8081; //server port 8081
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("dist"));
const myApiKey = process.env.API_KEY;
var textapi = new aylien({
  application_key: myApiKey,
});

console.log(`your API KEY is ${myApiKey}`);

app.post("/add-url", async (req, res) => {
  try {
    const apiURL = `https://api.meaningcloud.com/sentiment-2.1?key=${myApiKey}&url=${req.body.url}&lang=en`;
    const response = await fetch(apiURL);
    const data = await response.json();
    res.send(data);
  } catch (e) {
    console.log(e);
    res.send(`<script>alert(${e})</script>`);
  }
});

app.get("/test", function (req, res) {
  res.send(mockAPIResponse);
});
app.get("/", function (req, res) {
  res.sendFile("dist/index.html");
});
app.listen(port, (error) => {
  if (error) throw new Error(error);
  console.log(`Server listening on port ${port}!`);
});
