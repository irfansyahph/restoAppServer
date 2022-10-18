import { Router } from "express";
import indexController from "../controllers/indexController";

const router = Router()

router.get("/", indexController.productsController.findAll)
router.get("/:type", indexController.productsController.getFood)

export default router