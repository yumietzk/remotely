import ProfileForm from "../features/profile/ProfileForm";

function Profile() {
  // const [imageUrl, setAvatarUrl] = useState(null);
  // ⚠️ try to limit the only png/jpeg etc extentions for the file

  // const {
  //   user: { id },
  //   profileData,
  //   getProfileData,
  // } = useUser();

  // async function handleUploadImage(e) {
  //   if (!e.target.files || e.target.files.length === 0) {
  //     return;
  //   }

  //   const file = e.target.files[0];
  //   const filePath = `${id}/${file.name}`;

  //   // Upload a file
  //   const { data, error } = await supabase.storage
  //     .from("images")
  //     .upload(filePath, file);

  //   if (error) {
  //   }

  //   console.log(data);
  // }

  return (
    <div className="bg-white w-9/12 mx-auto py-9 px-10 rounded-lg">
      <h2 className="text-xl font-semibold mb-3">Profile Settings</h2>

      <ProfileForm />
    </div>
  );
}

export default Profile;
