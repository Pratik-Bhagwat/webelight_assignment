import { useEffect, useState } from "react";

function formatDataForChartjs(data, option) {
  let labels;
  labels =
    option === "Commits"
      ? data?.map((item) => new Date(item.week * 1000).toDateString())
      : data?.map((item) => new Date(item[0] * 1000).toDateString());

  let dataPoints;
  switch (option) {
    case "Commits":
      dataPoints = data?.map((item) => item.total);
      break;
    case "Additions":
      dataPoints = data?.map((item) => item[1]);
      break;
    case "Deletions":
      dataPoints = data?.map((item) => item[2]);
      break;
    default:
      dataPoints = [];
  }

  const colors = {
    Additions: "green",
    Deletions: "red",
    Commits: "blue",
  };

  return {
    labels,
    datasets: [
      {
        label: option,
        data: dataPoints,
        fill: false,
        borderColor: colors[option],
        backgroundColor: `rgba(${colors[option]},0.5)`,
      },
    ],
  };
}

export function useGetGithubData(author, repo, option) {
  const [githubData, setGithubData] = useState(null);
  const [isLoading, setIsLoading] = useState(null);

  const endpoint = option === "Commits" ? "commit_activity" : "code_frequency";

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      try {
        const res = await fetch(
          `https://api.github.com/repos/${author}/${repo}/stats/${endpoint}`,
          {
            headers: {
              Authorization: `Bearer ${import.meta.env.VITE_GITHUB_AUTH_TOKEN}`,
            },
          }
        );
        const data = await res.json();
        setGithubData(formatDataForChartjs(data, option));
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [author, repo, option, endpoint]);

  return { githubData, isLoading };
}
