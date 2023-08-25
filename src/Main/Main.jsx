
import { useEffect, useState } from "react";
import Container from "../components/Container/Container";

const Main = () => {
    const [scoPageData, setScoPageData] = useState([])
    useEffect( () => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setScoPageData(data))
    },[])
    const incomplete = scoPageData.filter(data => data.category === "incomplete")
    const toDo = scoPageData.filter(data => data.category === "todo")
    const doing = scoPageData.filter(data => data.category === "doing")

    return (
        <div className="flex max-h-screen bg-gray-600">
            <Container heading="incomplete" data={incomplete}></Container>
            <Container heading="to do"data={toDo}></Container>
            <Container heading="doing"data={doing}></Container>
        </div>
    );
};

export default Main;