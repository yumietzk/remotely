import { CiLocationOn } from "react-icons/ci";

function Location({ profile }) {
  return (
    <div className="flex-none flex items-center mr-4">
      {profile?.country && (
        <>
          <CiLocationOn className="w-7 h-7 mr-1" />
          <p>{profile.country}</p>
        </>
      )}
    </div>
  );
}

export default Location;
