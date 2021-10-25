import dotenv from "dotenv";
dotenv.config();
import path from "path";
import express from "express";
import aylien from "aylien_textapi";
import bodyParser from "body-parser";
import cors from "cors";
import mockAPIResponse from "./mockAPI.js";
import fetch from "node-fetch";
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("dist"));

const PORT = 8081; //server port 8081

var textapi = new aylien({
  application_key: process.env.API_KEY,
});

const baseURL = "https://api.meaningcloud.com/sentiment-2.1";
const myApiKey = process.env.API_KEY;
console.log(`your API KEY is ${process.env.API_KEY}`);

app.get("/", function (req, res) {
  res.sendFile(path.resolve("src/client/views/index.html"));
});
app.post("/add-url", async (req, res) => {
  try {
    const { url } = req.body.url;

    const apiURL = `${baseURL}?key=${myApiKey}&url=${req.body.url}&lang=en`;
    const response = await fetch(apiURL);
    const data = await response.json();

    res.send(data);
  } catch (e) {
    console.log(e);
  }
});

app.get("/test", function (req, res) {
  res.send(mockAPIResponse);
});

app.listen(PORT, (error) => {
  if (error) throw new Error(error);
  console.log(`Server listening on port ${PORT}!`);
});
