const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.Port || 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello from my over dover smarty node!!, with auto restart");
});

const users = [
  { id: 1, name: "Sabana", email: "sabana@gmail.com", mobile: "0178734262" },
  {
    id: 2,
    name: "shabonoor",
    email: "shabonoor@gmail.com",
    mobile: "0178734262",
  },
  { id: 3, name: "suchita", email: "suchita@gmail.com", mobile: "0178734262" },
  { id: 4, name: "chonda", email: "chonda@gmail.com", mobile: "0178734262" },
  { id: 5, name: "Sraboni", email: "sraboni@gmail.com", mobile: "0178734262" },
  { id: 6, name: "aayana", email: "aayan@gmail.com", mobile: "0178734262" },
  { id: 7, name: "Sabina", email: "sabina@gmail.com", mobile: "0178734262" },
];

app.get("/users", (req, res) => {
  // filter by search query parameter
  if (req.query.name) {
    const search = req.query.name.toLowerCase();
    const matched = users.filter((user) =>
      user.name.toLocaleLowerCase().includes(search)
    );
    res.send(matched);
  } else {
    res.send(users);
  }
});

app.post("/user", (req, res) => {
  console.log("request", req.body);
  const user = req.body;
  user.id = users.length + 1;
  users.push(user);
  res.send(user);
});

app.get("/user/:id", (req, res) => {
  console.log(req.params);
  const id = parseInt(req.params.id);
  const user = users.find((u) => u.id === id);
  res.send(user);
});

app.get("/fruits", (req, res) => {
  res.send(["mango", "apple", "orange"]);
});

app.get("/fruits/mango/fazle", (req, res) => {
  res.send("sour sour fazle favor");
});

app.listen(port, () => {
  console.log("listening to port", port);
});
