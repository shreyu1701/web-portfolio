import "./App.css";
import Home from "./pages/home";
import Chatbot from "./hooks/chatbot";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <div>
      <Analytics />
      <Home />
      <Chatbot />
    </div>
  );
}

export default App;
