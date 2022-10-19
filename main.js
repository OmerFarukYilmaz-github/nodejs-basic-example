require("dotenv/config");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { request } = require("express");

const PORT = process.env.PORT || 5000;
const app = express();
const helloPath = "/hello"

app.use(cors());
app.use(bodyParser.json());

const globalMiddleware = function (req, res, next) 
{
  console.log("Middleware got a new request");
 next();
};
const postSpecificMiddleware = function (req, res, next) 
{
  console.log("post Specific Middleware got a POST request");
 next();
};

app.use(globalMiddleware);

app.get("/", function (req, res) 
{
  console.log("Opening page");
  res.json("It'S a opening page");
});


app.get(helloPath, function (req, res) 
{
  console.log("Get page");
  res.json("Hello! It's a get request");
});


app.post(helloPath, postSpecificMiddleware, function (req, res) 
{
  console.log("Post page");
  res.json("Hello! It's a post request");
});

app.put(helloPath, function (req, res) 
{
  console.log("Put page");
  res.json("Hello! It's a put request");
});

app.delete(helloPath, function (req, res) 
{
  console.log("Delete page");
  res.json("Hello! It's a delete request");
});

app.listen(PORT, () => 
{
  console.log("Ready on http://localhost:" + PORT);
}
);
