const express = require("express");
const { startChat } = require("../backend/services/geminiServices.jsx");

const router = express.Router();

router.post("/chat", async (req, res) => {
  const { message } = req.body;

  try {
    const response = await startChat(message);
    res.json({ response });
  } catch (error) {
    console.error("Detailed Error:", error);
    res.status(500).json({
      error: "Failed to process request.",
      details: error.message,
    });
  }
});

module.exports = (req, res) => {
  router(req, res); // Call Express router as a Vercel serverless function
};