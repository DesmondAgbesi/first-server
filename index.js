const express = require("express");

const app = express();

app.get("/", (req, res)=>{
  res.status(200).send("Welcome to my server");
});

app.post("/", (req, res) =>{
  res.status(201).send("Your data has been saved");
});

app.put("/", (req, res) =>{
  res.status(200).send("Your data has been patched");
});

app.patch("/", (req, res) =>{
  res.status(200).send("Your data has been patched");
});

app.delete("/", (req, res)=>{
  res.status(200).send("Your data has been deleted")
});

app.listen(4000, ()=>{
  console.log("Server listening to http://localhost:4000")
},
()=>{
  console.log("test run for everything")
})