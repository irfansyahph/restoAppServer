import { Router } from "express";
import indexController from "../controllers/indexController";

const router = Router()

router.post('/add', indexController.detailOrderController.addDetailOrder)
router.get('/:id', indexController.detailOrderController.getDetailOrder)

export default router;