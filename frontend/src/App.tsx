import "./App.css";
import SettingsMenu from "./components/SettingsMenu/SettingsMenu";
import NavBar from "./components/NavBar"; //
import Home from "./components/Home";
import Timer from "./components/Timer/Timer";
import ToDoList from "./components/ToDoList/ToDoList";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div>
          <NavBar />
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/settings" element={<SettingsMenu />} />
          <Route path="/timer" element={<Timer />} />
          <Route path="/todo" element={<ToDoList />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
