import {NextFunction, Request, Response} from 'express';
import jwt from 'jsonwebtoken';

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const token = req.header("Authorization")!.split(" ")[1];
  if (!token) {
    res.status(401).json({message: "Unauthorized"});
    return;
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!);
    // req.user = decoded;
    next();
  } catch (e) {
    res.status(400).json({message: "Invalid token"});
    return;
  }
};