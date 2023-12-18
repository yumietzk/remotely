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

function ProfileForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [values, setValues] = useState(initialValues);
  const [imageUrl, setImageUrl] = useState("");

  const { firstName, lastName, country } = values;

  const {
    user: { id },
    profile,
  } = useUser();

  useEffect(() => {
    if (!profile) return;

    const { first_name, last_name, country, image_url } = profile;

    setValues({
      ...values,
      firstName: first_name,
      lastName: last_name,
      country,
    });
    setImageUrl(image_url);
  }, [profile]);

  async function handleSubmit(e) {
    e.preventDefault();

    setIsLoading(true);
    setError("");

    if (!firstName || !lastName || !country) return;

    const updatedData = {
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
      setError(error.message);
    }

    setIsLoading(false);
    setValues(initialValues);
  }

  return (
    <form className="flex flex-col space-y-12" onSubmit={handleSubmit}>
      <div className="flex flex-col space-y-7 font-medium">
        {/* <label className="flex flex-col">
            Profile picture
            <input
              className="font-normal"
              type="file"
              name="image"
              onChange={handleUploadImage}
            />
            <img src={imageUrl} alt="" />
          </label> */}

        {/* <label className="flex flex-col">
            Password
            <input
              className="rounded-lg px-2 py-1 border border-gray-100 text-current"
              type="password"
              name="password"
              value={password}
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </label> */}

        <ProfilePicture imageUrl={imageUrl} setImageUrl={setImageUrl} />

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
