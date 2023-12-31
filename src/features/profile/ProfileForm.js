import { useEffect, useState } from "react";
import { supabase } from "../../services/supabase";
import { useUser } from "../../contexts/UserProvider";
import { useProfile } from "../../hooks/useProfile";
import Button from "../../components/elements/Button";
import TextInput from "../../components/form/TextInput";
import ProfilePicture from "./ProfilePicture";
import { inputFields } from "../../data/profileFormFields";

const initialValues = {
  firstName: "",
  lastName: "",
  country: "",
};

// ⚠️ react toast message!!!
function ProfileForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [updateProfileError, setUpdateProfileError] = useState("");
  const [values, setValues] = useState(initialValues);
  const [imageUrl, setImageUrl] = useState("");

  const {
    user: {
      user: { id },
    },
  } = useUser();
  // const { profile } = useProfile();
  const { isPending, isError, data: profile, error } = useProfile();

  const { firstName, lastName, country } = values;

  useEffect(() => {
    if (!profile) return;

    const { first_name, last_name, country, image_url } = profile;

    setValues((v) => ({
      ...v,
      firstName: first_name,
      lastName: last_name,
      country,
    }));
    setImageUrl(image_url);
  }, [profile]);

  if (isPending) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  async function updateProfile(e, imageUrl) {
    e.preventDefault();

    try {
      setIsLoading(true);
      setUpdateProfileError("");

      if (!imageUrl) {
        if (!firstName || !lastName || !country) {
          alert("You sould fill in every fields.");
          return;
        }
      }

      const updatedData = {
        id,
        first_name: firstName,
        last_name: lastName,
        country,
        image_url: imageUrl,
      };

      const { error: updateError } = await supabase
        .from("profiles")
        .upsert(updatedData)
        .eq("id", id);

      if (updateError) {
        throw updateError;
      }

      alert("Profile updated");
      setImageUrl(imageUrl);
    } catch (error) {
      console.error(error);
      setUpdateProfileError(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <form className="flex flex-col space-y-12" onSubmit={updateProfile}>
      <div className="flex flex-col space-y-7 font-medium">
        <ProfilePicture
          url={imageUrl}
          size={135}
          handleUpdate={(e, url) => updateProfile(e, url)}
        />

        {inputFields.map((field) => (
          // 💡 Fix the warning!!
          <TextInput
            key={field.label}
            labelClasses="flex flex-col"
            type={field.type}
            name={field.name}
            placeholder={field.placeholder}
            value={values[field.name]}
            handleChange={(e) =>
              setValues({ ...values, [field.name]: e.target.value })
            }
          >
            {field.label}
          </TextInput>
        ))}
      </div>

      <Button
        classes={`w-6/12 mx-auto border-none ${
          isLoading ? "bg-gray-100" : "bg-green-400"
        } text-white py-2 rounded-lg ${!isLoading && "hover:bg-green-500"}`}
        type="submit"
        disabled={isLoading}
      >
        {isLoading
          ? "Loading..."
          : firstName || lastName || country
          ? "Update"
          : "Save"}
      </Button>
    </form>
  );
}

export default ProfileForm;
