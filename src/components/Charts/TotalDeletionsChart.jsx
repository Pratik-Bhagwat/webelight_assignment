import { Line } from "react-chartjs-2";
import { Chart as ChartJs } from "chart.js/auto";
import "chartjs-adapter-moment";
import { useGetGithubData } from "../../hooks/useGetGithubData";

function TotalDeletionsChart({ owner, repo, option }) {
  const { githubData, isLoading } = useGetGithubData(owner, repo, option);

  const options = {
    title: {
      display: true,
      text: `${option} Activity`,
    },
    scales: {
      x: {
        type: "time",
        time: {
          unit: "week",
        },
      },
      y: {
        ticks: {
          beginAtZero: true,
        },
      },
    },
  };

  return (
    <>
      {isLoading && <p className="text-lg text-center">Loading....</p>}
      {githubData && <Line data={githubData} options={options} />}
    </>
  );
}
export default TotalDeletionsChart;
