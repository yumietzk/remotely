import { CiLocationOn } from "react-icons/ci";

// Should be generic by passing props
function Location() {
  return (
    <div className="flex-none mr-16 py-9 flex items-center">
      <CiLocationOn className="mr-1 w-6 h-6 text-white-secondary" />
      Japan
    </div>
  );
}

export default Location;
