
import Container from "../components/Container/Container";
// Import for Horizontal-Scrolling
import { ScrollMenu } from "react-horizontal-scrolling-menu";
import 'react-horizontal-scrolling-menu/dist/styles.css';
import useCards from "../hooks/useCards";
// Import RotatingLines for Loader-Spinner
import { RotatingLines } from "react-loader-spinner";

const Main = () => {
    // Load Cards Data from Custom Hooks
    const [cards, isLoading] = useCards()
    // filter Cards Data based on Category
    const incomplete = cards.filter(data => data.category === "incomplete")
    const toDo = cards.filter(data => data.category === "todo")
    const doing = cards.filter(data => data.category === "doing")
    const underReview = cards.filter(data => data.category === "underReview")
    const completed = cards.filter(data => data.category === "completed")
    // Added Spinner
    if (isLoading) {
        return <div className="flex items-center justify-center h-screen">
            <RotatingLines
                strokeColor="grey"
                strokeWidth="5"
                animationDuration="0.75"
                width="96"
                visible={true}
            />
        </div>
    }

    return (
        <div className="w-full">
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