import { useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import LoginPage from "./pages/Login";
import AdminPortal from "./pages/AdminPortal";
import { AuthContext } from "./context/AuthContext";
import "./App.css";

function App() {
  const authContext = useContext(AuthContext);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/admin"
          element={
            authContext?.isAuthenticated ? <AdminPortal /> : <LoginPage />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
