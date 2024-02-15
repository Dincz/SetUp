import express from "express";
import { Router } from "express";
import {  addCategory,getCategory } from "../controllers/category.js";

const router = Router();

router.route("/add").post(addCategory);
router.route("/all").get(getCategory);

export default router;
