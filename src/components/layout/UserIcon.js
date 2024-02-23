import { useEffect, useState } from "react";
import { CiUser } from "react-icons/ci";
import { toast } from "react-toastify";
import { supabase } from "../../services/supabase";
import UserModal from "./UserModal";

function UserIcon({ profile }) {
  const [showModal, setShowModal] = useState(false);
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    if (!profile) return;

    const { image_url } = profile;
    if (image_url) downloadPicture(image_url);
  }, [profile]);

  function downloadPicture(path) {
    try {
      const {
        data: { publicUrl },
        error,
      } = supabase.storage.from("images").getPublicUrl(path);

      if (error) {
        throw error;
      }

      setImageUrl(publicUrl);
    } catch (error) {
      console.error(error);
      toast.error(error.messsage);
    }
  }

  return (
    <div className="flex-none flex justify-center items-center relative">
      <button
        className="border-none rounded-full transition duration-300 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-green-50"
        onClick={() => setShowModal(!showModal)}
      >
        {imageUrl ? (
          <img
            className="object-cover rounded-full h-[49px] w-[49px]"
            src={imageUrl}
            alt="Profile"
          />
        ) : (
          <CiUser className="h-7 w-7" />
        )}
      </button>

      {showModal && <UserModal imageUrl={imageUrl} />}
    </div>
  );
}

export default UserIcon;
