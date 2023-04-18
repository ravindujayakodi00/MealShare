import React from "react";
const EventDetails = ({ events }) => {
  return (
    <>
      {events.map((event) => (
        <div key={event.id} className="bg-white shadow overflow-hidden sm:rounded-lg flex">
          <div className="w-1/3">
            <img src={event.image} alt="Event" className="h-full w-full object-cover" />
          </div>
          <div className="w-2/3 p-4 flex flex-col justify-between">
            <div>
              <div className="flex flex-row justify-between items-center">
                <h3 className="text-lg leading-6 font-medium text-gray-900 mb-1">
                  {event.title}
                </h3>
                <div className="flex flex-row items-center">
                  <p className="mr-4 text-sm text-gray-500">{event.location}</p>
                  <p className="text-sm text-gray-500">{event.date}</p>
                </div>
              </div>
            </div>
            <p className="mt-2 text-sm text-gray-500">
              {event.description}
            </p>
          </div>
        </div>
      ))}
    </>
  );
};
export default EventDetails;
