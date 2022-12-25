import { Request, Response } from "express";
import database from "../database";

export default function addMember(req: Request, res: Response) {
  console.log(req);
  const id = database.addMember(req.body);
  res.send(id.toString());
}
