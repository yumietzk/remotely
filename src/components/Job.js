import { CiBookmark } from "react-icons/ci";

function formatDate(orgDate) {
  const publisedDate = new Date(orgDate);
  const publisedDateArr = publisedDate.toString().split(" ");
  const month = publisedDateArr[1];
  const date = publisedDateArr[2];
  const year = publisedDateArr[3];

  return `${month} ${date}, ${year}`;
}

function formatJobType(type) {
  if (type.includes("_")) {
    return type
      .split("_")
      .map((item, i) =>
        i === 0 ? `${item[0].toUpperCase()}${item.slice(1)}` : item
      )
      .join(" ");
  } else {
    return `${type[0].toUpperCase()}${type.slice(1)}`;
  }
}

function Job({ job, bgColor }) {
  return (
    <div className="border border-white-secondary p-1 rounded-2xl bg-background-white">
      <div
        className={`${bgColor} rounded-2xl p-4 h-60 flex flex-col justify-between`}
      >
        <div className="mb-8 flex justify-between items-center">
          <p className="bg-background-white px-2.5 py-2 rounded-3xl text-sm font-medium">
            {formatDate(job.publication_date)}
          </p>
          <button>
            <CiBookmark className="bg-background-white w-9 h-9 p-2 rounded-full" />
          </button>
        </div>

        <div>
          <p className="text-sm font-medium">{job.company_name}</p>
          <div className="flex justify-between items-center">
            <p className="text-lg font-semibold mr-1.5">{job.title}</p>
            <img
              className="w-11 h-11 rounded-full"
              src={job.company_logo}
              alt="Company logo"
            />
          </div>
        </div>

        <div>
          <span className="border border-white-secondary px-2 py-1.5 rounded-3xl text-xs font-medium">
            {formatJobType(job.job_type)}
          </span>
        </div>
      </div>

      <div className="flex justify-between items-center px-4 py-5">
        <p className="text-lg font-semibold">{job.salary}</p>
        <div>
          {/* あとでreact router使う */}
          <a
            className="bg-background-secondary px-3.5 py-2 text-white-primary rounded-3xl text-sm"
            href={job.url}
            target="_blank"
            rel="noreferrer"
          >
            <button>Details</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Job;
