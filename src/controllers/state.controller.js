import pool from "../config/db.js";

export const getAllStates = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM states");

    res.status(200).json({
      success: true,
      message: "States fetched",
      data: result.rows
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};


export const createState = async (req, res) => {
  try {
    const { name, country_id } = req.body;

    const result = await pool.query(
      "INSERT INTO states(name, country_id) VALUES($1, $2) RETURNING *",
      [name, country_id]
    );

    res.status(201).json({
      success: true,
      message: "State added",
      data: result.rows[0]
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};


export const getStateById = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await pool.query(
      "SELECT * FROM states WHERE id=$1",
      [id]
    );

    res.status(200).json({
      success: true,
      message: "State fetched",
      data: result.rows[0]
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const updateState = async (req, res) => {
  try {
    const { name, country_id } = req.body;
    const { id } = req.params;

    const result = await pool.query(
      "UPDATE states SET name=$1, country_id=$2 WHERE id=$3 RETURNING *",
      [name, country_id, id]
    );

    res.status(200).json({
      success: true,
      message: "State updated",
      data: result.rows[0]
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};


export const deleteState = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await pool.query(
      "DELETE FROM states WHERE id=$1 RETURNING *",
      [id]
    );

    res.status(200).json({
      success: true,
      message: "State deleted",
      data: result.rows[0]
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};