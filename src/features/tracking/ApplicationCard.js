import { HiOutlineDotsHorizontal, HiOutlineLink } from "react-icons/hi";
import Button from "../../components/elements/Button";
import LinkButton from "../../components/elements/LinkButton";
import { useState } from "react";
import StatusSettingModal from "./StatusSettingModal";
import { supabase } from "../../services/supabase";
import { useTrackingJobs } from "../../hooks/useTrackingJobs";

function ApplicationCard({ data, updateJob }) {
  const [showModal, setShowModal] = useState(false);
  // const { updateJob } = useTrackingJobs();

  const { id, title, company_name, company_logo, link_url } = data;

  function handleChange(status) {
    updateJob(id, status);
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
          <div className="flex items-center mb-1">
            <h4 className="mr-2">{title}</h4>
            <LinkButton
              classes="rounded-full active:ring-accent"
              url={link_url}
            >
              <HiOutlineLink className="h-4 w-4" />
            </LinkButton>
          </div>
          <p className="text-sm text-gray-200">{company_name}</p>
        </div>
      </div>

      {showModal && (
        <StatusSettingModal
          setShowModal={setShowModal}
          handleChange={handleChange}
        />
      )}
    </div>
  );
}

export default ApplicationCard;
