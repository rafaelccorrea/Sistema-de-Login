import { Router } from "express";
import { UserController } from "../controllers";

const router = Router();

router.post('/signin', UserController.signin);
router.post('/signup', UserController.signup);

export default router;