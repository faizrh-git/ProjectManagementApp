import express from "express";
import cors from "cors";
import { authRouter } from "./routes/auth.js";

const app = express();

app.use(cors());
app.use(express.json());

/*app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});*/

app.use("/auth", authRouter); // every route in authRouter now starts with /auth

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});