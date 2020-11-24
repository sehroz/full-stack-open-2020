import express from "express";
import diaService from "../services/allService";
const router = express.Router();

router.get("/", (_req, res) => {
  res.send(diaService.getDia());
});

export default router;
