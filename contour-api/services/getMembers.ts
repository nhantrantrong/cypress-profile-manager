import { Request, Response } from "express";
import database from "../database";

export default function getMembers(req: Request, res: Response) {
  const queryString = req.query.queryString;
  if (queryString && typeof queryString === "string") {
    const members = database.getMembers(queryString);
    res.send(members);
  } else {
    const data = database.getAllMembers();
    res.send(data);
  }
}
