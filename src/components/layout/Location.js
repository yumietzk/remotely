import { CiLocationOn } from "react-icons/ci";

function Location({ profile }) {
  return (
    <div className="flex-none flex items-center mr-4">
      {profile?.country && (
        <>
          <CiLocationOn className="w-6 h-6 lg:w-7 lg:h-7 mr-1" />
          <p className="text-sm lg:text-base">{profile.country}</p>
        </>
      )}
    </div>
  );
}

export default Location;
