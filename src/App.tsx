import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Welcome from "./Pages/Welcome";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        {/* Navbar */}
        <nav className="bg-white shadow-md px-6 py-4 flex justify-between">
          <h1 className="text-xl font-bold text-blue-600">
            Personal Task Manager
          </h1>
          <div className="space-x-4">
            <Link to="/Welcome" className="text-gray-700 hover:text-blue-600">
              Dashboard
            </Link>
            <Link to="/register" className="text-gray-700 hover:text-blue-600">
              Register
            </Link>
            <Link to="/login" className="text-gray-700 hover:text-blue-600">
              Login
            </Link>
          </div>
        </nav>

        {/* Page Content */}
        <div className="p-6">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/Welcome" element={<Welcome />} />
            {/* Default route should show Welcome */}
            <Route path="/" element={<Welcome />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
