import express from "express";
import cors from "cors";
import { authRouter } from "./routes/auth.js";
import { errorHandler } from "./middleware/errorHandler.js";
// Note : All routes are executed in order
const app = express();

app.use(cors());
app.use(express.json());

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

app.use("/auth", authRouter);

app.use(errorHandler);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});