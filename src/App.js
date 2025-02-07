import "./App.css";
import Home from "./pages/home";
import Chatbot from "./hooks/chatbot";
import { Analytics } from "@vercel/analytics/react";
import SplashCursor from "../src/assets/cursor/cursor.jsx";

function App() {
  return (
    <div>
      <Analytics />
      <SplashCursor className=" relative -z-10" />;
      <Home />
      {/* <Chatbot /> */}
    </div>
  );
}

export default App;
