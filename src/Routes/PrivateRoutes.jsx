import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../Firebase/FirebaseConfig";

export default function PrivateRoutes({ children }) {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);

  if (!user) {
    navigate("/signin");
  }

  return children;
}
