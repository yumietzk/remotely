import { CiBookmark } from "react-icons/ci";

// className={`bg-${bgColor}` "rounded-2xl p-3"}
function Job({ job, bgColor }) {
  console.log(bgColor);
  return (
    <div className="border border-white-secondary p-1 rounded-2xl bg-background-white">
      <div className={`${bgColor} rounded-2xl p-3`}>
        <div className="flex justify-between items-center mb-14">
          <p className="bg-background-white px-2.5 py-2 rounded-3xl text-sm font-medium">
            Aug 16, 2023
          </p>
          <span>
            <CiBookmark className="bg-background-white w-9 h-9 p-2 rounded-full" />
          </span>
        </div>

        <div>
          <p className="text-sm font-medium">{job.company_name}</p>
          <div className="flex justify-between items-center">
            <p className="text-lg font-semibold mr-1.5">{job.title}</p>
            <img
              className="w-11 h-11 rounded-full"
              src={job.company_logo}
              alt="Company log"
            />
          </div>
        </div>
      </div>

      <div className="flex justify-between p-3">
        <div>
          <span>$100/hr</span>
          <span>Toronto, ON</span>
        </div>
        <button>Details</button>
      </div>
    </div>
  );
}

export default Job;
