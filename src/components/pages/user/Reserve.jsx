import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Reserve = () => {
  const nevigate = useNavigate();

  const handleDoneBooking = (e) => {
    nevigate("/mybooking");
  };

  const [formData, setFormData] = useState({
    meetingName: "",
    meetingDescription: "",
    customerUsername: "",
    customerDepartment: "",
    customerEmail: "",
    bookingStartTime: "",
    bookingEndTime: "",
    roomImage: "",
    roomNameEN: "",
    roomNameTH: "",
  });

  useEffect(() => {
    const selectedRoom = JSON.parse(localStorage.getItem("selectedRoom"));
    if (selectedRoom?.roomImage) {
      setFormData((prev) => ({
        ...prev,
        roomImage: selectedRoom.roomImage,
        roomNameEN: selectedRoom.roomNameEN,
        roomNameTH: selectedRoom.roomNameTH,
      }));
    }
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const startDate = new Date(formData.bookingStartTime);
    const endDate = new Date(formData.bookingEndTime);

    const payload = {
      meetingName: formData.meetingName,
      meetingDescription: formData.meetingDescription,
      customerUsername: formData.customerUsername,
      customerDepartment: formData.customerDepartment,
      customerEmail: formData.customerEmail,
      bookingStartTime: startDate.toISOString(),
      bookingEndTime: endDate.toISOString(),
      roomNameEN: formData.roomNameEN,
      roomNameTH: formData.roomNameTH,
      requireApprove: true,
    };

    try {
      const response = await fetch("http://localhost:3000/api/booking/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        alert("Booking successful!");
      } else {
        alert("Failed to book the room.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Error connecting to server.");
    }
  };

  return (
    <div className="bg-[#EBEDF1] p-7 flex justify-center min-h-screen">
      <div className="max-w-4xl w-full p-8 rounded-xl shadow-md bg-white">
        <h2 className="text-2xl font-bold text-[#A23234] text-center">
          Booking {formData.roomNameEN}
        </h2>

        <div className="my-6 flex justify-center">
          {formData.roomImage ? (
            <img
              src={formData.roomImage}
              alt="Room"
              className="w-75 rounded-lg"
            />
          ) : (
            <p className="text-gray-500">ไม่มีภาพห้อง</p>
          )}
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-2">ชื่อการประชุม</label>
            <input
              type="text"
              name="meetingName"
              value={formData.meetingName}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#A23234]"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">
              รายละเอียดการประชุม
            </label>
            <textarea
              name="meetingDescription"
              value={formData.meetingDescription}
              onChange={handleChange}
              rows="3"
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#A23234]"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">ชื่อผู้จอง</label>
            <input
              type="text"
              name="customerUsername"
              value={formData.customerUsername}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#A23234]"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">สังกัด</label>
            <input
              type="text"
              name="customerDepartment"
              value={formData.customerDepartment}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#A23234]"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Email</label>
            <input
              type="email"
              name="customerEmail"
              value={formData.customerEmail}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#A23234]"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">
              วันที่เริ่มต้นการประชุม
            </label>
            <input
              type="datetime-local"
              name="bookingStartTime"
              value={formData.bookingStartTime}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#A23234]"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">
              วันที่สิ้นสุดการประชุม
            </label>
            <input
              type="datetime-local"
              name="bookingEndTime"
              value={formData.bookingEndTime}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#A23234]"
            />
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="w-30 mt-6 bg-[#C53739] text-white py-2 rounded-md hover:bg-[#8A2A2B]"
              onClick={handleDoneBooking}
            >
              Booking
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Reserve;
