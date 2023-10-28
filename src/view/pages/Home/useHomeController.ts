import { useNavigate } from "react-router-dom";

export function useHomeController() {
  const navigate = useNavigate();

  function scrollTo(elementId: string) {
    const section = document.querySelector(`#${elementId}`);
    section?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  return { navigate, scrollTo };
}