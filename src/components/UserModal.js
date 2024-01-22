import { CiLogout } from "react-icons/ci";
import { supabase } from "../services/supabase";
import { useNavigate } from "react-router-dom";

function UserModal() {
  const navigate = useNavigate();

  async function handleSignOut() {
    const { error } = await supabase.auth.signOut();

    if (error) {
      alert("You couldn't log out!");
    } else {
      navigate("/");
    }
  }

  return (
    <button
      className="bg-white border border-gray-100 rounded-md w-28 py-2.5 px-3 absolute top-16 -left-7 z-10 flex items-center justify-between"
      onClick={() => handleSignOut()}
    >
      <CiLogout />
      Sign out
    </button>
  );
}

export default UserModal;
