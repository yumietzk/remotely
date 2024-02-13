import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CiUser } from "react-icons/ci";
import { toast } from "react-toastify";
import UserModal from "./UserModal";
import { useProfile } from "../hooks/useProfile";
import { supabase } from "../services/supabase";

function UserIcon() {
  const [showModal, setShowModal] = useState(false);
  const [imageUrl, setImageUrl] = useState("");

  const { profile } = useProfile();
  // const { isPending, isError, data: profile, error } = useProfile();

  useEffect(() => {
    if (!profile) return;

    const { image_url } = profile;
    if (image_url) downloadPicture(image_url);
  }, [profile]);

  // if (isPending) {
  //   return <span>...</span>;
  // }

  // if (isError) {
  //   return <span>Error: {error.message}</span>;
  // }

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
          className="object-cover rounded-full h-14 w-14"
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
