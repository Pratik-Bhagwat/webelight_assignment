import { useEffect, useState } from "react";

function formatDataForChartjs(data, option) {
  const labels = data.map((item) => new Date(item[0] * 1000).toDateString());
  let additionsOrDeletionsData;
  if (option === "Additions") {
    additionsOrDeletionsData = data.map((item) => item[1]);
  } else if (option === "Deletions") {
    additionsOrDeletionsData = data.map((item) => item[2]);
  }

  return {
    labels: labels,
    datasets: [
      {
        label: option,
        data: additionsOrDeletionsData,
        fill: false,
        borderColor: option === "Additions" ? "green" : "red",
        backgroundColor:
          option === "Additions" ? "rgba(0,255,0,0.5)" : "rgba(255,0,0,0.5)",
      },
    ],
  };
}

export function useGetTotalAdditonOrDeletionData(author, repo, option) {
  const [totalAdditionsOrDeletionsData, setTotalAdditionsOrDeletionsData] =
    useState(null);
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
          `https://api.github.com/repos/${author}/${repo}/stats/code_frequency`,
          {
            method: "GET",
            headers: myHeader,
          }
        );
        const data = await res.json();
        console.log(data);
        setTotalAdditionsOrDeletionsData(formatDataForChartjs(data, option));
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [author, repo]);

  return { totalAdditionsOrDeletionsData, isLoading };
}
