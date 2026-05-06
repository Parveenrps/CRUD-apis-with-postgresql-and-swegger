import { Router } from "express";
import {
  createDistrict,
  deleteDistrict,
  getAllDistricts,
  getDistrictById,
  updateDistrict
} from "../controllers/district.controller.js";

const router = Router();

/**
 * @swagger
 * /districts:
 *   get:
 *     summary: Get all districts
 *     responses:
 *       200:
 *         description: Success
 */
router.get("/", getAllDistricts);

/**
 * @swagger
 * /districts:
 *   post:
 *     summary: Create a new district
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - state_id
 *             properties:
 *               name:
 *                 type: string
 *                 example: Sirsa
 *               state_id:
 *                 type: integer
 *                 example: 1
 *     responses:
 *       201:
 *         description: District created successfully
 */
router.post("/", createDistrict);

/**
 * @swagger
 * /districts/{id}:
 *   get:
 *     summary: Get district by ID
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
router.get("/:id", getDistrictById);

/**
 * @swagger
 * /districts/{id}:
 *   patch:
 *     summary: Update district
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
 *               state_id:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Updated successfully
 */
router.patch("/:id", updateDistrict);

/**
 * @swagger
 * /districts/{id}:
 *   delete:
 *     summary: Delete district
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
router.delete("/:id", deleteDistrict);

export default router;