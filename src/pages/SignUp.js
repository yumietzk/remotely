import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

// ⚠️ Need back to the top page button?
function SignUp() {
  return (
    <div className="h-full w-full px-12 py-7 font-primary font-normal text-base bg-green-500 text-white flex flex-col items-center justify-center overflow-y-scroll">
      <h3 className="mb-4">
        <div className="text-3xl font-medium font-secondary">Remotely 🌎</div>
      </h3>
      <p className="mb-12 text-2xl">Sign up now</p>

      <form className="bg-green-100 py-10 px-11 rounded-md text-green-500 flex flex-col space-y-10">
        <div className="flex flex-col space-y-7 font-medium">
          <label className="flex flex-col">
            First name
            <input
              className="w-96 border border-gray-100 rounded-lg p-2 font-normal focus:outline-none focus:ring focus:ring-gray-200"
              type="text"
              name="firstName"
              placeholder="Enter your first name"
            />
          </label>

          <label className="flex flex-col">
            Last name
            <input
              className="w-96 border border-gray-100 rounded-lg p-2 font-normal focus:outline-none focus:ring focus:ring-gray-200"
              type="text"
              name="lastName"
              placeholder="Enter your last name"
            />
          </label>

          <label className="flex flex-col">
            Email address
            <input
              className="w-96 border border-gray-100 rounded-lg p-2 font-normal focus:outline-none focus:ring focus:ring-gray-200"
              type="text"
              name="email"
              placeholder="Enter your email"
            />
          </label>

          <label className="flex flex-col">
            Password
            <input
              className="w-96 border border-gray-100 rounded-lg p-2 font-normal focus:outline-none focus:ring focus:ring-gray-200"
              type="password"
              name="password"
              placeholder="Enter your password"
            />
          </label>
        </div>

        <button className="border-none bg-green-400 text-white py-2 rounded-lg transition-colors duration-300 hover:bg-green-500">
          Sign up
        </button>

        <p className="flex items-center before:h-[1px] before:grow before:bg-gray-100 before:mr-3 after:h-[1px] after:grow after:bg-gray-100 after:ml-3">
          or
        </p>

        <button className="border border-gray-200 py-2 rounded-lg flex items-center justify-center transition-colors duration-300 hover:bg-white">
          <FcGoogle className="mr-3 h-6 w-6" />
          Sign up with Google
        </button>

        <div className="flex items-center justify-center">
          <p className="mr-1">Have an account?</p>
          <Link
            to="/signin"
            className="text-green-300 transition-colors duration-300 hover:text-green-500"
          >
            Sign in!
          </Link>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
