import { HiOutlineDotsHorizontal } from "react-icons/hi";
import ApplicationCard from "./ApplicationCard";
import Button from "../../components/elements/Button";
import { data } from "../../data/testTrackingJobs";

// function getFilteredData(status) {
//   return data.filter((item) => item.status === status);
// }

function getCardBgColor(index) {
  const remainder = index % 4;

  switch (remainder) {
    case 0: {
      return "bg-[#e3dbfa]";
    }
    case 1: {
      return "bg-[#d4f6ed]";
    }
    case 2: {
      return "bg-[#ffe1cc]";
    }
    case 3: {
      return "bg-[#fbe2f4]";
    }
    default: {
      return "bg-[#e3dbfa]";
    }
  }
}

function TrackerTable({ status, jobs, index }) {
  // const filteredData = getFilteredData(status);

  return (
    <div className="h-full flex flex-col py-2.5">
      <div className="mb-3 flex items-center">
        <h3 className="font-medium mr-2">{status}</h3>
        <p className="bg-gray-200 w-7 h-7 rounded-full text-white flex items-center justify-center">
          5
        </p>
        <Button classes="ml-auto rounded-full border-none focus:ring-offset-green-100">
          <HiOutlineDotsHorizontal className="h-6 w-6" />
        </Button>
      </div>

      <div
        className={`flex-1 flex flex-col space-y-2 ${
          status === "No Status" ? "bg-gray-50" : getCardBgColor(index)
        } p-1.5 rounded-xl`}
      >
        {jobs.map((job) => (
          <ApplicationCard key={job.id} data={job} />
        ))}
      </div>
    </div>
  );
}

export default TrackerTable;
