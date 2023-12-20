import { HiOutlineDotsHorizontal } from "react-icons/hi";
import ApplicationCard from "./ApplicationCard";
import Button from "../../components/elements/Button";
import { data } from "../../data/testTrackingJobs";

function getFilteredData(status) {
  return data.filter((item) => item.status === status);
}

function TrackerTable({ status }) {
  const filteredData = getFilteredData(status);
  console.log(filteredData);

  return (
    <div className="py-2.5">
      <div className="mb-10 flex items-center">
        <h3 className="font-medium mr-2">{status}</h3>
        <p className="bg-gray-200 w-7 h-7 rounded-full text-white flex items-center justify-center">
          5
        </p>
        <Button classes="ml-auto rounded-full border-none focus:ring-offset-green-100">
          <HiOutlineDotsHorizontal className="h-6 w-6" />
        </Button>
      </div>

      <div className="flex flex-col space-y-6">
        {filteredData.map((item) => (
          <ApplicationCard key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
}

export default TrackerTable;
