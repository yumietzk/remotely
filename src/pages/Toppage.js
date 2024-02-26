import { Link } from "react-router-dom";
import { useUser } from "../contexts/UserProvider";
import image from "../assets/image2.png";

function TopPage() {
  const { user } = useUser();

  return (
    <div className="h-screen w-full font-primary font-normal text-base bg-green-500 text-white px-12 py-7">
      <header className="mb-14">
        <div className="text-3xl font-medium font-secondary">Remotely 🌎</div>
      </header>

      <h1 className="text-5xl font-bold mb-3">Find Your New Remote Job</h1>
      <p className="text-2xl mb-16">
        We help you find your new Software Engineer job available from where you
        are located.
      </p>
      <Link
        to={user ? "/dashboard" : "/signin"}
        className="px-5 py-3.5 rounded border border-white text-2xl transition-colors duration-300 hover:bg-white h hover:text-green-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent focus:ring-offset-green-500"
      >
        Get started!
      </Link>

      <div className="absolute bottom-0 right-32 flex justify-end">
        <img className="h-[500px] w-auto" src={image} alt="toppage" />
      </div>
    </div>
  );
}

export default TopPage;
