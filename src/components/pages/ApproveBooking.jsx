import React from 'react';
import Layout from '../shared/Layout';

const data = [
    {
        room: "Meeting Room 1",
        topic: "ติวสอบกลางภาค",
        detail: "ติวสอบกลางภาควิชา CN340",
        from: "วิศวะซอฟต์แวร์",
        email: "user@gmail.com",
        date: "1 มีนาคม 2567",
        startTime: "10:00",
        endTime: "11:00"
    }
];

const ApproveBooking = () => {
    return (
        <div className='bg-[#EBEDF1] min-h-[92vh] flex justify-center items-center py-12'>
            <div className='p-10 bg-white w-[94%] min-h-[80vh] shadow-md'>
                <h1 className='text-[#8A2A2B] text-xl font-bold mb-5'>อนุมัติการจอง</h1>

                {/* content */}
                <div className="flex flex-col ">
                    {data.map((item, index) => (
                        <div key={index} className="p-3 ">
                            <div className="flex flex-col gap-3">
                                <div className="font-bold">ห้องประชุม</div>
                                <div className="bg-gray-100 border border-gray-300 rounded-md p-3">{item.room}</div>
                            </div>

                            <div className="flex flex-col gap-3 mt-4">
                                <div className="font-bold">ชื่อการประชุม</div>
                                <div className="bg-gray-100 border border-gray-300 rounded-md p-3">{item.topic}</div>
                            </div>

                            <div className="flex flex-col gap-3 mt-4">
                                <div className="font-bold">รายละเอียดการประชุม</div>
                                <div className="bg-gray-100 border border-gray-300 rounded-md p-3">{item.detail}</div>
                            </div>

                            <div className="flex flex-col gap-3 mt-4">
                                <div className="font-bold">สังกัด</div>
                                <div className="bg-gray-100 border border-gray-300 rounded-md p-3">{item.from}</div>
                            </div>

                            <div className="flex flex-col gap-3 mt-4">
                                <div className="font-bold">Email</div>
                                <div className="bg-gray-100 border border-gray-300 rounded-md p-3">{item.email}</div>
                            </div>

                            <div className="flex flex-col gap-3 mt-4">
                                <div className="font-bold">วันที่</div>
                                <div className="bg-gray-100 border border-gray-300 rounded-md p-3">{item.date}</div>
                            </div>

                            <div className="flex gap-5 mt-4">
                                <div className="flex-1">
                                    <div className="font-bold mb-3">เวลาเริ่มต้น</div>
                                    <div className="bg-gray-100 border border-gray-300 rounded-md p-3">{item.startTime}</div>
                                </div>
                                <div className="flex-1">
                                    <div className="font-bold mb-3">เวลาสิ้นสุด</div>
                                    <div className="bg-gray-100 border border-gray-300 rounded-md p-3">{item.endTime}</div>
                                </div>
                            </div>
                        </div>
                    ))}

                    {/* Button */}
                    <div className="flex justify-end gap-4 mt-8">
                        <button className="py-1.5 w-28 font-medium bg-red-700 hover:bg-red-800 text-white rounded-md cursor-pointer">ไม่อนุมัติ</button>
                        <button className="py-1.5 w-28 font-medium bg-green-700 hover:bg-green-800 text-white rounded-md cursor-pointer">อนุมัติ</button>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default ApproveBooking;