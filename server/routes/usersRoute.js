import { Router } from "express";
import indexController from "../controllers/indexController";

const router = Router()

router.get("/", indexController.usersController.findAll)
router.get("/:id", indexController.usersController.findOne)

export default router