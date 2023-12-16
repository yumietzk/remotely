import { useEffect, useState } from "react";
import { useUser } from "../../contexts/UserProvider";
import { supabase } from "../../services/supabase";
import { inputFields } from "../../data/profileFormFields";
import Button from "../../components/elements/Button";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  country: "",
};

function ProfileForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [values, setValues] = useState(initialValues);

  const { firstName, lastName, email, country } = values;

  const {
    user: { id },
    profileData,
  } = useUser();
  console.log(profileData);

  useEffect(() => {
    if (!profileData) return;

    const { firstName, lastName, country } = profileData;
    setValues({ ...values, firstName, lastName, country });
  }, [profileData]);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setIsLoading(true);
      setError("");

      if (!firstName || !lastName || !email || !country) return;

      // 💡 if the data is already in the database, compare that with a new data, and decide if we should update that
      const { error } = await supabase
        .from("profiles")
        .update({ firstName, lastName, country })
        .eq("userId", id);

      if (error) throw new Error(`Something went wrong: ${error.message}`);

      alert("Added");
    } catch (err) {
      console.error(err);
      setError(err.message);
    } finally {
      setIsLoading(false);
      setValues({ ...values, firstName: "", lastName: "", email: "" });
    }
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

        {inputFields.map((field) => (
          <label key={field.label} className="flex flex-col">
            {field.label}
            <input
              className="rounded-lg px-2 py-1 border border-gray-100 text-current font-normal focus:outline-none focus:ring focus:ring-gray-200"
              type={field.type}
              name={field.name}
              value={values[field.name]}
              placeholder={field.placeholder}
              onChange={(e) =>
                setValues({ ...values, [field.name]: e.target.value })
              }
            />
          </label>
        ))}
      </div>

      <Button
        classes={`w-6/12 mx-auto border-none ${
          isLoading ? "bg-gray-100" : "bg-green-400"
        } text-white py-2 rounded-lg transition-colors duration-300 ${
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
