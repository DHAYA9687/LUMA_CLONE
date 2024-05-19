import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
const Home = () => {
  return (
    <div>
      <Header />

      <div className="flex justify-center font-serif items-center min-h-80 min-w-80 m-auto mt-10 ">
        <div className=" pl-2 pr-5">
          <h1 className="text-5xl text-white font-bold m-1 md:m-2">
            FOR THE EVENTS
          </h1>
          <h1 className="text-5xl text-white font-bold m-1 md:m-2">THAT</h1>
          <h1 className="text-5xl text-with-background font-bold m-1 md:m-2">
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
        <div className="mr-2">
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
