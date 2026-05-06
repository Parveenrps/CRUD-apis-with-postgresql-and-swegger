import pool from "../config/db.js";

export const getAllCountries = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM countries");

    res.status(200).json({
      success: true,
      message: "Countries fetched",
      data: result.rows
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

export const createCountry = async (req, res) => {
  try {
    const { name } = req.body;

    const result = await pool.query(
      "INSERT INTO countries(name) VALUES($1) RETURNING *",
      [name]
    );

    res.status(201).json({
      success: true,
      message: "Country added",
      data: result.rows[0]
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

export const getCountryById = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await pool.query(
      "SELECT * FROM countries WHERE id=$1",
      [id]
    );

    res.status(200).json({
      success: true,
      message: "Country fetched",
      data: result.rows[0]
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};


export const updateCountry = async (req, res) => {
  try {
    const { name } = req.body;
    const { id } = req.params;

    const result = await pool.query(
      "UPDATE countries SET name=$1 WHERE id=$2 RETURNING *",
      [name, id]
    );

    res.status(200).json({
      success: true,
      message: "Country updated",
      data: result.rows[0]
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};


export const deleteCountry = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await pool.query(
      "DELETE FROM countries WHERE id=$1 RETURNING *",
      [id]
    );

    res.status(200).json({
      success: true,
      message: "Country deleted",
      data: result.rows[0]
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};