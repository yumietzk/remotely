import { useState } from "react";
import { HiOutlineDotsHorizontal, HiOutlineLink } from "react-icons/hi";
import StatusSettingModal from "./StatusSettingModal";
import Button from "../../components/elements/Button";
import LinkButton from "../../components/elements/LinkButton";

function ApplicationCard({ data, updateJob, removeJob, showArchived }) {
  const [showModal, setShowModal] = useState(false);

  const { id, title, company_name, company_logo, link_url, status, archived } =
    data;

  function handleUpdate(status) {
    updateJob(id, status, archived);
    setShowModal(false);
  }

  function handleRemove() {
    removeJob(id);
    setShowModal(false);
  }

  return (
    <div className="relative">
      <div className="bg-white rounded-xl py-3 px-4 z-0">
        <div className="flex justify-between items-center mb-3">
          <img
            className="w-9 h-9 rounded-full"
            src={company_logo}
            alt="Company logo"
          />
          <Button classes="rounded-full" handleClick={() => setShowModal(true)}>
            <HiOutlineDotsHorizontal className="h-5 w-5" />
          </Button>
        </div>

        <div>
          {showArchived && (
            <span className="text-red text-sm mb-0.5">
              This job is archived.
            </span>
          )}

          <div className="flex justify-between items-center mb-1">
            <h4 className="mr-2">{title}</h4>

            {!showArchived && (
              <LinkButton
                classes="rounded-full active:ring-accent"
                url={link_url}
              >
                <HiOutlineLink className="h-4 w-4" />
              </LinkButton>
            )}
          </div>
          <p className="text-sm text-gray-200">{company_name}</p>
        </div>
      </div>

      {showModal && (
        <StatusSettingModal
          currentStatus={status}
          setShowModal={setShowModal}
          handleUpdate={handleUpdate}
          handleRemove={handleRemove}
        />
      )}
    </div>
  );
}

export default ApplicationCard;
