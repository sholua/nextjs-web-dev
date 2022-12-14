import { NextApiRequest, NextApiResponse } from "next";
import { docs } from "./data/docs";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    res.status(200).json(docs);
  }
}
