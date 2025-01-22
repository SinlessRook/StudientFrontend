import React, { useEffect, useState, useContext } from "react";
import Loader from "../General/Loader";
import { GlobalContext } from "../../Context/GlobalContext";

const ScheduleView = ({category}) => {
  const [UpcomingEvents, setUpcomingEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { authTokens } = useContext(GlobalContext);
  const [hours, sethours] = useState(1);
  const [min, setmin] = useState(0);

  useEffect(() => {
    const fetchUpcomingEvents = async () => {
      try {
        const response = await fetch(
          "http://127.0.0.1:8000/scheduler/getSchedule/?hrs="+hours+"&min="+min+"+&category="+category,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              username: authTokens.username,
              password: authTokens.password,
            }),
          }
        );
        const data =(await response.json()).data
        if (data) {
          setUpcomingEvents(data);
        }
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching upcoming events:", error);
        setIsLoading(false);
      }
    };
    fetchUpcomingEvents();
  }, [authTokens, hours, min, category]);
  return (
    <>
      {isLoading && <Loader />}
      <div className="flex-2">
        <div className="flex justify-between py-4">
          <h2 className="text-2xl font-semibold mb-4">Upcoming Events</h2>
          <div className="flex flex-col space-y-2">

          
          <div className="flex items-center space-x-2">
            {/* Label for the input */}
            <label htmlFor="totalhrs" className="text-gray-700 font-medium">
            Hours:
            </label>

            {/* Input field */}
            <input
              id="totalhrs"
              className="px-4 rounded-3xl border border-gray-900 w-[80px]" 
              type="number"
              placeholder="Total Slots"
              value={hours}
              onChange={(e) => sethours(e.target.value)}  
            />
          </div>
          <div className="flex items-center space-x-2">
            {/* Label for the input */}
            <label htmlFor="totalminutes" className="text-gray-700 font-medium">
              Min:&nbsp;&nbsp;&nbsp;
            </label>

            {/* Input field */}
            <input
              id="totalminutes"
              className="px-4 rounded-3xl border border-gray-900 w-[80px]" 
              type="number"
              placeholder="Total Slots"
              value={min}
              onChange={(e) => setmin(e.target.value)}  
            />
          </div>
          </div>
        </div>
        <ul className="space-y-4">
          {UpcomingEvents.map((subject) => (
            <li
              key={subject.id}
              className="border-2 border-gray-900 rounded p-4 bg-[ rgba(255, 248, 239, 0.70)] w-[1000px]"
            >
              <div>
                <h3 className="text-xl font-bold">{subject.name}</h3>
                <p className="mt-2">{`${subject.day}, ${subject.slots} %`}</p>
                <p className="mt-2">{`Study Time : ${subject.hours} Hours and ${subject.minutes} Minutes.`}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ScheduleView;
