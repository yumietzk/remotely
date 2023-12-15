import { CiBookmark } from "react-icons/ci";
import LinkButton from "../../components/elements/LinkButton";
import Button from "../../components/elements/Button";
import { formatDate } from "../../utils/formatDate";
import { formatJobType } from "../../utils/formatJobType";

function JobCard({ job }) {
  const {
    url,
    title,
    company_name,
    company_logo,
    job_type,
    publication_date,
    salary,
  } = job;

  return (
    <div className="p-1.5 rounded-2xl bg-white">
      <div className="bg-green-50 rounded-2xl p-4 h-56 flex flex-col justify-between">
        <div className="mb-6 flex justify-between items-center">
          <p className="bg-accent text-white px-2.5 py-2 rounded-3xl text-sm font-medium">
            {formatDate(publication_date)}
          </p>
          <Button classes="rounded-full focus:ring-offset-green-50">
            <CiBookmark className="bg-white w-9 h-9 p-2 rounded-full" />
          </Button>
        </div>

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

        <div>
          <span className="border border-gray-100 px-2 py-1.5 rounded-3xl text-xs font-medium">
            {formatJobType(job_type)}
          </span>
        </div>
      </div>

      <div className="flex justify-between items-center px-4 py-5">
        <p className="text-lg font-semibold">{salary || "N/A"}</p>
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
