import { useEffect, useState } from "react";
import Repo from "./Repo";
import Select from "./Select";

const timeFrames = {
  "1 Week": 7,
  "2 Week": 14,
  "1 Month": 30,
};

function GithubRepos() {
  const [repos, setRepos] = useState([]);
  const [time, setTime] = useState("");
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function fetchMostStaredRepos() {
      if (!time) return;
      const days = timeFrames[time];
      const date = new Date();
      date.setDate(date.getDate() - days);
      const since = date.toISOString().split("T")[0];

      try {
        const res = await fetch(
          `https://api.github.com/search/repositories?q=created:>${since}&sort=stars&order=desc&page=${page}`
        );
        const data = await res.json();
        setRepos(data.items);
      } catch (error) {
        console.error(error);
      }
    }
    fetchMostStaredRepos();
  }, [time, page]);

  return (
    <div className="container mx-auto max-w-[1280px]">
      <div className="space-y-4">
        <h1 className="text-3xl text-center">
          Most Stared Repositories of last {time}.
        </h1>
        <Select timeFrames={timeFrames} time={time} setTime={setTime} />
        <div className="flex flex-col items-center justify-center space-y-4">
          {!time && <p>Please select a time frame to load the repositories</p>}
          {repos?.length > 0 &&
            repos.map((repo) => <Repo key={repo.id} repo={repo} />)}
        </div>
        {repos.length > 1 && (
          <div className="flex items-center justify-between">
            <button
              disabled={page - 1 === 0}
              onClick={() => {
                if (page > 1) {
                  setPage(page - 1);
                }
              }}
              className="w-20 p-1 border-2 rounded disabled:cursor-not-allowed h-14"
            >
              prev
            </button>
            <button
              onClick={() => {
                setPage(page + 1);
              }}
              className="w-20 p-1 border-2 rounded h-14"
            >
              next
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default GithubRepos;
