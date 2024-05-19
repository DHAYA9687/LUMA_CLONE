import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
const Home = () => {
  return (
    <div>
      <Header />
      <div className="">
        <h1 className="text-3xl text-white font-bold text-center p-5">
          Welcome to{" "}
          <span className="bg-gradient-to-r from-red-400 to-red-600 rounded-md p-2">
            DHENT
          </span>
        </h1>
      </div>
      <div className="flex justify-center items-center min-h-80 min-w-80 ">
        <div className=" md:m-28">
          <h1 className="text-3xl text-white font-bold m-1 md:m-2">
            FOR THE EVENTS
          </h1>
          <h1 className="text-3xl text-white font-bold m-1 md:m-2">THAT</h1>
          <h1 className="text-3xl text-white font-bold m-1 md:m-2">
            CHANGE YOU
          </h1>
          <Link to="/Create" className="">
            <button className="m-2 bg-blue-500 p-2 rounded-md text-black hover:bg-blue-700">
              CREATE EVENTS
            </button>
          </Link>
          <Link to="/Explore" className="">
            <button className="md:my-10 md:mx-5 mx-5 my-3 text-black bg-gradient-to-r from-gray-400 to-white p-2 rounded-md hover:bg-red-500">
              EXPLORE EVENTS
            </button>
          </Link>
        </div>
        <div className="">
          <img
            src="https://tse2.mm.bing.net/th?id=OIP.SuYRGxWecX4tryq13gthDgHaEL&pid=Api&P=0&h=180"
            alt="event"
            className="rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
