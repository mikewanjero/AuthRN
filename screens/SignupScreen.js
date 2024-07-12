import { useState } from "react";
import AuthContent from "../components/Auth/AuthContent";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import { CreateUser } from "../util/auth";

function SignupScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  //function called, user authenticated, created, authentication removed for next session
  async function SignUpHandler({ email, password }) {
    setIsAuthenticating(true);
    await CreateUser(email, password);
    setIsAuthenticating(false);
  }

  if (isAuthenticating) {
    return <LoadingOverlay message="Creating new user...." />;
  }

  return <AuthContent onAuthenticate={SignUpHandler} />;
}

export default SignupScreen;
