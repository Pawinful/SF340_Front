import React, { useEffect, useState } from "react";
import { FaHome, FaMapMarkerAlt } from "react-icons/fa";
import { HiUsers } from "react-icons/hi2";

const MyBooking = () => {
  const [bookingData, setBookingData] = useState(null);

  useEffect(() => {
    const username = localStorage.getItem("username");

    if (username) {
      fetch("http://localhost:3000/api/booking/getUserBooking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username }),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data) {
            setBookingData(data);
          } else {
            setBookingData(null);
          }
        })
        .catch((error) => console.error("Error fetching booking data:", error));
    }
  }, []);

  return (
    <div className="bg-[#EBEDF1] p-7 min-h-screen">
      <div className="bg-white max-w-4xl min-h-90 mx-auto rounded-xl shadow-md p-8 mb-6 flex flex-col gap-10 ">
        <div className="flex flex-col gap-10">
          {bookingData ? (
            <div>
              <div className="flex items-start gap-6 mb-5">
                <div className="bg-gray-200 p-6 rounded-lg">
                  <FaHome className="text-grey-600 text-7xl" />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold mb-2">
                    {bookingData.roomNameEN}
                  </h2>
                  <p className="text-gray-500 flex items-center gap-2">
                    <FaMapMarkerAlt /> {bookingData.roomLocation}
                  </p>
                </div>
              </div>

              <div className="flex justify-center items-center gap-20 ">
                <div>
                  <div className="font-semibold mb-3">Start Date</div>
                  <div className="bg-[#CECECE] px-4 py-1 rounded-md font-medium">
                    {bookingData.startDate}
                  </div>
                </div>
                <div>
                  <div className="font-semibold mb-3">End Date</div>
                  <div className="bg-[#8A2A2B] text-white px-4 py-1 rounded-md font-medium">
                    {bookingData.endDate}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center text-gray-500">
              No booking found for this user.
            </div>
          )}

          <div className="flex justify-center">
            {bookingData && (
              <div className="w-full max-w-123">
                <table className="w-full border border-gray-400 text-center">
                  <thead className="bg-gray-300">
                    <tr>
                      <th className="border border-gray-400 px-6 py-3">
                        Student ID
                      </th>
                      <th className="border border-gray-400 px-6 py-3">
                        Confirm Status
                      </th>
                      <th className="border border-gray-400 px-6 py-3">
                        Time Add
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white">
                    {bookingData.bookings?.map((item, index) => (
                      <tr key={index} className="border border-gray-400">
                        <td className="border border-gray-400 px-6 py-3">
                          {item.studentId}
                        </td>
                        <td className="border border-gray-400 px-6 py-3">
                          {item.confirmStatus}
                        </td>
                        <td className="border border-gray-400 px-6 py-3">
                          {item.timeAdd}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4 ">
            <HiUsers />{" "}
            <span className="bg-[#FED141] px-3 py-1 rounded-lg">
              {bookingData
                ? `${bookingData.attendeesCount} - ${bookingData.maxAttendees}`
                : "N/A"}
            </span>{" "}
          </div>
          {bookingData && (
            <div className="flex gap-3">
              <button className="bg-[#E2E2E2] text-white px-4 py-1 rounded-lg cursor-pointer hover:bg-gray-400">
                Edit
              </button>
              <button className="bg-[#C53739] text-white px-4 py-1 rounded-lg cursor-pointer hover:bg-[#8A2A2B]">
                Cancel
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyBooking;
