import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { supabase } from "../../services/supabase";
import { useUser } from "../../contexts/UserProvider";
import Button from "../../components/elements/Button";
import TextInput from "../../components/form/TextInput";
import ProfilePicture from "./ProfilePicture";
import { inputFields } from "../../data/profileFormFields";

const initialValues = {
  firstName: "",
  lastName: "",
  country: "",
};

function ProfileForm({ profile, getProfile }) {
  const [isLoading, setIsLoading] = useState(false);
  const [updateProfileError, setUpdateProfileError] = useState("");
  const [values, setValues] = useState(initialValues);
  const [imageUrl, setImageUrl] = useState("");

  const {
    user: { id },
  } = useUser();

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

  async function updateProfile(e, imageUrl) {
    e.preventDefault();

    try {
      setIsLoading(true);
      setUpdateProfileError("");

      if (!imageUrl) {
        if (!firstName || !country) {
          toast.error("You sould fill in every required fields.");
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

      toast.success("Updated a profile");
      getProfile();
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
          <TextInput
            key={field.label}
            labelClasses="flex flex-col text-sm lg:text-base"
            field={field}
            orgValue={values[field.name]}
            handleChange={(value) =>
              setValues({ ...values, [field.name]: value })
            }
          >
            {field.label}
          </TextInput>
        ))}
      </div>

      {updateProfileError && (
        <p className="text-sm lg:text-base text-red">{updateProfileError}</p>
      )}

      <Button
        classes={`w-6/12 mx-auto border-none ${
          isLoading ? "bg-gray-100" : "bg-green-400"
        } text-white text-sm lg:text-base py-2 rounded-lg ${
          !isLoading && "hover:bg-green-500"
        }`}
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
