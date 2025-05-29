export const isEmployee = (req, res, next) => {
  if (req.user.role !== 'store manager') {
    return res.status(403).json({ message: 'store manager access required' });
  }
  next();
};

