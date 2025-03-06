import React, { useEffect, useState } from "react";
import axios from 'axios';
import moment from "moment";
import { useNavigate } from "react-router-dom";

const statusColor = (status) => {
  switch (status) {
    case "APPROVED":
      return "#45DB54"; 
    case "NOT_APPROVED":
    case "CANCELED":
      return "#FC6A6C";
    case "PENDING":
    default:
      return "#FED141"; 
  }
};

const BookingInfo = () => {
  const navigate = useNavigate();
  const handleManage = (item) => {
    localStorage.setItem("selectedRoom", String(item));
    navigate('/admin/approveBooking')
  }

  const [table, setTable] = useState(null);
  useEffect(() => {
    axios.get("http://localhost:3000/api/booking/getAllBooking").then((response) => {
      setTable(response.data);
    });
  }, []);

  return (
    <>
    <div className="bg-[#EBEDF1] h-[92vh] flex justify-center items-center">
      <div className="p-10 bg-white w-[94%] h-[80vh] shadow-md overflow-hidden">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-[#8A2A2B] text-xl font-bold">ข้อมูลการจองห้องประชุม</h1>
          <input type="text" placeholder="ค้นหา..." className="border px-4 py-1" />
        </div>
        <div className='flex-1 overflow-y-auto max-h-[65vh] [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden'>
          <table className="w-full table-fixed">
            <thead>
              <tr className="border-b">
                <th className=" text-center p-4">ห้องประชุม</th>
                <th className=" text-center p-4">วันที่</th>
                <th className=" text-center p-4">เวลา</th>
                <th className=" text-center p-4">เรื่อง</th>
                <th className=" text-center p-4">สถานะ</th>
                <th className=" text-center p-4">จัดการ</th>
              </tr>
            </thead>
            <tbody>
              {table?.data.map((item, index) => (
                <tr key={index} className="border-b border-gray-400">
                  <td className="text-center px-4 py-5">{item.roomNameEN}</td>
                  <td className="text-center px-4 py-5">{moment(item.bookingStartTime).format("YYYY-MM-DD")}</td>
                  <td className="text-center px-4 py-5">{moment(item.bookingStartTime).format("HH:MM") + " - " + moment(item.bookingEndTime).format("HH:MM")}</td>
                  <td className="text-center px-4 py-5">{item.meetingName}</td>
                  <td className="px-4 py-5 flex justify-center">
                    <div
                      className="w-30 h-9 text-white rounded-md flex items-center justify-center text-sm font-bold"
                      style={{ backgroundColor: statusColor(item.bookingStatus) }}
                    >
                      {item.bookingStatus}
                    </div>
                  </td>
                  <td className="text-center px-4 py-5">
                    <button className="w-20 h-9 bg-[#3B65FB] text-white rounded-md text-sm cursor-pointer" onClick={() => handleManage(item._id)}>Manage</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    </>
  )
}

export default BookingInfo;