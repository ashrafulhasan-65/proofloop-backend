const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json({ limit: "1mb" }));

app.get("/", (req, res) => {
  res.send("PROOFLOOP backend is alive!");
});

app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    project: "PROOFLOOP",
    message: "Backend is running successfully!",
    timestamp: new Date().toISOString()
  });
});

app.post("/api/test", (req, res) => {
  res.json({
    status: "ok",
    received: req.body ?? {},
    message: "Your request reached PROOFLOOP!"
  });
});

app.use((req, res) => {
  res.status(404).json({
    status: "error",
    message: "API route not found"
  });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log("PROOFLOOP backend running on port " + PORT);
});
