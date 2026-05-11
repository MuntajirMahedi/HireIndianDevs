import { useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export const useSmoothScroll = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      // If it's an external link, let it be
      if (href.startsWith("http")) return;

      // If it's just a hash or a path with a hash
      const [path, hash] = href.split("#");
      
      const isCurrentPage = path === "" || path === "/" || path === location.pathname;

      if (hash && isCurrentPage) {
        e.preventDefault();
        const element = document.getElementById(hash);
        if (element) {
          const offset = 80; // Offset for fixed header
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
          
          // Update URL without jump
          window.history.pushState(null, "", `#${hash}`);
        }
      } else if (hash) {
        // If it's a different page with a hash, navigate first
        // React Router doesn't automatically scroll to hash on new page usually without extra setup
        // But for now we just navigate
      }
    },
    [location.pathname]
  );

  return { handleNavClick };
};
