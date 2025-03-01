import React from "react";

const Reserve = () => {
    return (
        <div className='bg-[#EBEDF1] p-7 flex justify-center min-h-screen'>
            <div className="max-w-4xl w-full p-8 rounded-xl shadow-md bg-white">
                <h2 className="text-2xl font-bold text-[#A23234] text-center">Booking Meeting Room 1</h2>
                <div className="my-6 flex justify-center">
                    <img
                        src="https://images.pexels.com/photos/416320/pexels-photo-416320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        alt="Room"
                        className="w-75 rounded-lg"
                    />
                </div>

                <div className="space-y-4">
                    <div>
                        <label className="block text-gray-700 mb-2">ชื่อการประชุม</label>
                        <input type="text" className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#A23234]" />
                    </div>

                    <div>
                        <label className="block text-gray-700 mb-2">รายละเอียดการประชุม</label>
                        <textarea className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#A23234]" rows="3"></textarea>
                    </div>

                    <div>
                        <label className="block text-gray-700 mb-2">สังกัด</label>
                        <input type="text" className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#A23234]" />
                    </div>

                    <div>
                        <label className="block text-gray-700 mb-2">Email</label>
                        <input type="email" className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#A23234]" />
                    </div>

                    <div>
                        <label className="block text-gray-700 mb-2">วันที่</label>
                        <input type="date" className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#A23234]" />
                    </div>

                    <div className="flex gap-4">
                        <div className="flex-1">
                            <label className="block text-gray-700 mb-2">เวลาเริ่มต้น</label>
                            <input type="time" className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#A23234]" />
                        </div>

                        <div className="flex-1">
                            <label className="block text-gray-700 mb-2">เวลาสิ้นสุด</label>
                            <input type="time" className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#A23234]" />
                        </div>
                    </div>
                </div>
                <div className="flex justify-end">
                    <button className="w-30 mt-6 bg-[#C53739] text-white py-2 rounded-md hover:bg-[#8A2A2B]">Booking</button>
                </div>

            </div>
        </div>
    )
}

export default Reserve;