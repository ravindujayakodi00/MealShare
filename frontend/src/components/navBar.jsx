import { useState, React } from "react";
import { Close, Menu, Navbar0 } from "../assets";
import { navLinks } from "../constants";
import { Link } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import { useLogout } from "../hooks/useLogout";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [userAvatar, setUserAvatar] = useState(null);
  const { user, logout } = useAuthContext();
  const { logout: handleLogout } = useLogout();

  const handleLogin = () => {
    setLoggedIn(true);
    setUserAvatar("url-of-user-avatar-image");
  };

  const handleLogoutClick = () => {
    handleLogout();
  };

  return (
    <nav className="w-full flex justify-between items-center navbar">
      <div className="flex items-center">
        <img src={Navbar0} alt="logo" className="w-[80px] h-[70px]" />
        <p className="font-medium text-2xl text-white mr-2">MealShare</p>
      </div>

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`mr-8 font-poppins font-normal cursor-pointer text-[16px] ${
              index === navLinks.length - 1 ? "mr-0" : "mr-10"
            } text-white`}
          >
            <a href={nav.path}>{nav.title}</a>
          </li>
        ))}
        {user ? (
          <div className="flex">
     
            <button
              onClick={() => handleLogoutClick()}
              className="bg-blue-500 text-white px-4 py-2 rounded-full"
            >
              Logout
            </button>
          </div>
        ) : (
          <>
            <Link to="/login" onClick={() => handleLogin()} className="mr-6">
              Sign In
            </Link>
            <Link
              to = "/signup"
              onClick={() => handleLogin()}
              className="bg-blue-500 text-white px-4 py-2 rounded-full mr-4"
            >
              Sign Up
            </Link>
          </>
        )}
      </ul>

    </nav>
  );
};

export default Navbar;
