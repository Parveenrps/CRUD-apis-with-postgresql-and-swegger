import { Router } from "express";
import {
  createLanguage,
  deleteLanguage,
  getAllLanguages,
  getLanguageById,
  updateLanguage
} from "../controllers/language.controller.js";

const router = Router();

/**
 * @swagger
 * /languages:
 *   get:
 *     summary: Get all languages
 *     responses:
 *       200:
 *         description: Success
 */
router.get("/", getAllLanguages);

/**
 * @swagger
 * /languages:
 *   post:
 *     summary: Create a new language
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - language
 *             properties:
 *               language:
 *                 type: string
 *                 example: JavaScript
 *     responses:
 *       201:
 *         description: Language created successfully
 */
router.post("/", createLanguage);

/**
 * @swagger
 * /languages/{id}:
 *   get:
 *     summary: Get language by ID
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
router.get("/:id", getLanguageById);

/**
 * @swagger
 * /languages/{id}:
 *   patch:
 *     summary: Update language
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
 *               language:
 *                 type: string
 *                 example: Java
 *     responses:
 *       200:
 *         description: Updated successfully
 */
router.patch("/:id", updateLanguage);

/**
 * @swagger
 * /languages/{id}:
 *   delete:
 *     summary: Delete language
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
router.delete("/:id", deleteLanguage);

export default router;