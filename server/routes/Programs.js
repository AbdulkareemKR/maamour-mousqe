const express = require("express");
const router = express.Router();
const { Programs } = require("../models");

router.get("/", async (req, res) => {
  const listOfPosts = await Programs.findAll();
  res.send(listOfPosts);
});

router.get("/byId/:id", async (req, res) => {
  const id = req.params.id;
  const program = await Programs.findByPk(id);
  res.json(program);
});

router.post("/", async (req, res) => {
  const program = req.body;
  await Programs.create(program);
  res.json(program);
});

module.exports = router;
