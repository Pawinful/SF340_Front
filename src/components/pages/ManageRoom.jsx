import React from "react";

const TABLE_ROWS = [
  {
    id: 1,
    roomTH: "room 1",
    roomEN: "room 1",
    type: "Large",
    akarn: "TU1",
    soon: "rangsit",
    status_: "ปกติ",
  },
  {
    id: 2,
    roomTH: "room 1",
    roomEN: "room 1",
    type: "Large",
    akarn: "TU1",
    soon: "rangsit",
    status_: "ปกติ",
  },
  {
    id: 3,
    roomTH: "room 1",
    roomEN: "room 1",
    type: "Large",
    akarn: "TU1",
    soon: "rangsit",
    status_: "ปิดใช้งาน",
  },
  {
    id: 4,
    roomTH: "room 1",
    roomEN: "room 1",
    type: "Large",
    akarn: "TU1",
    soon: "rangsit",
    status_: "ปิดใช้ถาวร",
  },
  {
    id: 5,
    roomTH: "room 1",
    roomEN: "room 1",
    type: "Large",
    akarn: "TU1",
    soon: "rangsit",
    status_: "ปิดใช้ถาวร",
  },
  {
    id: 6,
    roomTH: "room 1",
    roomEN: "room 1",
    type: "Large",
    akarn: "TU1",
    soon: "rangsit",
    status_: "ปิดใช้ถาวร",
  },
  {
    id: 7,
    roomTH: "room 1",
    roomEN: "room 1",
    type: "Large",
    akarn: "TU1",
    soon: "rangsit",
    status_: "ปิดใช้ถาวร",
  },
  
];

const ManageRoom = () => {
  return (
    <>
    <div className="bg-[#EBEDF1] h-[92vh] flex justify-center items-center">
      <div className="p-10 bg-white w-[94%] h-[80vh] shadow-md overflow-hidden">
        <div className="flex justify-between items-center mb-6">
          <div className="flex flex-col">
            <h1 className="text-[#8A2A2B] text-xl font-bold mb-2">จัดการห้องประชุม</h1>
            <h2 className="text-[#8A2A2B] text-l font-bold mb-10">11:00 วันเสาร์, 2 พฤศจิกายน 2567</h2>
          </div>
          <div className="flex flex-col justify-end">
            <input type="text" placeholder="ค้นหา..." className="flex justify-between border px-4 py-1 mb-3" />
            <div className="flex justify-end">
              <button className="w-35 h-7 bg-[#D9D9D9] text-black rounded-md text-l cursor-pointer">+ เพิ่มห้องประชุม</button>
            </div>
          </div>
        </div>
        <div className='flex-1 overflow-y-auto max-h-[55vh] [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden'>
          <table className="w-full table-fixed">
            <thead>
              <tr className="border-b">
                <th className="w-[10%] text-center p-4">ลำดับ</th>
                <th className="w-[15%] text-center p-4">หมายเลขห้อง TH</th>
                <th className="w-[15%] text-center p-4">หมายเลขห้อง EN</th>
                <th className="w-[10%] text-center p-4">ประเภทห้อง</th>
                <th className="w-[10%] text-center p-4">อาคาร</th>
                <th className="w-[10%] text-center p-4">ศูนย์</th>
                <th className="w-[10%] text-center p-4">สถานะห้อง</th>
                <th className="w-[20%] text-center p-4">จัดการ</th>
              </tr>
            </thead>
            <tbody>
              {TABLE_ROWS.map(({ id, roomTH, roomEN, type, akarn, soon, status_ }, index) => (
                <tr key={index} className="border-b border-gray-400">
                  <td className="text-center px-4 py-5">{id}</td>
                  <td className="text-center px-4 py-5">{roomTH}</td>
                  <td className="text-center px-4 py-5">{roomEN}</td>
                  <td className="text-center px-4 py-5">{type}</td>
                  <td className="text-center px-4 py-5">{akarn}</td>
                  <td className="text-center px-4 py-5">{soon}</td>
                  <td className="px-4 py-5 flex justify-center">
                    <div className="w-20 h-9 bg-[#3B65FB] text-white rounded-md flex items-center justify-center text-sm">
                      {status_}
                    </div>
                  </td>
                  <td className="text-center px-4 py-5">
                    <button className="w-20 h-9 bg-[#45DB54] text-white rounded-md text-sm cursor-pointer mr-3">แก้ไข</button>
                    <button className="w-20 h-9 bg-[#FC6A6C] text-white rounded-md text-sm cursor-pointer">ลบ</button>
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

export default ManageRoom;