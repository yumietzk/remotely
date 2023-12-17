import { Link } from "react-router-dom";
import AuthForm from "../features/authentication/AuthForm";

function SignIn() {
  return (
    <div className="h-screen w-full px-12 py-7 font-primary font-normal text-base bg-green-500 text-white flex flex-col items-center justify-center">
      <h3 className="mb-4">
        <Link className="text-3xl font-medium font-secondary" to="/">
          Remotely 🌎
        </Link>
      </h3>
      <p className="mb-12 text-2xl">Sign in to your account</p>

      <AuthForm type="signIn" />
    </div>
  );
}

export default SignIn;
