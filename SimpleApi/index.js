// creata a simple expressjs Server
//import express
// instantiate express
//create a simple route to handle to request

const express = require("express");
const app = express();
// console.log(app);
const cors = require("cors");

app.get("/", (req, res) => {
  res.send("Hello World this is from server ");
});

app.use(cors());

app.get("/sachin", (req, res) => {
  res.send("sachin is the best");
});

//simple api to send student data to html page
app.get("/students", (req, res) => {
  const students = [
    {
      id: 1,
      name: "sachin",
      age: 45,
    },
    {
      id: 2,
      name: "saurav",
      age: 50,
    },

    {
      id: 3,
      name: "rahul",
      age: 30,
    },

    {
      id: 4,
      name: "virat",
      age: 35,
    },
  ];
  res.json(students);
});

// start the server

app.listen(8000, () => {
  console.log("Server is running on port http://localhost:8000");
});
