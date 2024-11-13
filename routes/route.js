import express from "express";
import {data,getAllReviews} from '../controllers/controller.js'
const router = express.Router();

router.post("/review", data);
router.get('/getreview',getAllReviews);

export default router;
