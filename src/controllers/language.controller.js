import pool  from "../config/db.js";


export const getAllLanguages = async(req, res) =>{
    try {
        const result = await pool.query('SELECT * FROM languages');
        console.log(result.rows[0]);
        res.status(200).json({
            success: true,
            message: "Languages Fetched",
            data: result.rows
        });
    } catch (error) {
        res.status(500).json({ 
            success: false,
            message: error.message 
        });
    }
}


export const createLanguage = async(req, res) =>{
    try {
        const {language} = req.body;
        const result = await pool.query('INSERT INTO LANGUAGES(name) VALUES($1) RETURNING *', [language]);
        res.status(201).json({
            success: true,
            message: "Language added",
            data: result.rows
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}
export const getLanguageById = async(req, res) =>{
    try {
        const {id} = req.params;
        const languages = await pool.query('SELECT * FROM LANGUAGES WHERE ID=$1', [id])
        res.status(200).json({
            success: true,
            message: "languages fetched",
            data: languages.rows
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

export const updateLanguage = async(req, res) =>{
    try {
        const {language} = req.body;
        const {id} = req.params;

        const result = await pool.query('UPDATE LANGUAGES SET NAME = $1 WHERE ID = $2 RETURNING *', [language, id]);
        res.status(200).json({
            success: true,
            message: "Language updated",
            data: result.rows
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

export const deleteLanguage = async(req, res) =>{
    try {
        const {id} = req.params;
        const result = await pool.query('DELETE FROM LANGUAGES WHERE ID = $1 RETURNING *', [id])
        res.status(200).json({
            success: true,
            message: "Language Deleted",
            data: result.rows
        })
    } catch (error) {
         res.status(500).json({
            success: false,
            message: error.message
        })
    }
}
