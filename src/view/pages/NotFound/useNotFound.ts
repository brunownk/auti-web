import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../app/hooks/useAuth";

export function useNotFound() {
  const { signedIn } = useAuth();
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate(signedIn ? "/dashboard" : '/', {
      replace: true
    })
  }

  return { handleButtonClick };
}