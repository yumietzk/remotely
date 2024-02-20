import { useEffect, useState } from "react";
// import { CiUser } from "react-icons/ci";
import { toast } from "react-toastify";
import { supabase } from "../services/supabase";
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
    <div
      className="flex-none flex justify-center items-center relative"
      // onMouseEnter={() => setIsShown(true)}
    >
      {/* <CiUser className="text-white-primary font-normal w-8 h-8 border border-white-secondary rounded-full" />
       */}
      <button onClick={() => setShowModal(!showModal)}>
        <img
          className="object-cover rounded-full h-[49px] w-[49px]"
          src={imageUrl}
          alt="Profile"
        />
      </button>

      {/* ⚠️ Figure out mouse leave later */}
      {showModal && <UserModal />}
    </div>
  );
}

export default UserIcon;
