import express from "express";
import cors from "cors";
import { prisma } from "./db.js";

const app = express(); // EXPRESS'S MAIN FACTORY FUNCTION IS NOW STORED IN THE APP VARIABLE 

app.use(cors()); // ALLOWS THE APP TO USE CORS WHICH ALLOWS THE FRONTEND TO CALL THIS SERVER
app.use(express.json()) // ALLOWS THE SERVER TO READ JSON REQUESTS

app.get("/health", (req, res) => {
  res.json({ status: "ok"});
})
// testing db connection
/* app.get("/debug/tasks", async (req, res) => {
  const tasks = await prisma.task.findMany({ include: { project: true } });
  res.json(tasks);
}); */

// app.get("/health", (req, res) => {res.json({status: "ok"}); })
// ARROW FUNCTION : () => {} so in this case : (req, res) => {res.json({status: "ok"})}

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
})