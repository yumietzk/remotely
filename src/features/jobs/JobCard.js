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
    <div className="p-1.5 rounded-2xl bg-white flex justify-between items-stretch lg:block">
      <div className="bg-job-card rounded-2xl basis-10/12 p-4 lg:h-64 flex flex-col justify-between lg:mb-2 mr-1.5 lg:mr-0">
        <div className="mb-4 lg:mb-6 flex justify-between items-center">
          {/* Published date */}
          {formatDate(publication_date) ? (
            <p className="bg-green-400 text-white px-2.5 py-2 rounded-3xl text-xs lg:text-sm font-medium">
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
              <PiBookmarkSimpleFill className="bg-white w-8 h-8 lg:w-9 lg:h-9 p-2 rounded-full" />
            ) : (
              <PiBookmarkSimpleLight className="bg-white w-8 h-8 lg:w-9 lg:h-9 p-2 rounded-full" />
            )}

            {!canRemove && (
              <span className="w-max bg-black text-white text-xs lg:text-sm py-1 px-2 rounded-lg absolute -left-[110%] bottom-[120%] z-10 invisible transition duration-300 group-hover:visible">
                Already applied
              </span>
            )}
          </Button>
        </div>

        {/* Company name, logo, job title,  */}
        <div className="mb-1">
          <p className="text-xs lg:text-sm font-medium text-green-400 mb-0.5 lg:mb-1">
            {company_name}
          </p>
          <div className="flex justify-between items-center">
            <p className="text-base lg:text-lg font-semibold mr-1.5">
              {truncateString(title, 50)}
            </p>
            <img
              className="w-10 h-10 lg:w-11 lg:h-11 rounded-full"
              src={company_logo}
              alt="Company logo"
            />
          </div>
        </div>

        {/* Job type */}
        <div>
          {formatJobType(job_type) ? (
            <span className="border border-gray-100 px-2 py-1.5 rounded-3xl text-[11px] lg:text-xs font-medium">
              {formatJobType(job_type)}
            </span>
          ) : (
            <span></span>
          )}
        </div>
      </div>

      {/* Detail button */}
      <div className="flex-1">
        <LinkButton
          classes="h-full bg-gray-100 lg:px-3.5 lg:py-3 rounded-2xl text-sm text-white hover:bg-black active:ring-offset-white active:ring-black"
          url={url}
        >
          Details
        </LinkButton>
      </div>
    </div>
  );
}

export default JobCard;
