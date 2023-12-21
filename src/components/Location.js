import { CiLocationOn } from "react-icons/ci";
import { useProfile } from "../hooks/useProfile";

function Location() {
  const { profile } = useProfile();

  return (
    <div className="flex-none flex items-center">
      <CiLocationOn className="w-6 h-6 text-white-secondary" />
      {profile?.country}
    </div>
  );
}

export default Location;
