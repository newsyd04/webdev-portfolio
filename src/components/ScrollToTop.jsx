import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * React Router preserves scroll position across route changes by default.
 * This component scrolls to the top whenever the pathname changes, so
 * clicking a link at the bottom of one page doesn't dump you at the
 * bottom of the next.
 */
export default function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);
  return null;
}
