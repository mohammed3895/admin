import SignUpForm from "~/components/auth/SignUpForm";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign Up",
  description: "Create new account to start using services",
};

const SignUpPage = () => {
  return <SignUpForm />;
};

export default SignUpPage;
