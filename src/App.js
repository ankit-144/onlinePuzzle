import "./App.css";
import About from "./pages/About";
import Home from "./pages/Home";
import MatrixPage from "./pages/Matrix";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Prevent from "./Prevent";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Deadend from "./pages/Deadend";
import Solved from "./pages/Solved";

function App() {
  return (
    <Router>
      <div className="bg-[#0F0F0F] h-screen">
        {/* <MatrixPage /> */}
        <Routes>
          <Route path="/welcome" element={<MatrixPage />} />
          <Route
            path="/"
            exact
            element={
              <Prevent>
                <Home />
              </Prevent>
            }
          />
          <Route
            path="/about"
            element={
              <Prevent>
                <About />
              </Prevent>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/deadend" element={<Deadend />} />
          <Route path="/solved" element={<Solved />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
