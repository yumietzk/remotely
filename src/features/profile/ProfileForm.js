import { useEffect, useState } from "react";
import { useUser } from "../../contexts/UserProvider";
import { supabase } from "../../services/supabase";
import { inputFields } from "../../data/profileFormFields";
import Button from "../../components/elements/Button";
import TextInput from "../../components/form/TextInput";
import ProfilePicture from "./ProfilePicture";

const initialValues = {
  firstName: "",
  lastName: "",
  country: "",
};

// ⚠️ react toast message!!!
function ProfileForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [values, setValues] = useState(initialValues);
  const [imageUrl, setImageUrl] = useState("");

  const { firstName, lastName, country } = values;

  const {
    user: {
      user: { id },
    },
    profile,
  } = useUser();

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

  async function updateProfile(e, imageUrl) {
    e.preventDefault();

    try {
      setIsLoading(true);
      setError("");

      if (!imageUrl) {
        if (!firstName || !lastName || !country) return;
      }

      const updatedData = {
        id,
        first_name: firstName,
        last_name: lastName,
        country,
        image_url: imageUrl,
      };

      // 💡 if the data is already in the database, compare that with a new data, and decide if we should update that
      const { error } = await supabase
        .from("profiles")
        .upsert(updatedData)
        .eq("id", id);

      if (error) {
        throw error;
      }

      alert("Profile updated");
      setImageUrl(imageUrl);
    } catch (error) {
      console.error(error);
      setError(error.message);
    } finally {
      setIsLoading(false);
      setValues(initialValues);
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
