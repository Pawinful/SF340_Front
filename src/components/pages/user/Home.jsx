import React from 'react';
import { FaMapMarkerAlt, FaHome } from 'react-icons/fa';
import { RiStairsFill } from "react-icons/ri";
import { HiUsers } from "react-icons/hi2";

const rooms = [
    {
        id: 1,
        name: 'Meeting Room 1',
        location: 'Rangsit Campus',
        space: 'Faculty of Engineering, Library',
        floor: 'Fl.2',
        capacity: '4 - 6',
    },
    {
        id: 2,
        name: 'Meeting Room 2',
        location: 'Rangsit Campus',
        space: 'Faculty of Engineering, Library ',
        floor: 'Fl.2',
        capacity: '1 - 2',
    },
    {
        id: 3,
        name: 'Meeting Room 3',
        location: 'Rangsit Campus',
        space: 'Faculty of Engineering, Library',
        floor: 'Fl.2',
        capacity: '1 - 2',
    },
    {
        id: 3,
        name: 'Meeting Room 3',
        location: 'Rangsit Campus',
        space: 'Faculty of Engineering, Library',
        floor: 'Fl.2',
        capacity: '1 - 2',
    },
    {
        id: 3,
        name: 'Meeting Room 3',
        location: 'Rangsit Campus',
        space: 'Faculty of Engineering, Library',
        floor: 'Fl.2',
        capacity: '1 - 2',
    },
];

const RoomCard = ({ room }) => {
    return (
        <div className='bg-white shadow-md rounded-lg p-6 mb-6 flex flex-col gap-4'>
            <div className='flex items-center gap-6'>
                <div className='bg-gray-200 p-6 rounded-lg'>
                    <FaHome className='text-grey-600 text-5xl' />
                </div>
                <div>
                    <h2 className='text-lg font-semibold mb-2'>{room.name}</h2>
                    <p className='text-sm text-gray-500 flex items-center gap-2'>
                        <FaMapMarkerAlt /> {room.location}
                    </p>
                    <p className='text-sm text-gray-500 flex items-center gap-2'>
                        <FaHome /> {room.space}
                    </p>
                    <p className='text-sm text-gray-500 flex items-center gap-2'>
                        <RiStairsFill /> {room.floor}
                    </p>
                </div>
            </div>

            <div className='flex justify-between items-center'>
                <div className='flex items-center gap-2 '><HiUsers /> {room.capacity} </div>
                <button className='bg-[#C53739] text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-[#8A2A2B]'>จองเลย</button>
            </div>
        </div>
    )
}

const Home = () => {
    return (
        <>
            <div className='bg-[#EBEDF1]'>
                <div className='p-7 max-w-5xl mx-auto'>
                    {rooms.map((room) => (
                        <RoomCard key={room.id} room={room} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default Home;
