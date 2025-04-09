import React, { useEffect, useState } from 'react';
import Layout from '../shared/Layout';
import axios from 'axios';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';

const ApproveBooking = () => {
    const [table, setTable] = useState(null);
    const selectedRoomId = localStorage.getItem("selectedRoom").toString();
    const admin = localStorage.getItem("admin");
    const navigate = useNavigate();

    useEffect(() => {
        axios.post("http://localhost:3000/api/booking/getBooking", { id: selectedRoomId }).then((response) => {
          setTable(response.data);
        });
    }, []);

    const handleApprove = async () => {
        const approve = {
            "_id": table?.data._id,
            "approver": admin.displayname_en,
            "bookingStatus": "APPROVED"
        }

        await axios.put("http://localhost:3000/api/booking/approveBooking", approve).then((res) => {console.log(res.data)});
        localStorage.removeItem("selectedRoom");
        navigate("/admin/bookingInfo")
    }

    const handleDisApprove = async () => {
        const approve = {
            "_id": table?.data._id,
            "approver": admin.displayname_en,
            "bookingStatus": "NOT_APPROVED"
        }

        await axios.put("http://localhost:3000/api/booking/approveBooking", approve).then((res) => {console.log(res.data)});
        localStorage.removeItem("selectedRoom");
        navigate("/admin/bookingInfo")
    }
    
    return (
        <div className='bg-[#EBEDF1] min-h-[92vh] flex justify-center items-center py-12'>
            <div className='p-10 bg-white w-[94%] min-h-[80vh] shadow-md'>
                <h1 className='text-[#8A2A2B] text-xl font-bold mb-5'>อนุมัติการจอง</h1>

                {/* content */}
                <div className="flex flex-col ">
                        <div className="p-3 ">
                            <div className="flex flex-col gap-3">
                                <div className="font-bold">ห้องประชุม</div>
                                <div className="bg-gray-100 border border-gray-300 rounded-md p-3">{table?.data.roomNameEN}</div>
                            </div>

                            <div className="flex flex-col gap-3 mt-4">
                                <div className="font-bold">ชื่อการประชุม</div>
                                <div className="bg-gray-100 border border-gray-300 rounded-md p-3">{table?.data.meetingName}</div>
                            </div>

                            <div className="flex flex-col gap-3 mt-4">
                                <div className="font-bold">รายละเอียดการประชุม</div>
                                <div className="bg-gray-100 border border-gray-300 rounded-md p-3">{table?.data.meetingDescription}</div>
                            </div>

                            <div className="flex flex-col gap-3 mt-4">
                                <div className="font-bold">สังกัด</div>
                                <div className="bg-gray-100 border border-gray-300 rounded-md p-3">{table?.data.customerDepartment}</div>
                            </div>

                            <div className="flex flex-col gap-3 mt-4">
                                <div className="font-bold">Email</div>
                                <div className="bg-gray-100 border border-gray-300 rounded-md p-3">{table?.data.customerEmail}</div>
                            </div>

                            <div className="flex flex-col gap-3 mt-4">
                                <div className="font-bold">วันที่</div>
                                <div className="bg-gray-100 border border-gray-300 rounded-md p-3">{moment(table?.data.bookingStartTime).format("YYYY-MM-DD")}</div>
                            </div>

                            <div className="flex gap-5 mt-4">
                                <div className="flex-1">
                                    <div className="font-bold mb-3">เวลาเริ่มต้น</div>
                                    <div className="bg-gray-100 border border-gray-300 rounded-md p-3">{moment(table?.data.bookingStartTime).format("HH:mm")}</div>
                                </div>
                                <div className="flex-1">
                                    <div className="font-bold mb-3">เวลาสิ้นสุด</div>
                                    <div className="bg-gray-100 border border-gray-300 rounded-md p-3">{moment(table?.data.bookingEndTime).format("HH:mm")}</div>
                                </div>
                            </div>
                        </div>

                    {/* Button */}
                    <div className="flex justify-end gap-4 mt-8">
                        <button className="py-1.5 w-28 font-medium bg-red-700 hover:bg-red-800 text-white rounded-md cursor-pointer" onClick={() => handleDisApprove()}>ไม่อนุมัติ</button>
                        <button className="py-1.5 w-28 font-medium bg-green-700 hover:bg-green-800 text-white rounded-md cursor-pointer" onClick={() => handleApprove()}>อนุมัติ</button>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default ApproveBooking;