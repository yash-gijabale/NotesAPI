const express = require("express");
const { singup, signin } = require("../controllers/userController");
const userRouter = express.Router();

userRouter.post("/signup", singup);
userRouter.post("/signin", signin);

module.exports = userRouter;
