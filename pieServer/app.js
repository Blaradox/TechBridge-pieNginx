const express = require("express");
const morgan = require("morgan");
const app = express();
const PORT = 3000;
const pieRoutes = require("./routes/pie");

app.use(express.static("public"));
app.use(express.urlencoded());
app.use(express.json());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("Hello TechBridge Cohort 2! Watch Nodemon in action");
});

app.post("/", (req, res) => {
  res.json({ posted: true });
});

const PIE_API_URL = "/api/pie";
app.use(PIE_API_URL, pieRoutes);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
