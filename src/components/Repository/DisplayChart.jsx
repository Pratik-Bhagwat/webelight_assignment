import TotalAdditionsChart from "../Charts/TotalAdditionsChart";
import TotalChangesChart from "../Charts/TotalChangesChart";
import TotalContributorsChangesChart from "../Charts/TotalContributorsChangesChart";
import TotalDeletionsChart from "../Charts/TotalDeletionsChart";

function DisplayChart({ option, repo, owner }) {
  let ChartComponent;
  switch (option) {
    case "Commits":
      ChartComponent = TotalChangesChart;
      break;
    case "Additions":
      ChartComponent = TotalAdditionsChart;
      break;
    case "Deletions":
      ChartComponent = TotalDeletionsChart;
      break;
    default:
      return null;
  }

  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <h2 className="text-3xl text-center">Total {option} Changes</h2>
        <ChartComponent owner={owner} repo={repo} option={option} />
      </div>
      <div className="space-y-3">
        <h2 className="text-3xl text-center">
          Total Contributors {option} Changes
        </h2>
        <TotalContributorsChangesChart
          owner={owner}
          repo={repo}
          option={option}
        />
      </div>
    </div>
  );
}

export default DisplayChart;
