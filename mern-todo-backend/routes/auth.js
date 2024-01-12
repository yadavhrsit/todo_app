const express = require("express");
const {register} = require("../controllers/Auth");
const {login} = require("../controllers/Auth");


const router = express.Router();

// Registration
router.post("/register", register);

// Login
router.post("/login",login);

module.exports = router;
