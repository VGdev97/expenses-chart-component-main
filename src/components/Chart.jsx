import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { balance } from "../constants/data";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const Chart = () => {
  const labels = balance.map((item) => item.day);
  const data = balance.map((item) => item.amount);

  const chartData = {
    labels: labels,
    datasets: [
      {
        label: "Balance",
        backgroundColor: "#ec755d",
        // borderColor: "rgba(0,0,0,1)",
        // borderWidth: 2,
        data: data,
      },
    ],
  };

  return (
    <div>
      <Bar data={chartData} />
    </div>
  );
};

export default Chart;
