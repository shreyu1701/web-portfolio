require("dotenv").config();
const express = require("express");
const cors = require("cors");
const chatRoutes = require("../backend/routes/chatRoutes.jsx");
const emailRoutes = require("../backend/routes/emailRoutes.jsx");

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api", chatRoutes);
app.use("/api", emailRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
