import { useState } from "react";
import Select from "../Select";
import { selectOptions } from "../../../constants";
import RepoInfo from "./RepoInfo";
import DisplayChart from "./DisplayChart";

function Repo({ repo }) {
  const [showChart, setShowChart] = useState(false);
  const [option, setOption] = useState("");

  return (
    <div className="w-full p-3 border-2 rounded shadow-md">
      <RepoInfo repo={repo} showChart={showChart} setShowChart={setShowChart} />
      {showChart && (
        <div className="flex flex-col space-y-3">
          <Select options={selectOptions} value={option} setValue={setOption} />
          <DisplayChart
            owner={repo.owner.login}
            repo={repo.name}
            option={option}
          />
        </div>
      )}
    </div>
  );
}
export default Repo;
