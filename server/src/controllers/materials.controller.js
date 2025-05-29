import pool from '../config/db.js';

export const querymy = async (req, res) => {
  const [mat] = await pool.query(
    `SELECT * from jobs`
  );
  res.json(mat);
};
