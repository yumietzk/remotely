export const authForm = {
  inputFields: [
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
  ],
  items: {
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
  },
};
