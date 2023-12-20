import express from "express";
import todoRouter from "./todo.routes.js";

const router = express.Router();

router.use("/todos", todoRouter);

router.use("/", function (req, res) {
 res.send("Hello")
})
export default router;