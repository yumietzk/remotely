import { useOutletContext } from "react-router-dom";
import ProfileForm from "../features/profile/ProfileForm";

function Profile() {
  const [profile, getProfile] = useOutletContext();

  return (
    <div className="bg-white w-9/12 mx-auto py-9 px-10 rounded-lg">
      <div className="flex justify-between items-end mb-8">
        <h2 className="text-xl font-semibold">Profile Settings</h2>
        <p className="text-sm">* Required field</p>
      </div>

      <ProfileForm profile={profile} getProfile={getProfile} />
    </div>
  );
}

export default Profile;
