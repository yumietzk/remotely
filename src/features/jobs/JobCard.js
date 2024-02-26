import { useEffect, useState } from "react";
import { PiBookmarkSimpleLight, PiBookmarkSimpleFill } from "react-icons/pi";
import { toast } from "react-toastify";
import { useTrackingJobs } from "../../hooks/useTrackingJobs";
import { supabase } from "../../services/supabase";
import { useUser } from "../../contexts/UserProvider";
import { formatDate } from "../../utils/formatDate";
import { formatJobType } from "../../utils/formatJobType";
import LinkButton from "../../components/elements/LinkButton";
import Button from "../../components/elements/Button";
import { truncateString } from "../../utils/truncateString";

function JobCard({ job }) {
  const [isSaved, setIsSaved] = useState(false);
  const [canRemove, setCanRemove] = useState(true);
  const [targetId, setTargetId] = useState("");

  const { trackingJobs, getTrackingJobs } = useTrackingJobs();

  const {
    user: { id: userId },
  } = useUser();

  const {
    id: jobId,
    url,
    title,
    company_name,
    company_logo,
    job_type,
    publication_date,
    // salary,
  } = job;

  useEffect(() => {
    checkStatus();
  }, [trackingJobs]);

  // Check if the job is saved, and if so, check if the status is "No Status"
  function checkStatus() {
    const targetData = trackingJobs.find(
      (item) => +String(item.id).slice(0, 7) === jobId
    );

    if (targetData) {
      setIsSaved(true);
      setCanRemove(targetData.status === "No Status");
      setTargetId(targetData.id);
    } else {
      setIsSaved(false);
      setCanRemove(true);
    }
  }

  // Can toggle if not applied yet
  async function handleToggleSave() {
    try {
      if (isSaved) {
        // Remove a job from saved
        const { error } = await supabase
          .from("trackings")
          .delete()
          .eq("user_id", userId)
          .eq("id", targetId);

        if (error) {
          throw error;
        }

        toast.success("Removed a job from the saved");
      } else {
        // Save a job
        const now = `${Date.now()}`.slice(-8);
        const newId = `${jobId}${now}`;

        const newData = {
          id: newId,
          user_id: userId,
          status: "No Status",
          company_name,
          title,
          company_logo,
          link_url: url,
          archived: false,
        };

        const { error } = await supabase.from("trackings").insert(newData);

        if (error) {
          throw error;
        }

        toast.success("Saved a job");
      }

      getTrackingJobs();
    } catch (error) {
      console.error(error);
      toast.error(error.message);
    }
  }

  return (
    <div className="p-1.5 rounded-2xl bg-white">
      <div className="bg-job-card rounded-2xl p-4 h-64 2xl:h-[265px] flex flex-col justify-between">
        <div className="mb-6 flex justify-between items-center">
          {/* Published date */}
          {formatDate(publication_date) ? (
            <p className="bg-green-400 text-white px-2.5 py-2 rounded-3xl text-sm font-medium">
              {formatDate(publication_date)}
            </p>
          ) : (
            <p></p>
          )}

          {/* Save button */}
          {/* The button doesn't work if the job is already applied */}
          <Button
            classes="relative group rounded-full focus:ring-offset-job-card"
            handleClick={handleToggleSave}
            disabled={!canRemove}
          >
            {isSaved ? (
              <PiBookmarkSimpleFill className="bg-white w-9 h-9 p-2 rounded-full" />
            ) : (
              <PiBookmarkSimpleLight className="bg-white w-9 h-9 p-2 rounded-full" />
            )}

            {!canRemove && (
              <span className="w-max bg-black text-white text-sm py-1 px-2 rounded-lg absolute -left-[110%] bottom-[120%] z-10 invisible transition duration-300 group-hover:visible">
                Already applied
              </span>
            )}
          </Button>
        </div>

        {/* Company name, logo, job title,  */}
        <div className="mb-1">
          <p className="text-sm font-medium text-green-400 mb-1">
            {company_name}
          </p>
          <div className="flex justify-between items-center">
            <p className="text-lg font-semibold mr-1.5">
              {truncateString(title, 50)}
            </p>
            <img
              className="w-11 h-11 rounded-full"
              src={company_logo}
              alt="Company logo"
            />
          </div>
        </div>

        {/* Job type */}
        <div>
          {formatJobType(job_type) ? (
            <span className="border border-gray-100 px-2 py-1.5 rounded-3xl text-xs font-medium">
              {formatJobType(job_type)}
            </span>
          ) : (
            <span></span>
          )}
        </div>
      </div>

      <div className="flex justify-end items-center px-4 py-5">
        {/* Salary */}
        {/* <p className="text-lg font-semibold">{salary || "💰"}</p> */}

        {/* Detail button */}
        <div>
          <LinkButton
            classes="bg-gray-200 px-3.5 py-2 rounded-3xl text-sm text-white hover:bg-black active:ring-offset-white active:ring-black"
            url={url}
          >
            Details
          </LinkButton>
        </div>
      </div>
    </div>
  );
}

export default JobCard;
