import { useEffect, useState } from "react";

const generateRandomColor = () => {
  const randomColorComponent = () => Math.floor(Math.random() * 256);
  return `rgba(${randomColorComponent()},${randomColorComponent()},${randomColorComponent()},`;
};

function formatDataForChartjs(data, option) {
  const labels = data[0]?.weeks.map((week) => week.c);

  const dataPoints = data?.map((item) => {
    const color = generateRandomColor();
    return {
      label: item.author.login,
      data: item?.weeks?.map((week) => week[option?.charAt(0).toLowerCase()]),
      backgroundColor: `${color}0.2)`,
      borderColor: `${color}1)`,
      borderWidth: 1,
      pointStyle: item.author.avatar_url,
    };
  });

  return { labels, datasets: dataPoints };
}

export function useGetContributorChangesData(author, repo, option) {
  const [totalContributorChangesData, setTotalContributorChangesData] =
    useState(null);
  const [isLoading, setIsLoading] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `https://api.github.com/repos/${author}/${repo}/stats/contributors`,
          {
            headers: {
              Authorization: `Bearer ${import.meta.env.VITE_GITHUB_AUTH_TOKEN}`,
            },
          }
        );
        const data = await response.json();
        setTotalContributorChangesData(formatDataForChartjs(data, option));
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [author, repo, option]);

  return { totalContributorChangesData, isLoading };
}
