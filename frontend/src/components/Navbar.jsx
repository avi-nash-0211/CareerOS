import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">

        <h1 className="text-2xl font-bold">
          CareerOS
        </h1>

        <div className="flex gap-6">

          <Link to="/">Home</Link>

          <Link to="/careers">Careers</Link>

          <Link to="/eligible">Eligible</Link>

          <Link to="/login">Login</Link>

          <Link to="/register">Register</Link>

          <Link to="/admin">Admin</Link>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;