import { useEffect, useState } from "react";

function formatDataForChartjs(data) {
  const labels = data.map((item) => new Date(item.week * 1000).toDateString());

  const dataPoints = data.map((item) => item.total);

  return {
    labels: labels,
    datasets: [
      {
        label: "Changes",
        data: dataPoints,
        fill: false,
        borderColor: "blue",
      },
    ],
  };
}

export function useGetTotalChangesData(author, repo) {
  const [totalChangesData, setTotalChangesData] = useState(null);
  const [isLoading, setIsLoading] = useState(null);

  const myHeader = new Headers();
  myHeader.append(
    "Authorization",
    `Bearer ${import.meta.env.VITE_GITHUB_AUTH_TOKEN}`
  );

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      try {
        const res = await fetch(
          `https://api.github.com/repos/${author}/${repo}/stats/commit_activity`,
          {
            method: "GET",
            headers: myHeader,
          }
        );
        const data = await res.json();
        console.log(data);
        setTotalChangesData(formatDataForChartjs(data));
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [author, repo]);

  return { totalChangesData, isLoading };
}
