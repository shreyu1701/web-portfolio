require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { GoogleGenerativeAI } = require("@google/generative-ai");

const app = express();
app.use(express.json());
app.use(cors());

const apiKey = process.env.GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash-exp",
  systemInstruction: "Act like a chatbot for my projects:\n1. project name=HealthyFeast, Technology= HTML, CSS, JavaScript, ExpressJs, Node.Js , Features:BMI calculator, dynamic recipe section, News with search functionality, Blogs with search functionality and meal planner.\n\n2.project name=Codedoc, Technology= React.js , Tailwind CSS  and JavaScript, Features:Fully responsive.\n\n3.project name=Home health device data logger , Technology= Java, FXML, Oracle Database, Client-Server Architecture, Features:User authentication (Signup, Login, Forgot Password), Patient and Technician dashboards, Health data logging (e.g., Blood Pressure, Sugar Level, Heart Rate), Role-based access control (Patients can only view their own data, Technicians can access all patient data), Charts for health data visualization, Report generation in PDF and Excel formats.\n\n4.project name=WayToGreen, Technology= HTML, CSS, JavaScript  Features:Fully Responsive screen\n\ncontact for help: shreyanshkoladiyawork@gmail.com\nAvoid to answers questions other then project related.\nGive this response if you can't answer the query:\"Sorry can't help you with this.Please contact shreyanshkoladiyawork@gmail.com\"",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

app.post("/chat", async (req, res) => {
  const { message } = req.body;

  try {
    const chatSession = model.startChat({
      generationConfig,
      history: [
        {
          role: "user",
          parts: [{ text: "Act like a chatbot for my projects..." }],
        },
        {
          role: "model",
          parts: [
            { text: "Okay, I understand. I'll act as your project chatbot..." },
          ],
        },
      ],
    });

    const result = await chatSession.sendMessage(message);
    res.json({ response: result.response.text() });
  } catch (error) {
    console.error("Detailed Error:", error);
    res.status(500).json({
      error: "Failed to process request.",
      details: error.message,
    });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
