import { Line } from "react-chartjs-2";
import { Chart as ChartJs } from "chart.js/auto";
import "chartjs-adapter-moment";
import { useGetContributorChangesData } from "../../hooks/useGetContributorChangesData";

function TotalContributorsChangesChart({ owner, repo, option }) {
  const { totalContributorChangesData, isLoading } =
    useGetContributorChangesData(owner, repo, option);

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <>
      {isLoading && <p className="text-lg text-center">Loading....</p>}
      {totalContributorChangesData && (
        <Line data={totalContributorChangesData} options={options} />
      )}
    </>
  );
}
export default TotalContributorsChangesChart;
