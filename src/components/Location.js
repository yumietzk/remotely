import { CiLocationOn } from "react-icons/ci";
import { useProfile } from "../hooks/useProfile";

function Location() {
  const { data: profile } = useProfile();

  return (
    <div className="flex-none flex items-center mr-4">
      <CiLocationOn className="w-8 h-8 text-white-secondary" />
      <p className="text-lg">{profile?.country}</p>
    </div>
  );
}

export default Location;
