import { useState } from "react";
import Select from "./Select";
import Repo from "./Repository/Repo";
import PaginationButtons from "./PaginationButtons";
import { timeFrames } from "../../constants";
import { useGetMostStaredRepos } from "../hooks/useGetMostStaredRepos";

function GithubRepos() {
  const [time, setTime] = useState("");
  const [page, setPage] = useState(1);

  const { repos } = useGetMostStaredRepos(page, time, timeFrames);

  const handlePrevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNextPage = () => {
    setPage(page + 1);
  };

  return (
    <div className="container mx-auto max-w-[1280px] border-2 p-5 shadow-xl">
      <div className="space-y-4">
        <h1 className="text-3xl text-center">
          Most Stared Repositories of last {time}.
        </h1>
        <Select options={timeFrames} value={time} setValue={setTime} />
        <div className="flex flex-col items-center justify-center space-y-4">
          {!time && <p>Please select a time frame to load the repositories</p>}
          {repos?.length > 0 &&
            repos.map((repo) => <Repo key={repo.id} repo={repo} />)}
        </div>
        {repos.length > 1 && (
          <PaginationButtons
            page={page}
            handlePrevPage={handlePrevPage}
            handleNextPage={handleNextPage}
          />
        )}
      </div>
    </div>
  );
}

export default GithubRepos;
