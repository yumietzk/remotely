import { HiOutlineDotsHorizontal, HiOutlineLink } from "react-icons/hi";
import { data } from "../../data/testTrackingJobs";
import Button from "../../components/elements/Button";
import LinkButton from "../../components/elements/LinkButton";
import { useState } from "react";
import StatusSettingModal from "./StatusSettingModal";

function ApplicationCard() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="relative">
      <div className="bg-white rounded-md py-5 px-6 z-0">
        <div className="flex justify-between items-center mb-3">
          <img
            className="w-9 h-9 rounded-full"
            src={data.company_logo}
            alt="Company logo"
          />
          <Button classes="rounded-full" handleClick={() => setShowModal(true)}>
            <HiOutlineDotsHorizontal className="h-5 w-5" />
          </Button>
        </div>

        <div>
          <div className="flex items-center mb-1">
            <h4 className="mr-2">{data.title}</h4>
            <LinkButton classes="rounded-full active:ring-accent" url="">
              <HiOutlineLink className="h-4 w-4" />
            </LinkButton>
          </div>
          <p className="text-sm text-gray-200">{data.company_name}</p>
        </div>
      </div>

      {showModal && <StatusSettingModal setShowModal={setShowModal} />}
    </div>
  );
}

export default ApplicationCard;
