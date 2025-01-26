const express = require("express");
const { sendEmail } = require("../backend/services/emailServices.jsx");

const router = express.Router();

router.post("/send-email", async (req, res) => {
  const { to, subject, message } = req.body;

  if (!to || !subject || !message) {
    return res.status(400).json({ error: "All fields are required." });
  }

  try {
    const result = await sendEmail({ to, subject, text: message });
    res.status(200).json(result);
  } catch (error) {
    console.error("Email Sending Error:", error);
    res.status(500).json({ error: "Failed to send email." });
  }
});

module.exports = (req, res) => {
  router(req, res); // Call Express router as a Vercel serverless function
};
