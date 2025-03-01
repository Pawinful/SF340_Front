import React from "react";

const TABLE_ROWS = [
  {
    id: 1,
    room: "Meeting room 1",
    date: "2024-10-08",
    time: "13:00-17:00",
    topic: "Lorem ipsum dolor sit amet",
    status_: "อนุมัติ",
    manage: "แสดง",
  },
  {
    id: 2,
    room: "Meeting room 2",
    date: "2024-10-08",
    time: "13:00-17:00",
    topic: "Lorem ipsum dolor sit amet",
    status_: "ไม่อนุมัติ",
    manage: "แสดง",
  },
  {
    id: 3,
    room: "Meeting room 3",
    date: "2024-10-08",
    time: "13:00-17:00",
    topic: "Lorem ipsum dolor sit amet",
    status_: "ยกเลิก",
    manage: "แสดง",
  },
  {
    id: 4,
    room: "Meeting room 4",
    date: "2024-10-08",
    time: "13:00-17:00",
    topic: "Lorem ipsum dolor sit amet",
    status_: "รออนุมัติ",
    manage: "แสดง",
  },
  {
    id: 5,
    room: "Meeting room 5",
    date: "2024-10-08",
    time: "13:00-17:00",
    topic: "Lorem ipsum dolor sit amet",
    status_: "รออนุมัติ",
    manage: "แสดง",
  },
  {
    id: 6,
    room: "Meeting room 5",
    date: "2024-10-08",
    time: "13:00-17:00",
    topic: "Lorem ipsum dolor sit amet",
    status_: "รออนุมัติ",
    manage: "แสดง",
  },
  {
    id: 7,
    room: "Meeting room 5",
    date: "2024-10-08",
    time: "13:00-17:00",
    topic: "Lorem ipsum dolor sit amet",
    status_: "รออนุมัติ",
    manage: "แสดง",
  },
];

const statusColor = (status) => {
  switch (status) {
    case "อนุมัติ":
      return "#45DB54"; 
    case "ไม่อนุมัติ":
    case "ยกเลิก":
      return "#FC6A6C";
    case "รออนุมัติ":
    default:
      return "#FED141"; 
  }
};

const BookingInfo = () => {
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
                <th className="w-[10%] text-center p-4">ลำดับ</th>
                <th className="w-[20%] text-center p-4">ห้องประชุม</th>
                <th className="w-[15%] text-center p-4">วันที่</th>
                <th className="w-[10%] text-center p-4">เวลา</th>
                <th className="w-[25%] text-center p-4">เรื่อง</th>
                <th className="w-[10%] text-center p-4">สถานะ</th>
                <th className="w-[10%] text-center p-4">จัดการ</th>
              </tr>
            </thead>
            <tbody>
              {TABLE_ROWS.map(({ id, room, date, time, topic, status_, manage }, index) => (
                <tr key={index} className="border-b border-gray-400">
                  <td className="text-center px-4 py-5">{id}</td>
                  <td className="text-center px-4 py-5">{room}</td>
                  <td className="text-center px-4 py-5">{date}</td>
                  <td className="text-center px-4 py-5">{time}</td>
                  <td className="text-center px-4 py-5">{topic}</td>
                  <td className="px-4 py-5 flex justify-center">
                    <div
                      className="w-20 h-9 text-white rounded-md flex items-center justify-center text-sm font-bold"
                      style={{ backgroundColor: statusColor(status_) }}
                    >
                      {status_}
                    </div>
                  </td>
                  <td className="text-center px-4 py-5">
                    <button className="w-20 h-9 bg-[#3B65FB] text-white rounded-md text-sm cursor-pointer">{manage}</button>
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