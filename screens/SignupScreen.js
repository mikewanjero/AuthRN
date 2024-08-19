import { useContext, useState } from "react";
import AuthContent from "../components/Auth/AuthContent";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import { CreateUser } from "../util/auth";
import { AuthContext } from "../store/auth-context";

function SignupScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const authCtx = useContext(AuthContext);

  //function called, user authenticated, created, authentication removed for next session
  async function SignUpHandler({ email, password }) {
    setIsAuthenticating(true);
    try {
      const token = await CreateUser(email, password);
      authCtx.authenticate(token);
    } catch (error) {
      Alert.alert(
        "Error Creating Account",
        "Could not create user. Please check your credentials and try again."
      );
      setIsAuthenticating(false);
    }
  }

  if (isAuthenticating) {
    return <LoadingOverlay message="Creating new user...." />;
  }

  return <AuthContent onAuthenticate={SignUpHandler} />;
}

export default SignupScreen;
