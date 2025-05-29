export const isManager = (req, res, next) => {
  if (req.user.role !== 'general manager') {
    return res.status(403).json({ message: 'general manager access required' });
  }
  next();
};