import React from 'react'
import { FaCloudUploadAlt } from "react-icons/fa";

const AddRoom = () => {
  return (
    <>
    <div className='bg-[#EBEDF1] h-[92vh] flex justify-center items-center '>
      <div className='p-10 bg-white w-[94%] h-[80vh] shadow-md'>
        
        <h1 className='text-[#8A2A2B] text-xl font-bold mb-10'>เพิ่มห้องประชุม</h1>
        {/* content */}
        <div className="flex gap-20">
          
          {/* Upload Image */}
          <div className="flex flex-col ">
            <div className="bg-[#D9D9D9] w-90 h-65 "></div>
            <button className="w-90 h-10 mt-7 text-white font-medium bg-[#3B65FB] flex items-center ">
              <FaCloudUploadAlt className="bg-[#4880FF] p-2  w-10 h-10" />
              <p className="flex-1 text-center">UPLOAD</p>
            </button>
          </div>

          {/* Form */}
          <div className="grid gap-x-10 gap-y-4 w-full">
            <div className="flex flex-col">
              <label className="font-bold pb-4">หมายเลขห้อง TH</label>
              <input className="p-2 border" type="text" />
            </div>

            <div className="flex flex-col">
              <label className="font-bold pb-4">หมายเลขห้อง EN</label>
              <input className="p-2 border" type="text" />
            </div>

            <div className="col-span-2 flex gap-x-10">
              <div className="w-1/4 bg">
                <label className="font-bold pb-4 block">ศูนย์</label>
                <select className="w-full p-2 border">
                  <option></option>
                </select>
              </div>
              <div className="flex-grow">
                <label className="font-bold pb-4 block">อาคาร</label>
                <input className="w-full p-2 border" type="text" />
              </div>
            </div>

            <div className="col-span-2 flex gap-x-10">
              <div className="w-1/4">
                <label className="font-bold pb-4 block">จำนวนที่นั่ง</label>
                <select className="w-full p-2 border">
                  <option></option>
                </select>
              </div>
              <div className="flex-grow">
                <label className="font-bold pb-4 block">ประเภทห้อง</label>
                <input className="w-full p-2 border" type="text" />
              </div>
            </div>

            <div className="col-span-2 flex gap-x-10">
              <div className="w-1/4">
                <label className="font-bold pb-4 block">สถานะห้อง</label>
                <select className="w-full p-2 border">
                  <option></option>
                </select>
              </div>
              <div className="flex-grow">
                <label className="font-bold pb-4 block">เหตุผล</label>
                <input className="w-full p-2 border" type="text" />
              </div>
            </div>
          </div>

        </div>

        {/* Button */}
        <div className="flex justify-end gap-4 mt-8">
          <button className="py-1.5 w-28 font-medium text-black bg-[#979797] rounded-md">CANCEL</button>
          <button className="py-1.5 w-28 font-medium text-black bg-[#979797] rounded-md">SAVE</button>
        </div>


      </div>
    </div>
    </>
  )
}

export default AddRoom