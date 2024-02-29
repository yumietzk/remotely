import { FcGoogle } from "react-icons/fc";
import { supabase } from "../../services/supabase";
import Button from "../../components/elements/Button";

function GoogleAuth({ googleButton }) {
  async function handleClick() {
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          redirectTo: "http://remotelyapp.vercel.app/dashboard",
          // redirectTo: "http://localhost:3000/dashboard",
        },
      });

      if (error) {
        throw error;
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Button
      classes="text-white sm:text-current border border-gray-200 py-2 rounded-lg flex items-center justify-center hover:text-current hover:bg-white focus:ring-offset-green-500 sm:focus:ring-offset-green-100"
      handleClick={handleClick}
    >
      <FcGoogle className="mr-3 h-6 w-6" />
      {googleButton}
    </Button>
  );
}

export default GoogleAuth;
