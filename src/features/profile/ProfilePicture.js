/* eslint-disable jsx-a11y/img-redundant-alt */
import { useEffect, useState } from "react";
import { supabase } from "../../services/supabase";
import { useUser } from "../../contexts/UserProvider";

function ProfilePicture({ imageUrl, setImageUrl }) {
  const [filePath, setFilePath] = useState("");
  const [uploading, setUploading] = useState(false);
  const [pictureUrl, setPictureUrl] = useState(null);

  const {
    user: {
      user: { id },
    },
  } = useUser();

  useEffect(() => {
    if (imageUrl) downloadImage(imageUrl);
  }, [imageUrl]);

  async function downloadImage(path) {
    try {
      const { data, error } = await supabase.storage
        .from("images")
        .download(path);

      if (error) {
        throw error;
      }

      const url = URL.createObjectURL(data);
      setPictureUrl(url);
    } catch (error) {
      alert(error.messsage);
    }
  }

  async function uploadPicture(e) {
    try {
      setUploading(true);

      if (!e.target.files || e.target.files.length === 0) {
        throw new Error("You must select an image to upload.");
      }

      const file = e.target.files[0];
      const filePath = `${id}-${file.name};`;

      setFilePath(file.name);

      const { error: uploadError } = await supabase.storage
        .from("images")
        .upload(filePath, file);

      if (uploadError) {
        throw uploadError;
      }

      setImageUrl(filePath);
    } catch (error) {
      alert(error.message);
    } finally {
      setUploading(false);
    }
  }

  return (
    <div>
      {pictureUrl ? (
        <img
          src={pictureUrl}
          alt="Profile picture"
          // style={{ height: size, width: size }}
        />
      ) : (
        <div

        // style={{ height: size, width: size }}
        />
      )}

      {filePath}

      <div>
        <label className="button primary block">
          {uploading ? "Uploading ..." : "Upload"}
          <input
            style={{
              visibility: "hidden",
              position: "absolute",
            }}
            type="file"
            accept="image/*"
            onChange={uploadPicture}
            disabled={uploading}
          />
        </label>
      </div>
    </div>
  );
}

export default ProfilePicture;
