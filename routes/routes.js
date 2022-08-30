const express = require("express");
const router = express.Router();
const getData = require("../controllers/getData");
//route to get all records
router.get("/Books", async (req, res) => {
  try {
    const data = await getData.getAll();
    res.json(data);
  } catch (err) {
    res.send(err);
  }
});
//route to get a particular record
router.get("/Books/:name", async (req, res) => {
  const name = req.params.name;
  try {
    const data = await getData.getBookData(name);
    res.json(data).status(200);
  } catch (err) {
    res.send(err);
  }
});
//route to add book to record
router.post("/Books", async (req, res) => {
  const data = req.body;
  try {
    const result = await getData.addBookData(data);
    res.send(result).status(200);
  } catch (err) {
    res.send(err);
  }
});
//route to update book record
router.put("/Books/:name", async (req, res) => {
  const data = req.body;
  const id = req.params.name;
  try {
    const result = await getData.updateData(id, data);
    res.send(result);
  } catch (err) {
    res.send(err);
  }
});
//route to delete book from record
router.delete("/Books/:name", async (req, res) => {
  const data = req.params.name;
  try {
    const result = await getData.deleteData(data);
    res.send(result);
  } catch (err) {
    res.send(err);
  }
});
module.exports = router;
