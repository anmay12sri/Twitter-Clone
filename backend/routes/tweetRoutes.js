import express from "express";
// import { Login,  logout,  Register } from "../controllers/userController.js";
import isAuthenticated from "../config/auth.js";
import { createTweet } from "../controllers/tweetController.js";

const router=express.Router();

 router.route("/create").post(isAuthenticated,createTweet);



export default router;