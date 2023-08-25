import Card from "../Card/Card";
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
const Container = ({ data, heading, color }) => {
    return (
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
                        data.map(item => <Card key={item._id} data={item}></Card>)
                    }
                </div>
            </SimpleBar>
        </div>
    );
};

export default Container;