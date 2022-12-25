import express, { Request, Response } from "express";
import getMember from "../services/getMember";
import getMembers from "../services/getMembers";
import addMember from "../services/addMember";
import cors from "cors";

const app = express();
const port = process.env.PORT || 3000;

const allowedOrigins = ["http://localhost:8080","http://localhost:3000"];

const options: cors.CorsOptions = {
  origin: allowedOrigins,
};

app.use(cors(options));
app.use(express.json());

app.get("/", (_req: Request, res: Response) => {
  res.send("--Contour Test API--");
});

app.get("/members/:id", getMember);

app.get("/members", getMembers);

app.post("/members", addMember);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
