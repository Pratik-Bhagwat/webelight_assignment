import { useEffect, useState } from "react";

export function useGetMostStaredRepos(page, time, timeFrames) {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    if (!time) return;

    const fetchMostStaredRepos = async () => {
      const days = timeFrames[time];
      const since = getSinceDate(days);

      try {
        const data = await getReposData(since, page);
        setRepos(data.items);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMostStaredRepos();
  }, [time, page, timeFrames]);

  return { repos };
}

function getSinceDate(days) {
  const date = new Date();
  date.setDate(date.getDate() - days);
  return date.toISOString().split("T")[0];
}

async function getReposData(since, page) {
  const response = await fetch(
    `https://api.github.com/search/repositories?q=created:>${since}&sort=stars&order=desc&page=${page}`
  );
  return await response.json();
}
