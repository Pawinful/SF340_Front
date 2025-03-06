import React, { useEffect, useState } from 'react'
import Layout from '../shared/Layout'
import axios from 'axios';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';

// const TABLE_ROWS = await axios.get("http://localhost:3000/api/booking/getPendingBooking")

const Approve = () => {
  const [tables, setTable] = useState(null);
  const admin = localStorage.getItem("admin");
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:3000/api/booking/getPendingBooking").then((response) => {
      console.log(response.data.data);
      setTable(response.data);
    });
  }, []);

  const handleApprove = async (_id) => {
    const approve = {
        "_id": _id,
        "approver": admin.displayname_en,
        "bookingStatus": "APPROVED"
    }

    await axios.put("http://localhost:3000/api/booking/approveBooking", approve).then((res) => {console.log(res.data)});
    window.location.reload();
}

  return (
    <>
      <div className='bg-[#EBEDF1] h-[92vh] flex justify-center items-center'>
        <div className='p-10 bg-white w-[94%] h-[80vh] shadow-md overflow-hidden'>

          <div className='flex justify-between items-center mb-6'>
            <h1 className='text-[#8A2A2B] text-xl font-bold'>อนุมัติการจองห้องประชุม</h1>
            <input type="text" placeholder="ค้นหา..." className="border px-4 py-1 " />
          </div>
          <div className='flex-1 overflow-y-auto max-h-[65vh] [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden'>
            <table className='w-full table-fixed'>
              <thead>
                <tr className="border-b ">
                  <th className=" text-center p-4">ห้องประชุม</th>
                  <th className=" text-center p-4">วันที่</th>
                  <th className=" text-center p-4">เวลา</th>
                  <th className=" text-center p-4">เรื่อง</th>
                  <th className=" text-center p-4">สถานะ</th>
                  <th className=" text-center p-4">จัดการ</th>
                </tr>
              </thead>
              <tbody>
                {tables?.data.map((item, index) => { return (
                  <tr key={index} className='border-b border-gray-400'>
                    <td className="text-center px-4 py-5">{item.roomNameEN}</td>
                    <td className="text-center px-4 py-5">{moment(item.bookingStartTime).format("YYYY-MM-DD")}</td>
                    <td className="text-center px-4 py-5">{moment(item.bookingStartTime).format("HH:mm") + " - " + moment(item.bookingEndTime).format("HH:mm")}</td>
                    <td className="text-center px-4 py-5">{item.meetingName}</td>
                    <td className="px-4 py-5 flex justify-center">
                      <div className='w-20 h-9 bg-[#FED141] text-gray-800 rounded-md flex items-center justify-center text-sm '>
                        {item.bookingStatus}
                      </div>
                    </td>
                    <td className='text-center px-4 py-5'>
                      <button className='w-20 h-9 bg-[#3B65FB] text-white rounded-md text-sm cursor-pointer' onClick={() => handleApprove(item._id)} >Approve</button>
                    </td>
                  </tr>
                )})}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}

export default Approve;
