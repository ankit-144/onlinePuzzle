import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../configs/firebase.config";

const Navbar = () => {
  const navigate = useNavigate();
  const handleLogout = async () => {
    const res = await logout();
    if (res == "success") {
      navigate("/login");
    }
  };
  return (
    <nav className="h-20 w-full">
      <ul className="flex h-full w-full justify-center gap-5 items-center">
        <Link to="/">
          <li className="hover:text-white cursor-pointer underline">Home</li>
        </Link>
        <Link to="/about">
          <li className="hover:text-white cursor-pointer underline">About</li>
        </Link>
        <li
          className="hover:text-white cursor-pointer underline"
          onClick={handleLogout}
        >
          Signout
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
