import { Request, Response } from "express";
import database from "../database";

export default function getMember(req: Request, res: Response) {
  const data = database.getMember(Number(req.params.id));
  if (data) {
    res.send(data);
  } else {
    res.sendStatus(404);
  }
}
