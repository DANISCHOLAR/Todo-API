const express = require("express");
const cors = require("cors");

const routes = require('./routes')

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.get("/", (req, res) => {
  res.send("This is awesome!");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
console.log(`Listening at ${PORT}`);
});