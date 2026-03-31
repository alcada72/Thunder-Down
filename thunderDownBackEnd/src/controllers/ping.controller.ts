import { Request, Response } from "express";

export function Ping(req: Request, res: Response) {
  return res.status(200).json({ pong: true })
}