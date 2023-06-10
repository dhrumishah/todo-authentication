import express from "express";
import {
  deleteTask,
  getMyTask,
  newtasks,
  updateTask,
} from "../controllers/task.js";
import { isAuthenticated } from "../middlewares/auth.js";
const router = express.Router();

router.post("/new", isAuthenticated, newtasks);
router.get("/my", isAuthenticated, getMyTask);
router
  .route("/:id")
  .put(isAuthenticated, updateTask)
  .delete(isAuthenticated, deleteTask);
export default router;
