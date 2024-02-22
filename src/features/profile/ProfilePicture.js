/* eslint-disable jsx-a11y/img-redundant-alt */
import { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import { supabase } from "../../services/supabase";
import { useUser } from "../../contexts/UserProvider";

function ProfilePicture({ url, size, handleUpdate }) {
  const [uploading, setUploading] = useState(false);
  const [pictureUrl, setPictureUrl] = useState("");

  const inputRef = useRef(null);

  const {
    user: {
      user: { id },
    },
  } = useUser();

  useEffect(() => {
    if (url) downloadPicture(url);
  }, [url]);

  function downloadPicture(path) {
    try {
      const {
        data: { publicUrl },
        error,
      } = supabase.storage.from("images").getPublicUrl(path);

      if (error) {
        throw error;
      }

      setPictureUrl(publicUrl);
    } catch (error) {
      console.error(error);
      toast.error(error.messsage);
    }
  }

  function fileUpload() {
    inputRef.current.click();
  }

  async function uploadPicture(e) {
    try {
      setUploading(true);

      if (!e.target.files || e.target.files.length === 0) {
        throw new Error("You must select an image to upload.");
      }

      const file = e.target.files[0];
      const currentTime = new Date().getTime();
      const filePath = `${currentTime}_${id}_${file.name};`;

      const { error } = await supabase.storage
        .from("images")
        .upload(filePath, file);

      if (error) {
        throw error;
      }

      handleUpdate(e, filePath);
    } catch (error) {
      console.error(error);
      toast.error(error.message);
    } finally {
      setUploading(false);
    }
  }

  return (
    <div>
      {pictureUrl ? (
        <img
          className="object-cover rounded-full mb-3"
          src={pictureUrl}
          alt="Profile picture"
          style={{ height: size, width: size }}
        />
      ) : (
        <div
          className="rounded-full bg-green-50 border border-gray-100 mb-3"
          style={{ height: size, width: size }}
        />
      )}

      <div>
        <button
          className="border border-green-100 bg-green-50 rounded-lg px-4 py-1.5 text-current font-normal cursor-pointer transition duration-300 hover:border-green-200 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-white"
          type="button"
          onClick={fileUpload}
        >
          {uploading
            ? "Uploading ..."
            : pictureUrl
            ? "Change picture"
            : "Upload picture"}
        </button>
        <input
          className="invisible absolute"
          ref={inputRef}
          type="file"
          accept="image/*"
          onChange={uploadPicture}
          disabled={uploading}
        />
      </div>
    </div>
  );
}

export default ProfilePicture;
