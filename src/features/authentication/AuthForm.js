import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CiWarning } from "react-icons/ci";
import { supabase } from "../../services/supabase";
import TextInput from "../../components/form/TextInput";
import Button from "../../components/elements/Button";
import GoogleAuth from "./GoogleAuth";

const inputFields = [
  {
    label: "Email",
    type: "email",
    name: "email",
    required: true,
    placeholder: "Enter your email",
  },
  {
    label: "Password",
    type: "password",
    name: "password",
    required: true,
    placeholder: "Enter your password",
  },
];

const initialState = { email: "", password: "" };

const items = {
  signUp: {
    button: "Sign up",
    googleButton: "Sign in with Google",
    link: "/signin",
    message: ["or", "Have an account?", "Sign in!"],
  },
  signIn: {
    button: "Sign in",
    googleButton: "Sign in with Google",
    link: "/signup",
    message: ["or", "Don't have an account?", "Sign up!"],
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

    try {
      setIsLoading(true);
      setError("");

      if (!email || !password) return;

      if (type === "signUp") {
        const { error: signUpError } = await supabase.auth.signUp({
          email,
          password,
        });

        if (signUpError) {
          throw signUpError;
        }

        navigate("/profile");
      } else if (type === "signIn") {
        const { error: signInError } = await supabase.auth.signInWithPassword({
          email,
          password,
        });

        if (signInError) {
          throw signInError;
        }

        navigate("/dashboard");
      }
    } catch (error) {
      console.error(error);
      setError(error.message);
    } finally {
      setValues(initialState);
      setIsLoading(false);
    }
  }

  return (
    <>
      {error ? (
        <p className="text-red mb-1 flex items-center relative -left-[135px]">
          <CiWarning className="h-5 w-5 mr-1" />
          {error}
        </p>
      ) : null}

      <div className="sm:bg-green-100 py-4 px-5 sm:py-10 sm:px-11 rounded-md text-green-500 flex flex-col space-y-10">
        <form className="flex flex-col space-y-10" onSubmit={handleSubmit}>
          <div className="flex flex-col space-y-7 font-medium">
            {inputFields.map((field) => (
              <TextInput
                key={field.label}
                labelClasses="flex flex-col text-white sm:text-current"
                inputClasses="w-[300px] sm:w-96 focus:ring-offset-green-500 sm:focus:ring-offset-green-100"
                field={field}
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
              isLoading ? "bg-gray-100" : "bg-green-300 sm:bg-green-400"
            } text-white py-2 rounded-lg ${
              !isLoading && "hover:bg-green-400 sm:hover:bg-green-500"
            } focus:ring-offset-green-500 sm:focus:ring-offset-green-100`}
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : button}
          </Button>
        </form>

        <p className="flex items-center text-white sm:text-current before:h-[1px] before:grow before:bg-gray-100 before:mr-3 after:h-[1px] after:grow after:bg-gray-100 after:ml-3">
          {message[0]}
        </p>

        <GoogleAuth googleButton={googleButton} />

        <div className="flex items-center justify-center">
          <p className="text-white sm:text-current mr-1">{message[1]}</p>
          <Link
            to={link}
            className="text-green-100 sm:text-green-300 transition duration-300 hover:text-green-200 sm:hover:text-green-500 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-green-500 sm:focus:ring-offset-green-100"
          >
            {message[2]}
          </Link>
        </div>
      </div>
    </>
  );
}

export default AuthForm;
