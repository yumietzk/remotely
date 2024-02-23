import { CiLogout } from "react-icons/ci";
import { toast } from "react-toastify";
import { supabase } from "../../services/supabase";
import { useNavigate } from "react-router-dom";

function UserModal({ imageUrl }) {
  const navigate = useNavigate();

  async function handleSignOut() {
    const { error } = await supabase.auth.signOut();

    if (error) {
      toast.error("You couldn't log out!");
    } else {
      navigate("/");
    }
  }

  return (
    <button
      className={`bg-white border border-gray-100 rounded-md w-28 py-2 px-2.5 absolute ${
        imageUrl ? "top-14 -left-8" : "top-11 -left-12"
      } z-10 flex items-center justify-between transition duration-300 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-green-50`}
      onClick={() => handleSignOut()}
    >
      <CiLogout />
      Sign out
    </button>
  );
}

export default UserModal;
