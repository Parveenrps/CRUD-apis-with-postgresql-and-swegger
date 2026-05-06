import { Router } from "express";
import {
  createCountry,
  deleteCountry,
  getAllCountries,
  getCountryById,
  updateCountry
} from "../controllers/country.controller.js";

const router = Router();

/**
 * @swagger
 * /countries:
 *   get:
 *     summary: Get all countries
 *     responses:
 *       200:
 *         description: Success
 */
router.get("/", getAllCountries);

/**
 * @swagger
 * /countries:
 *   post:
 *     summary: Create a new country
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *             properties:
 *               name:
 *                 type: string
 *                 example: India
 *     responses:
 *       201:
 *         description: Country created successfully
 */
router.post("/", createCountry);

/**
 * @swagger
 * /countries/{id}:
 *   get:
 *     summary: Get country by ID
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
router.get("/:id", getCountryById);

/**
 * @swagger
 * /countries/{id}:
 *   patch:
 *     summary: Update country
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
 *                 example: India Updated
 *     responses:
 *       200:
 *         description: Updated successfully
 */
router.patch("/:id", updateCountry);

/**
 * @swagger
 * /countries/{id}:
 *   delete:
 *     summary: Delete country
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
router.delete("/:id", deleteCountry);

export default router;