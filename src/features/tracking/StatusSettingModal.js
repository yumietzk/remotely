import { CiCircleRemove, CiTrash } from "react-icons/ci";
import Button from "../../components/elements/Button";
import { useTrackingJobs } from "../../hooks/useTrackingJobs";

const availableStatus = [
  "No Status",
  "Applied",
  "First Interview",
  "Second Interview",
  "Final Interview",
  "Offered",
];

function StatusSettingModal({ setShowModal, handleChange }) {
  // const { getTrackingJobs } = useTrackingJobs();

  return (
    <div className="w-[220px] absolute top-1 -right-32 z-10 bg-white border border-gray-50 rounded-xl shadow-md py-4 px-5">
      <div className="flex items-center justify-between mb-6">
        <p className="mr-9 font-medium">Move to</p>
        <Button
          classes="rounded-full focus:ring-offset-green-100"
          handleClick={() => setShowModal(false)}
        >
          <CiCircleRemove className="w-6 h-6" />
        </Button>
      </div>

      <div className="flex flex-col items-start space-y-3 text-sm">
        {availableStatus.map((status) => (
          <Button
            key={status}
            classes="bg-white px-3 py-1.5 rounded-full hover:bg-gray-50 focus:ring-offset-green-100"
            handleClick={() => handleChange(status)}
          >
            {status}
          </Button>
        ))}
      </div>

      <hr className="my-5 border-b-[0.9px] border-gray-100" />

      <Button classes="w-full text-sm flex justify-between items-center py-2 px-3 rounded-lg hover:bg-gray-50 focus:ring-offset-green-100">
        <CiTrash className="h-5 w-5" />
        Remove application
      </Button>
    </div>
  );
}

export default StatusSettingModal;
