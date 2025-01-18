import React, { useEffect, useState, useContext } from "react";
import Loader from "../General/Loader";
import { GlobalContext } from "../../Context/GlobalContext";

const ScheduleView = () => {
  const [UpcomingEvents, setUpcomingEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { authTokens } = useContext(GlobalContext);

  useEffect(() => {
    const fetchUpcomingEvents = async () => {
      try {
        const response = await fetch(
          "http://127.0.0.1:8000/scheduler/getSchedule/?day=1&total_slots=15",
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
        const data = (await response.json()).data.subject_details;
        console.log(data);
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
  }, [authTokens]);

  return (
    <>
      {isLoading && <Loader />}
      <div className="flex-2">
        <h2 className="text-2xl font-semibold mb-4">Upcoming Events</h2>
        <ul className="space-y-4">
          {UpcomingEvents.map((subject) => (
            <li
              key={subject.id}
              className="border-2 border-gray-900 rounded p-4 bg-[ rgba(255, 248, 239, 0.70)] w-[1000px]"
            >
              <div>
                <h3 className="text-xl font-bold">{subject.name}</h3>
                <p className="mt-2">{` ${subject.slots} slots, 10 AM - 11 AM`}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ScheduleView;
