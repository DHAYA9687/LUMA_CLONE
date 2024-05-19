import React from "react";

const CreateEvent = () => {
  return (
    <>
      <div className="text-white m-4 text-3xl font-bold">
        <h1 className="px-4">CREATE EVENT</h1>
      </div>
      <div className="flex items-center justify-center min-h-screen ">
        <form className="space-y-8 border-2 bg-transparent shadow-md rounded-lg p-10 w-full max-w-md m-auto mt-8">
          <div className="space-y-4">
            <div className="pb-2">
              <label
                htmlFor="eventName"
                className="block font-bold text-2xl text-white"
              >
                Event Name
              </label>
              <input
                id="eventName"
                type="text"
                className="mt-2 block w-full rounded-md border-gray-300 shadow-sm text-white focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 "
                placeholder="Event Name"
                required
              />
            </div>
            <div className="">
              <label
                htmlFor="eventDate"
                className="block text-2xl font-bold text-white pb-2"
              >
                Conduct By
              </label>
              <input
                id=""
                type="text"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm text-white focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                placeholder="Conduct By"
                required
              />
            </div>
            <div className="">
              <label
                htmlFor="eventDate"
                className="block text-2xl font-bold text-white pb-2"
              >
                Event Date
              </label>
              <input
                id="eventDate"
                type="date"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm text-white focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                placeholder="Event Name"
                required
              />
            </div>
            <div className="">
              <label
                htmlFor="eventDate"
                className="block text-2xl font-bold text-white pb-2"
              >
                Event Time
              </label>
              <input
                id="eventDate"
                type="time"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm text-white focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                required
              />
            </div>
            <div className="">
              <label
                htmlFor="eventDate"
                className="block text-2xl font-bold text-white pb-2"
              >
                venue
              </label>
              <input
                id="eventDate"
                type="text"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm text-white focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                placeholder="Venue"
                required
              />
            </div>
          </div>
          <div className="flex justify-end space-x-6">
            <button
              type="reset"
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
              Reset
            </button>
            <button
              type="submit"
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default CreateEvent;
