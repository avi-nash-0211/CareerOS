import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Careers from "./pages/Careers";
import CareerDetails from "./pages/CareerDetails";
import EligibleCareers from "./pages/EligibleCareers";
import AdminDashboard from "./pages/AdminDashboard";
import AddCareer from "./pages/AddCareer";
function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/careers/:id" element={<CareerDetails />} />
        <Route path="/eligible" element={<EligibleCareers />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/add" element={<AddCareer />} />
      </Routes>
    </>
  );
}
export default App;