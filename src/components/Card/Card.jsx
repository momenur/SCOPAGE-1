import { FaBuffer, FaRegCalendarAlt, FaWeixin, FaCalendarAlt } from 'react-icons/fa';
import { RiAttachment2 } from "react-icons/ri";
const Card = ({data}) => {
    return (
        <div className="flex flex-col gap-4 p-4 bg-white border-2 border-red-200">
            <div className="flex justify-between">
                <div className="flex items-center gap-4 font-semibold">
                    <img className="w-[35px] h-[35px] rounded-full" src="https://i.ibb.co/vzt2nCd/Momen.jpg" alt="" />
                    <p>Client Name</p>
                </div>
                <div className="flex items-center gap-4 font-semibold">
                    <img className="w-[35px] h-[35px] rounded-full" src="https://i.ibb.co/vzt2nCd/Momen.jpg" alt="" />
                    <p>{data.user}</p>
                </div>
            </div>
            <div className='flex justify-between'>
                <div className='flex items-center gap-2'>
                    <span><FaBuffer /></span>
                    <p>Lorem ipsum dolor sit amet con...</p>
                </div>
                <div className='flex items-center gap-2'>
                    <span><FaRegCalendarAlt /></span>
                    <p>1/2</p>
                </div>
            </div>
            <div className='flex items-center justify-between'>
                <div className='flex items-center gap-4'>
                    <img className="w-[35px] h-[35px] rounded-full" src="https://i.ibb.co/vzt2nCd/Momen.jpg" alt="" />
                    <img className="w-[35px] h-[35px] rounded-full" src="https://i.ibb.co/vzt2nCd/Momen.jpg" alt="" />
                    <div className='w-[35px] h-[35px] bg-gray-600 rounded-full flex justify-center items-center'>
                        <p className='text-white'>12+</p>
                    </div>
                </div>
                <div className='flex gap-2'>
                    <div className='flex items-center gap-1'>
                        <span className='text-xl'><FaWeixin /></span>
                        <p>15</p>
                    </div>
                    <div className='flex items-center gap-1'>
                        <span className='text-xl'><RiAttachment2 /></span>
                        <p>25</p>
                    </div>
                    <div className='flex items-center gap-1'>
                        <span className='text-lg'><FaCalendarAlt /></span>
                        <p>30-12-2022</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;