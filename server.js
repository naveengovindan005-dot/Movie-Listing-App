const express = require("express");
const path = require("path");

const app = express();

app.get("/api/ping", (req, res) => {
  res.send("pong!");
});

app.get("/api/movies", (req, res) => {
  res.json({
    data: [
      { id: 1, name: "Avengers" },
      { id: 2, name: "Interstellar" },
      { id: 3, name: "Inception" },
      { id: 4, name: "Titanic" }
    ]
  });
});

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});