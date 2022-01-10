const express = require("express");
const router = express.Router();
const { Users } = require("../models");
const bcrypt = require("bcrypt");
const { sign } = require("jsonwebtoken");
const { validateToken } = require("../middlewares/AuthMiddleware");

router.post("/", async (req, res) => {
  const { name, email, password, userType, educationLevel } = req.body;
  bcrypt.hash(password, 10).then((hash) => {
    Users.create({
      name: name,
      email: email,
      password: hash,
      userType: userType,
      educationLevel: educationLevel,
    });
  });
  res.json("SUCCESS");
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = await Users.findOne({ where: { username: username } });

  if (!user) {
    res.json({ error: "Username does not exist" });
  } else {
    bcrypt.compare(password, user.password).then((result) => {
      if (!result) {
        res.json({ error: "username or password is incorrect" });
      } else {
        const accessToken = sign(
          { username: user.username, id: user.id },
          "imortantSecret"
        );

        res.json({ token: accessToken, username: user.username, id: user.id });
      }
    });
  }
});

router.get("/checkLogin", validateToken, async (req, res) => {
  res.json(req.user);
});

module.exports = router;
