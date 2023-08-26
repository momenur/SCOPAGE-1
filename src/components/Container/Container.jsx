import { useState } from "react";
import Card from "../Card/Card";
// Import SimpleBar for vertical scroll
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import Modal from "../Modal/Modal";
// import Modal from "../Modal/Modal";
const Container = ({ data, heading, color }) => {
    const [modal, setModal] = useState(false);
    const handleModal = (id) => {
        setModal(!modal)
        console.log(id);
    }
    
    return (
        <div className="">
            <div className="w-[400px] bg-slate-300">
                <div className="flex gap-3 py-5 ms-2">
                    <div className={`w-[40px] rounded-s-full ${color}`}>
                    </div>
                    <div className="flex justify-between w-[80%]">
                        <p className="text-2xl capitalize">{heading}</p>
                        <div className="text-2xl capitalize bg-gray-200 h-[35px] w-[35px] rounded-lg flex justify-center items-center">
                            <p className="text-2xl capitalize">0</p>
                        </div>
                    </div>
                </div>

                <SimpleBar style={{ maxHeight: "85vh" }}>
                    <div className="flex flex-col gap-5 px-2 mt-4">
                        {
                            data.map(item => <Card key={item._id} data={item} handleModal={handleModal}></Card>)
                        }
                    </div>
                </SimpleBar>
            </div>
            <Modal modal={modal} setModal={setModal} ></Modal>
        </div>
    );
};

export default Container;