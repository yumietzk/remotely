import { CiBookmark } from "react-icons/ci";
import LinkButton from "../../components/elements/LinkButton";
import Button from "../../components/elements/Button";
import { formatDate } from "../../utils/formatDate";
import { formatJobType } from "../../utils/formatJobType";
import { useUser } from "../../contexts/UserProvider";
import { supabase } from "../../services/supabase";

function JobCard({ job }) {
  const {
    user: {
      user: { id },
    },
  } = useUser();

  const {
    id: jobId,
    url,
    title,
    company_name,
    company_logo,
    job_type,
    publication_date,
    salary,
  } = job;

  async function handleCreateTrackingJob() {
    try {
      const newId = `${jobId}${new Date().getTime().toString().slice(-5)}`;

      const newData = {
        id: +newId,
        user_id: id,
        status: "No Status",
        company_name,
        title,
        company_logo,
        link_url: url,
      };

      const { error } = await supabase.from("trackings").insert(newData);

      if (error) {
        throw error;
      }

      alert("Save a job");
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  }

  return (
    <div className="p-1.5 rounded-2xl bg-white">
      <div className="bg-job-card rounded-2xl p-4 h-56 flex flex-col justify-between">
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
          <Button
            classes="rounded-full focus:ring-offset-job-card"
            handleClick={handleCreateTrackingJob}
          >
            <CiBookmark className="bg-white w-9 h-9 p-2 rounded-full" />
          </Button>
        </div>

        {/* Company name, logo, job title,  */}
        <div>
          <p className="text-sm font-medium">{company_name}</p>
          <div className="flex justify-between items-center">
            <p className="text-lg font-semibold mr-1.5">{title}</p>
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

      <div className="flex justify-between items-center px-4 py-5">
        {/* Salary */}
        <p className="text-lg font-semibold">{salary || "💰"}</p>

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
