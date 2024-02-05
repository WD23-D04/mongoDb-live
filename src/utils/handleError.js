export const handleError = (res, e) => {
  return res.status(500).json(e);
};
