import React from "react";

const ExploreEvent = () => {
  const num = 5;
  return (
    <div className="text-white">
      <header className="text-4xl font-bold m-3 p-4 ">
        <div className="">DHENT</div>
      </header>
      <div className="font-bold px-28 md:px-48">
        <h1 className="text-4xl pb-4">EXPLORE EVENTS</h1>
        <h1 className="text-2xl pt-4">THIS WEEK</h1>
      </div>
      {/*grid columns */}
      <div className="grid grid-cols-2 md:grid-cols-4 sm:grid-cols-3 pt-10 w-4/5 mx-auto">
        <div className="flex p-3 gap-3">
          <div className="bg-white w-[100px] h-[100px] rounded-full"></div>
          <div className="flex flex-col justify-center items-start">
            <h1>DEVS</h1>
            <h3>{`${num} events`}</h3>
          </div>
        </div>
        <div className="flex p-3 gap-3">
          <div className="bg-white w-[100px] h-[100px] rounded-full"></div>
          <div className="flex flex-col justify-center items-start">
            <h1>GDSC</h1>
            <h3>{`${num} events`}</h3>
          </div>
        </div>
        <div className="flex p-3 gap-3">
          <div className="bg-white w-[100px] h-[100px] rounded-full"></div>
          <div className="flex flex-col justify-center items-start">
            <h1>UI PATH</h1>
            <h3>{`${num} events`}</h3>
          </div>
        </div>
        <div className="flex p-3 gap-3">
          <div className="bg-white w-[100px] h-[100px] rounded-full"></div>
          <div className="flex flex-col justify-center items-start">
            <h1>IEEE CS</h1>
            <h3>{`${num} events`}</h3>
          </div>
        </div>
        <div className="flex p-3 gap-3">
          <div className="bg-white w-[100px] h-[100px] rounded-full"></div>
          <div className="flex flex-col justify-center items-start">
            <h1>ROTARACT</h1>
            <h3>{`${num} events`}</h3>
          </div>
        </div>
        <div className="flex p-3 gap-3">
          <div className="bg-white w-[100px] h-[100px] rounded-full"></div>
          <div className="flex flex-col justify-center items-start">
            <h1>YUVA</h1>
            <h3>{`${num} events`}</h3>
          </div>
        </div>
        <div className="flex p-3 gap-3">
          <div className="bg-white w-[100px] h-[100px] rounded-full"></div>
          <div className="flex flex-col justify-center items-start">
            <h1>LEO</h1>
            <h3>{`${num} events`}</h3>
          </div>
        </div>
        <div className="flex p-3 gap-3">
          <div className="bg-white w-[100px] h-[100px] rounded-full"></div>
          <div className="flex flex-col justify-center items-start">
            <h1>OTHERS</h1>
            <h3>{`${num} events`}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreEvent;
