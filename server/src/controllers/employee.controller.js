import pool from '../config/db.js';

export const querymy = async (req, res) => {
  const [emp] = await pool.query(
    `SELECT * from jobs`
  );
  res.json(emp);
};
