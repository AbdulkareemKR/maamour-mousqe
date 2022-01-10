const express = require("express");
const router = express.Router();
const { Programs } = require("../models");

router.get("/", async (req, res) => {
  const listOfPosts = await Programs.findAll();
  res.send(listOfPosts);
});

router.get("/byId/:id", async (req, res) => {
  const id = req.params.id;
  const post = await Programs.findByPk(id);
  res.json(post);
});

router.post("/", async (req, res) => {
  const post = req.body;
  await Programs.create(post);
  res.json(post);
});

module.exports = router;
