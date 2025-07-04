const express = require("express");
const User = require("../models/user.model");
const { createUser, getAllUsers } = require("../controllers/user.controller");
const router = express.Router();

router.get("/create", createUser);
router.get("/all", getAllUsers);
// router.post()

module.exports = router