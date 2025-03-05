import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { FaMapMarkerAlt, FaHome } from "react-icons/fa";
import { RiStairsFill } from "react-icons/ri";
import { HiUsers } from "react-icons/hi2";

const baseURL = "http://localhost:3000/api/rooms/getAllRoom";

const RoomCard = ({ room }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-6 flex flex-col gap-4">
      {/* <h1>{post.data.seat}</h1> */}
      <div className="flex items-center gap-6">
        <div className="bg-gray-200 p-6 rounded-lg">
          {/* <FaHome className='text-grey-600 text-5xl' /> */}
          <img src="" alt="" />
        </div>
        <div>
          <h2 className="text-lg font-semibold mb-2">{room.roomNameEN}</h2>
          <p className="text-sm text-gray-500 flex items-center gap-2">
            <FaMapMarkerAlt /> {room.branch}
          </p>
          <p className="text-sm text-gray-500 flex items-center gap-2">
            <FaHome /> {room.roomType}
          </p>
          <p className="text-sm text-gray-500 flex items-center gap-2">
            <RiStairsFill /> {room.building}
          </p>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2 ">
          <HiUsers /> {room.seat}
        </div>
        <button className="bg-[#C53739] text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-[#8A2A2B]">
          จองเลย
        </button>
      </div>
    </div>
  );
};

const Home = () => {
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
      console.log(response.data.data);
    });
  }, []);

  if (!post) return null;

  return (
    <>
      <div className="bg-[#EBEDF1] min-h-screen">
        <div className="p-6 max-w-4xl mx-auto">
          {post.data.map((room) => (
            <RoomCard key={room.id} room={room} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
