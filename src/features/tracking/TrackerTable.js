import { HiOutlineDotsHorizontal } from "react-icons/hi";
import ApplicationCard from "./ApplicationCard";
import Button from "../../components/elements/Button";

function TrackerTable({ status }) {
  return (
    <div className="py-2.5 overflow-visible">
      <div className="mb-10 flex items-center">
        <h3 className="font-medium mr-2">{status}</h3>
        <p className="bg-gray-200 w-7 h-7 rounded-full text-white flex items-center justify-center">
          5
        </p>
        <Button classes="ml-auto rounded-full border-none focus:ring-offset-green-100">
          <HiOutlineDotsHorizontal className="h-6 w-6" />
        </Button>
      </div>

      <div className="flex flex-col space-y-6 overflow-visible">
        <ApplicationCard />
        <ApplicationCard />
      </div>
    </div>
  );
}

export default TrackerTable;
