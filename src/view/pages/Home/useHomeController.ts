import { useNavigate } from "react-router-dom";

export function useHomeController() {
  const navigate = useNavigate();

  return { navigate };
}