import { CiLocationOn } from "react-icons/ci";

// Should be generic by passing props
function Location() {
  return (
    <div className="flex-none flex items-center">
      <CiLocationOn className="w-6 h-6 text-white-secondary" />
      Japan
    </div>
  );
}

export default Location;
