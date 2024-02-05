import { Response } from 'express';
export const handleError = (res: Response, e: any) => {
  return res.status(500).json(e.message);
};
