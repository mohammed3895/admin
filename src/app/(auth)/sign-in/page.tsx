import SignInForm from "~/components/auth/SignInForm";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign In",
  description: "Sign in to your account now.",
};

const SignInPage = () => {
  return <SignInForm />;
};

export default SignInPage;
