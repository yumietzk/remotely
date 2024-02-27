import { Link } from "react-router-dom";
import { useUser } from "../contexts/UserProvider";
import image from "../assets/image2.png";

function TopPage() {
  const { user } = useUser();

  return (
    <div className="h-screen w-full flex flex-col font-primary font-normal text-base bg-green-500 text-white px-12 py-10">
      <header className="h-9 mb-24">
        <div className="text-3xl font-medium font-secondary">Remotely 🌎</div>
      </header>

      <div className="flex-1 flex items-center">
        <div className="flex-1 pb-16">
          <h1 className="text-6xl font-bold tracking-wide leading-normal mb-10">
            Find Your New Remote Job
          </h1>
          <p className="text-2xl tracking-wide mb-40">
            We help you find your new Software Engineer job available from where
            you are located.
          </p>
          <Link
            to={user ? "/dashboard" : "/signin"}
            className="px-5 py-3.5 rounded border border-white text-2xl transition-colors duration-300 hover:bg-white h hover:text-green-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent focus:ring-offset-green-500"
          >
            Get started!
          </Link>
        </div>

        <div className="w-[700px] h-auto ml-11">
          <img className="object-cover" src={image} alt="toppage" />
        </div>
      </div>
    </div>
  );
}

export default TopPage;
