import { Router } from "express";
import { uploadImage, deleteImage } from "../controllers/image.controllers.js";
const router = Router();
router.post("/", uploadImage);
router.delete("/", deleteImage);
export default router;
