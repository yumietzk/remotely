import { useState } from "react";

const formLabels = ["First name", "Last name", "Email", "Password"];

function createName(label) {
  const splitted = label.split(" ");

  const name =
    splitted.length > 1
      ? `${splitted[0].toLowerCase()}${splitted[1][0].toUpperCase()}${splitted[1].slice(
          1
        )}`
      : splitted[0].toLowerCase();
  return name;
}

function Profile() {
  const [image, setImage] = useState("");
  // ⚠️ try to limit the only png/jpeg etc extentions for the file

  function handleImageUpload(e) {
    console.log(e.target.files[0]);

    const file = e.target.files;

    if (file && file[0]) {
      setImage(file[0]);
    }
  }

  return (
    <div className="bg-white w-9/12 mx-auto">
      <h2 className="text-xl font-medium mb-3">Profile Settings</h2>

      <form className="flex flex-col space-y-6">
        <div>
          <label>Profile picture</label>
          <input type="file" name="profile" onChange={handleImageUpload} />
        </div>

        {formLabels.map((label, i) => (
          <label className="flex flex-col" key={label}>
            {label}
            <input
              className="rounded-lg px-2 py-1 border border-gray-100 text-current"
              type="text"
              name={createName(formLabels[i])}
              placeholder={`Add your ${label.toLowerCase()}`}
            />
          </label>
        ))}

        <button>Save</button>
      </form>
    </div>
  );
}

export default Profile;
