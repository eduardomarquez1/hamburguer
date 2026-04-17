import { Router } from "express";
import AvaliacaoController from "../controllers/AvaliacaoController.js";

const router = Router();

router.post("/", AvaliacaoController.create);
router.get("/", AvaliacaoController.findAll);
router.get("/:id", AvaliacaoController.findById);

export default router;