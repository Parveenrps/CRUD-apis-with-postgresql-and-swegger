import { Router } from "express";
import {
  createState,
  deleteState,
  getAllStates,
  getStateById,
  updateState
} from "../controllers/state.controller.js";

const router = Router();

/**
 * @swagger
 * /states:
 *   get:
 *     summary: Get all states
 *     responses:
 *       200:
 *         description: Success
 */
router.get("/", getAllStates);

/**
 * @swagger
 * /states:
 *   post:
 *     summary: Create a new state
 *     description: Add a state linked to a country
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - country_id
 *             properties:
 *               name:
 *                 type: string
 *                 example: Haryana
 *               country_id:
 *                 type: integer
 *                 example: 2
 *     responses:
 *       201:
 *         description: State created successfully
 */
router.post("/", createState);

/**
 * @swagger
 * /states/{id}:
 *   get:
 *     summary: Get state by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Success
 */
router.get("/:id", getStateById);

/**
 * @swagger
 * /states/{id}:
 *   patch:
 *     summary: Update state
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               country_id:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Updated successfully
 */
router.patch("/:id", updateState);

/**
 * @swagger
 * /states/{id}:
 *   delete:
 *     summary: Delete state
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Deleted successfully
 */
router.delete("/:id", deleteState);

export default router;