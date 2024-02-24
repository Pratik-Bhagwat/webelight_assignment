function Repo({ repo }) {
  return (
    <div className="w-full p-3 border-2 rounded shadow-md sm:grid-cols-12 sm:grid sm:space-x-4">
      <div className="flex items-center justify-center w-full p-2 border-2 rounded shadow-sm sm:col-span-4">
        <img
          className="object-cover sm:size-52"
          src={repo.owner.avatar_url}
          alt={repo.owner.login}
        />
      </div>
      <div className="space-y-7 sm:col-span-8">
        {/* repo name */}
        <h3 className="text-2xl sm:text-3xl">{repo.name}</h3>
        {/* desscription */}
        <p className="text-base sm:text-xl">{repo.description}</p>
        <div className="flex items-center space-x-4">
          {/* number of stars */}
          <span className="w-32 p-1 text-base text-center border-2 rounded shadow-sm sm:text-xl">
            {repo.stargazers_count}
          </span>
          {/* number of issues */}
          <span className="w-32 p-1 text-base text-center border-2 rounded shadow-sm sm:text-xl">
            {repo.open_issues_count}
          </span>

          {/* last published {time interval} by owner name */}
          <span className="text-sm">{`last published ${repo.pushed_at} by ${repo.owner.login}`}</span>
        </div>
      </div>
    </div>
  );
}
export default Repo;
