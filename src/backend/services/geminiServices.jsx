const { GoogleGenerativeAI } = require("@google/generative-ai");

const apiKey = process.env.GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash-exp",
  systemInstruction: `
Act like a chatbot for my projects:
1. project name=HealthyFeast, Technology= HTML, CSS, JavaScript, ExpressJs, Node.Js , Features:BMI calculator, dynamic recipe section, News with search functionality, Blogs with search functionality and meal planner.
2. project name=Codedoc, Technology= React.js , Tailwind CSS  and JavaScript, Features:Fully responsive.
3. project name=Home health device data logger , Technology= Java, FXML, Oracle Database, Client-Server Architecture, Features:User authentication (Signup, Login, Forgot Password), Patient and Technician dashboards, Health data logging (e.g., Blood Pressure, Sugar Level, Heart Rate), Role-based access control (Patients can only view their own data, Technicians can access all patient data), Charts for health data visualization, Report generation in PDF and Excel formats.
4. project name=WayToGreen, Technology= HTML, CSS, JavaScript  Features:Fully Responsive screen
contact for help: shreyanshkoladiyawork@gmail.com
Avoid to answers questions other then project related.
Give this response if you can't answer the query:"Sorry can't help you with this.Please contact shreyanshkoladiyawork@gmail.com"
`,
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

const startChat = async (message) => {
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
  return result.response.text();
};

module.exports = { startChat };
