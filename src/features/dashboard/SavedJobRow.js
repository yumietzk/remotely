import { HiOutlineLink } from "react-icons/hi";
import LinkButton from "../../components/elements/LinkButton";

function SavedJobRow({ job }) {
  const { company_name, company_logo, title, url } = job;

  return (
    <li className="flex items-center">
      <img
        className="w-10 h-10 rounded-full mr-6"
        src={company_logo}
        alt="Company logo"
      />

      <div className="mr-auto">
        <p>{title}</p>
        <p className="text-sm text-gray-200">{company_name}</p>
      </div>

      <div>
        <LinkButton classes="rounded-full active:ring-accent" url={url}>
          <HiOutlineLink className="h-5 w-5" />
        </LinkButton>
      </div>
    </li>
  );
}

export default SavedJobRow;
