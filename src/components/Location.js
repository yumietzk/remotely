import { CiLocationOn } from "react-icons/ci";
import { useUser } from "../contexts/UserProvider";

// Should be generic by passing props
function Location() {
  const {
    profileData: { country },
  } = useUser();

  return (
    <div className="flex-none flex items-center">
      <CiLocationOn className="w-6 h-6 text-white-secondary" />
      {country}
    </div>
  );
}

export default Location;
