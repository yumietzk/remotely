import { Link } from "react-router-dom";
import image from "../assets/homepage-image.png";

function Homepage() {
  return (
    <div className="row-span-2 bg-background-secondary text-white-primary px-16 pt-12 relative">
      <h1 className="text-6xl font-bold mb-3">Find Your New Remote Job</h1>
      <p className="text-2xl mb-16">
        We help you find your new Software Engineer job available from where you
        are located.
      </p>
      <Link
        to="/search"
        className="px-5 py-3.5 rounded border border-white-secondary text-2xl"
      >
        Get started!
      </Link>

      <div className="absolute bottom-0 right-0 flex justify-end">
        <img className="w-[950px] h-auto" src={image} alt="Homepage" />
      </div>
    </div>
  );
}

export default Homepage;
