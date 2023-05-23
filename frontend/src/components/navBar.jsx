import { useState,React } from "react";
import { Close, Menu, Navbar0 } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [userAvatar, setUserAvatar] = useState(null);

  const handleLogin = () => {
    setLoggedIn(true);
    setUserAvatar("url-of-user-avatar-image");
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
            className={`font-poppins font-normal cursor-pointer text-[16px] ${
              index === navLinks.length - 1 ? "mr-0" : "mr-10"
            } text-white`}
          >
            <a href={nav.path}>{nav.title}</a>
          </li>
        ))}
        {!loggedIn && (
          <>
            <li className="ml-6">
              <button onClick={() => handleLogin()} className="mr-2">
                Sign In
              </button>
            </li>
            <li className="ml-3">
              <button
                onClick={() => handleLogin()}
                className="bg-blue-500 text-white px-4 py-2 rounded-full"
              >
                Sign Up
              </button>
            </li>
          </>
        )}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        {loggedIn ? (
          <img
            src={userAvatar}
            alt="user-avatar"
            className="w-[28px] h-[40px] object-contain mb-8 rounded-full"
          />
        ) : (
          <>
            <button onClick={() => handleLogin()} className="mr-2">
              Sign In
            </button>
            <button
              onClick={() => handleLogin()}
              className="bg-blue-500 text-white px-4 py-2 rounded-full"
            >
              Sign Up
            </button>
          </>
        )}

        <img
          src={toggle ? Close : Menu}
          alt="menu"
          className="w-[28px] h-[40px] object-contain mb-8"
          onClick={() => setToggle((prev) => !prev)}
        />

        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex flex-col justify-end items-center flex-1 mb-5">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[16px] ${
                  index === navLinks.length - 1 ? "mb-0" : "mb-4"
                } text-white`}
              >
                <a href={nav.path}>{nav.title}</a>
              </li>
            ))}
            {!loggedIn && (
              <>
                <li>
                  <button onClick={() => handleLogin()} className="mr-2">
                    Sign In
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleLogin()}
                    className="bg-blue-500 text-white px-4 py-2 rounded-full"
                  >
                    Sign Up
                  </button>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
