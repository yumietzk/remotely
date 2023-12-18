import ProfileForm from "../features/profile/ProfileForm";

function Profile() {
  return (
    <div className="bg-white w-9/12 mx-auto py-9 px-10 rounded-lg">
      <h2 className="text-xl font-semibold mb-8">Profile Settings</h2>

      <ProfileForm />
    </div>
  );
}

export default Profile;
