import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CiWarning } from "react-icons/ci";
import { FcGoogle } from "react-icons/fc";
import { supabase } from "../../services/supabase";
import TextInput from "../../components/form/TextInput";
import Button from "../../components/elements/Button";

const inputFields = [
  {
    label: "Email",
    type: "email",
    name: "email",
    placeholder: "Enter your email",
  },
  {
    label: "Password",
    type: "password",
    name: "password",
    placeholder: "Enter your password",
  },
];

const initialState = { email: "", password: "" };

const items = {
  signUp: {
    button: "Sign up",
    googleButton: "Sign up with Google",
    link: "/signin",
    message: ["or", "Have an account?", "Sign in!"],
  },
  signIn: {
    button: "Sign in",
    googleButton: "Google",
    link: "/signup",
    message: ["Or continue with", "Don't have an account?", "Sign up!"],
  },
};

function AuthForm({ type }) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [values, setValues] = useState(initialState);

  const navigate = useNavigate();

  const { email, password } = values;
  const { button, googleButton, link, message } = items[type];

  async function handleSubmit(e) {
    e.preventDefault();

    setIsLoading(true);
    setError("");

    if (!email || !password) return;

    if (type === "signUp") {
      const { error: signUpError } = await supabase.auth.signUp({
        email,
        password,
      });

      if (signUpError) {
        setError(signUpError.message);
      } else {
        navigate("/dashboard");
      }
    } else if (type === "signIn") {
      const { error: signInError } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (signInError) {
        setError(signInError.message);
      } else {
        navigate("/dashboard");
      }
    }

    setValues(initialState);
    setIsLoading(false);
  }

  return (
    <>
      {error ? (
        <p className="text-red mb-1 flex items-center relative -left-[135px]">
          <CiWarning className="h-5 w-5 mr-1" />
          {error}
        </p>
      ) : null}

      <form
        className="bg-green-100 py-10 px-11 rounded-md text-green-500 flex flex-col space-y-10"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col space-y-7 font-medium">
          {inputFields.map((field) => (
            <TextInput
              key={field.label}
              labelClasses="flex flex-col"
              inputClasses="w-96 focus:ring-offset-green-100"
              type={field.type}
              name={field.name}
              placeholder={field.placeholder}
              orgValue={values[field.name]}
              handleChange={(value) =>
                setValues({ ...values, [field.name]: value })
              }
            >
              {field.label}
            </TextInput>
          ))}
        </div>

        <Button
          classes={`border-none ${
            isLoading ? "bg-gray-100" : "bg-green-400"
          } text-white py-2 rounded-lg ${
            !isLoading && "hover:bg-green-500"
          } focus:ring-offset-green-100`}
          type="submit"
          disabled={isLoading}
        >
          {isLoading ? "Loading..." : button}
        </Button>

        <p className="flex items-center before:h-[1px] before:grow before:bg-gray-100 before:mr-3 after:h-[1px] after:grow after:bg-gray-100 after:ml-3">
          {message[0]}
        </p>

        <Button classes="border border-gray-200 py-2 rounded-lg flex items-center justify-center hover:bg-white focus:ring-offset-green-100">
          <FcGoogle className="mr-3 h-6 w-6" />
          {googleButton}
        </Button>

        <div className="flex items-center justify-center">
          <p className="mr-1">{message[1]}</p>
          <Link
            to={link}
            className="text-green-300 transition duration-300 hover:text-green-500"
          >
            {message[2]}
          </Link>
        </div>
      </form>
    </>
  );
}

export default AuthForm;
