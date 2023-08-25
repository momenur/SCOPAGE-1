import { useEffect, useState } from "react";
import Container from "../components/Container/Container";
import { ScrollMenu } from "react-horizontal-scrolling-menu";
import 'react-horizontal-scrolling-menu/dist/styles.css';
const Main = () => {
    const [scoPageData, setScoPageData] = useState([])
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setScoPageData(data))
    }, [])
    const incomplete = scoPageData.filter(data => data.category === "incomplete")
    const toDo = scoPageData.filter(data => data.category === "todo")
    const doing = scoPageData.filter(data => data.category === "doing")
    const underReview = scoPageData.filter(data => data.category === "underReview")
    const completed = scoPageData.filter(data => data.category === "completed")

    return (
        <div>
            <ScrollMenu
                options={{
                    ratio: 0.9,
                    rootMargin: "5px",
                    threshold: [0.01, 0.05, 0.5, 0.75, 0.95, 1]
                }}
            >
                <div className="flex w-auto max-h-screen gap-4 px-10">
                    <Container color="bg-red-700" heading="incomplete" data={incomplete}></Container>
                    <Container color="bg-[#11c7d1]" heading="to do" data={toDo}></Container>
                    <Container color="bg-yellow-300" heading="doing" data={doing}></Container>
                    <Container color="bg-[#b7fab4]" heading="under review" data={underReview}></Container>
                    <Container color="bg-[#1beb10]" heading="completed" data={completed}></Container>
                </div>
            </ScrollMenu>
        </div>

    );
};

export default Main;