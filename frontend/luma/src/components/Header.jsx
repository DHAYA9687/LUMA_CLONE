import React, { useState } from "react";
import { Link } from "react-router-dom";
const Header = () => {
  const [isSignIn, setIsSignIn] = useState(false);
  const handleMenu = () => {
    setIsSignIn(!isSignIn);
  };
  return (
    <div className="flex">
      <div className="flex-1 m-2 font-bold">
        <h1 className="text-white text-3xl p-5">DHENT</h1>
      </div>
      <div className="p-6 m-3">
        <nav>
          <Link className="text-black text-xl font-bold bg-gradient-to-r from-white via-red-400 to-red-800 white  py-1 px-2 rounded-md">
            {isSignIn ? (
              <button onClick={handleMenu}>SIGN IN</button>
            ) : (
              <button onClick={handleMenu}>SIGN OUT</button>
            )}
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Header;
