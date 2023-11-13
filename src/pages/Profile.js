import { useState } from "react";
import { supabase } from "../supabase";

// const formLabels = ["First name", "Last name", "Email", "Password"];

// function createName(label) {
//   const splitted = label.split(" ");

//   const name =
//     splitted.length > 1
//       ? `${splitted[0].toLowerCase()}${splitted[1][0].toUpperCase()}${splitted[1].slice(
//           1
//         )}`
//       : splitted[0].toLowerCase();
//   return name;
// }

function Profile() {
  const [image, setImage] = useState("");
  // ⚠️ try to limit the only png/jpeg etc extentions for the file
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [error, setError] = useState("");

  function handleImageUpload(e) {
    console.log(e.target.files[0]);

    const file = e.target.files;

    if (file && file[0]) {
      setImage(file[0]);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const { error } = await supabase
      .from("profiles")
      .insert({ firstName, lastName });

    if (error) {
      setError(error.message);
    }

    setFirstName("");
    setLastName("");
  }

  // 💡 add more fields later
  return (
    <div className="bg-white w-9/12 mx-auto">
      <h2 className="text-xl font-medium mb-3">Profile Settings</h2>

      <form className="flex flex-col space-y-6" onSubmit={handleSubmit}>
        <div>
          <label>Profile picture</label>
          <input type="file" name="profile" onChange={handleImageUpload} />
        </div>

        <label className="flex flex-col">
          First name
          <input
            className="rounded-lg px-2 py-1 border border-gray-100 text-current"
            type="text"
            name="firstName"
            value={firstName}
            placeholder="Enter your first name"
            onChange={(e) => setFirstName(e.target.value)}
          />
        </label>

        <label className="flex flex-col">
          Last name
          <input
            className="rounded-lg px-2 py-1 border border-gray-100 text-current"
            type="text"
            name="lastName"
            value={lastName}
            placeholder="Enter your last name"
            onChange={(e) => setLastName(e.target.value)}
          />
        </label>

        {/* 💡 email and password are for account setting */}
        {/* <label className="flex flex-col">
          Email
          <input
            className="rounded-lg px-2 py-1 border border-gray-100 text-current"
            type="text"
            name="email"
            value={email}
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>

        <label className="flex flex-col">
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

        <button>Save</button>
      </form>
    </div>
  );
}

export default Profile;
