import React from "react";
import { FaHome, FaMapMarkerAlt } from "react-icons/fa";
import { HiUsers } from "react-icons/hi2";

const data = [
  {
    studentId: "6510742262",
    confirmStatus: "Confirm",
    timeAdd: "0000-00-00 00:00:00",
  },
];

const MyBooking = () => {
  return (
    <div className="bg-[#EBEDF1] p-7 min-h-screen">
      <div className="bg-white max-w-4xl min-h-90 mx-auto rounded-xl shadow-md p-8 mb-6 flex flex-col  gap-10 ">
        <div className="flex flex-col gap-10">
          <div>
            <div className="flex items-start gap-6 mb-5">
              <div className="bg-gray-200 p-6 rounded-lg">
                <FaHome className="text-grey-600 text-7xl" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold mb-2">Meeting Room 1</h2>
                <p className="text-gray-500 flex items-center gap-2">
                  <FaMapMarkerAlt /> Co-Learning Space, TSE Building Fl.1
                </p>
              </div>
            </div>

            <div className="flex justify-center items-center gap-20 ">
              <div>
                <div className="font-semibold mb-3">Start Date</div>
                <div className="bg-[#CECECE] px-4 py-1 rounded-md font-medium">
                  5 ต.ค. 2567 10:00:00
                </div>
              </div>
              <div>
                <div className="font-semibold mb-3">End Date</div>
                <div className="bg-[#8A2A2B] text-white px-4 py-1 rounded-md font-medium">
                  5 ต.ค. 2567 11:00:00
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
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
                  {data.map((item, index) => (
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
          </div>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4 ">
            <HiUsers />{" "}
            <span className="bg-[#FED141] px-3 py-1 rounded-lg">4 - 6</span>{" "}
          </div>
          <div className="flex gap-3">
            <button className="bg-[#E2E2E2] text-white px-4 py-1 rounded-lg cursor-pointer hover:bg-gray-400">
              Edit
            </button>
            <button className="bg-[#C53739] text-white px-4 py-1 rounded-lg cursor-pointer hover:bg-[#8A2A2B]">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyBooking;
