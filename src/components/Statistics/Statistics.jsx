import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { useEffect } from 'react';


ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Statistics = () => {

    useEffect(() => {
        document.title = "Statistics - Gadgets Insights";
    }, []);

    const data = {
        labels: ["Dell XPS 13", "Dell XPS 13", "Dell XPS 13", "Dell XPS 13", "Dell XPS 13", "Dell XPS 13", "Dell XPS 13", "Dell XPS 13", "Dell XPS 13", "Dell XPS 13"],
        datasets: [
            {
                label: "Price",
                data: [80, 60, 90, 50, 70, 30, 80, 90, 85, 75],
                backgroundColor: "#9538E2",
                borderColor: "rgba(149, 56, 226, 1)",
                borderWidth: 1,
            },
            {
                label: "Total",
                data: [70, 50, 80, 45, 65, 25, 75, 85, 80, 70],
                backgroundColor: "rgba(149, 56, 226, 0.3)",
                borderColor: "rgba(149, 56, 226, 0.7)",
                borderWidth: 1,
            },
            {
                label: "Rating",
                data: [50, 45, 55, 40, 50, 20, 60, 70, 65, 55],
                backgroundColor: "rgba(255, 0, 0, 0.7)",
                borderColor: "rgba(255, 0, 0, 1)",
                borderWidth: 1,
            }
        ]
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: "bottom",
            },
            title: {
                display: true,
            },
        },
        scales: {
            y: {
                beginAtZero: true,
                max: 100
            }
        }
    };

    return (
        <div className="">
            <div className="flex justify-center items-center text-center bg-[#9538E2]">
                <div className="py-8">
                    <h1 className="text-3xl font-bold text-white">
                        Statistics
                    </h1>
                    <p className="text-white mt-4">
                        Explore the latest gadgets that will take your experience to the next level. From smart devices to<br /> the coolest accessories, we have it all!
                    </p>
                </div>
            </div>
            
            <h1 className="text-2xl font-bold ml-8 mt-8">Statistics</h1>
            <div className="p-8">
                <Bar data={data} options={options} />
            </div>
        </div>
    );
};

export default Statistics;
