import pool from "../config/db.js";


export const getAllDistricts = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM districts");

    res.status(200).json({
      success: true,
      message: "Districts fetched",
      data: result.rows
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const createDistrict = async (req, res) => {
  try {
    const { name, state_id } = req.body;

    const result = await pool.query(
      "INSERT INTO districts(name, state_id) VALUES($1, $2) RETURNING *",
      [name, state_id]
    );

    res.status(201).json({
      success: true,
      message: "District added",
      data: result.rows[0]
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};


export const getDistrictById = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await pool.query(
      "SELECT * FROM districts WHERE id=$1",
      [id]
    );

    res.status(200).json({
      success: true,
      message: "District fetched",
      data: result.rows
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};


export const updateDistrict = async (req, res) => {
  try {
    const { name, state_id } = req.body;
    const { id } = req.params;

    const result = await pool.query(
      "UPDATE districts SET name=$1, state_id=$2 WHERE id=$3 RETURNING *",
      [name, state_id, id]
    );

    res.status(200).json({
      success: true,
      message: "District updated",
      data: result.rows[0]
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};


export const deleteDistrict = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await pool.query(
      "DELETE FROM districts WHERE id=$1 RETURNING *",
      [id]
    );

    res.status(200).json({
      success: true,
      message: "District deleted",
      data: result.rows[0]
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};