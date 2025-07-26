const express = require("express");
const piesModel = require("../controllers/piesModel");
const router = express.Router();

router.get("/", (req, res) => {
  const pies = piesModel.readPies();
  res.json({ pies });
});
router.post("/", (req, res) => {
  const { flavor } = req.body;
  piesModel.createPie(flavor);
  const pies = piesModel.readPies();
  res.status(201);
  res.json({ pies });
});
router.put("/", (req, res) => {
  const { flavor, newFlavor } = req.body;
  piesModel.updatePie(flavor, newFlavor);
  const pies = piesModel.readPies();
  res.status(201);
  res.json({ pies });
});
router.delete("/", (req, res) => {
  const { flavor } = req.body;
  piesModel.deletePie(flavor);
  const pies = piesModel.readPies();
  res.status(200);
  res.json({ pies });
});

module.exports = router;
