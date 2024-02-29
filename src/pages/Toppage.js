import { Link } from "react-router-dom";
import { useUser } from "../contexts/UserProvider";
import image from "../assets/image2.png";

function TopPage() {
  const { user } = useUser();

  return (
    <div className="h-screen w-screen font-primary font-normal text-base bg-green-500 text-white px-6 sm:px-12 py-10">
      <div className="h-full max-w-[1440px] w-full mx-auto flex flex-col">
        <header className="h-9 mb-16 lg:mb-24">
          <div className="text-3xl font-medium font-secondary">Remotely 🌎</div>
        </header>

        <div className="flex-1 flex flex-col justify-between items-center xl:flex-row">
          <div className="flex-1 pb-7 xl:pb-16">
            <h1 className="text-[40px] lg:text-6xl font-bold tracking-wide leading-normal mb-7 lg:mb-10">
              Find Your New Remote Job
            </h1>
            <p className="text-xl lg:text-2xl tracking-wide mb-20 xl:mb-40">
              We help you find your new remote Software Engineer job.
            </p>
            <Link
              to={user ? "/dashboard" : "/signin"}
              className="px-5 py-3.5 rounded border border-white text-xl lg:text-2xl transition-colors duration-300 hover:bg-white h hover:text-green-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent focus:ring-offset-green-500"
            >
              Get started!
            </Link>
          </div>

          <div className="w-[98%] sm:w-10/12 h-auto justify-self-center lg:justify-self-end xl:w-[700px] xl:ml-11">
            <img className="object-cover" src={image} alt="toppage" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopPage;
