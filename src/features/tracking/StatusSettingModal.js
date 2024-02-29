import { CiTrash } from "react-icons/ci";
import Button from "../../components/elements/Button";
import Modal from "../../components/layout/Modal";

const availableStatus = [
  "No Status",
  "Applied",
  "First Interview",
  "Second Interview",
  "Final Interview",
  "Offered",
];

function StatusSettingModal({
  currentStatus,
  setShowModal,
  handleUpdate,
  handleRemove,
}) {
  return (
    <Modal title="Move to" setShowModal={setShowModal}>
      <div className="flex flex-col items-start space-y-3 text-xs lg:text-sm">
        {availableStatus.map((status) => (
          <Button
            key={status}
            classes="bg-white px-3 py-1.5 rounded-full disabled:text-gray-100 hover:bg-gray-50 disabled:hover:bg-transparent focus:ring-offset-green-100"
            handleClick={() => handleUpdate(status)}
            disabled={currentStatus === status}
          >
            {status}
          </Button>
        ))}
      </div>

      <hr className="my-5 border-b-[0.9px] border-gray-100" />

      <Button
        classes="w-full text-xs lg:text-sm flex justify-between items-center py-2 px-3 rounded-lg hover:bg-gray-50 focus:ring-offset-green-100"
        handleClick={handleRemove}
      >
        <CiTrash className="h-5 w-5" />
        Remove application
      </Button>
    </Modal>
  );
}

export default StatusSettingModal;
