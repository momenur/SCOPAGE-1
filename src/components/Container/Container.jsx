import Card from "../Card/Card";

const Container = ({data, heading}) => {
    return (
        <div className="w-1/4">
            <div className="flex gap-3 py-5 ms-2">
                <div className="bg-red-700 w-[40px] rounded-s-full">
                </div>
                <div className="flex justify-between w-[80%]">
                    <p className="text-2xl capitalize">{heading}</p>
                    <p className="text-2xl capitalize">0</p>
                </div>
            </div>
            {
                data.map(item => <Card key={item._id} data={item}></Card>)
            }
        </div>
    );
};

export default Container;