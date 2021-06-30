import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Working Fine till now....");
});

export default router;
