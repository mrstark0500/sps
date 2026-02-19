import { useEffect } from "react";
import { gsap } from "gsap";
import peacock from "../assets/peacock.png";

export default function PageTransition({ onComplete }) {
  useEffect(() => {
    const width = window.innerWidth;
    const isMobile = width < 768;

    const tl = gsap.timeline({
      defaults: { ease: "power3.inOut" },
      onComplete: () => onComplete?.(),
    });

    // Peacock fly across screen
    tl.fromTo(
      ".page-peacock",
      {
        x: isMobile ? "-40vw" : "-30vw",
        y: isMobile ? "90vh" : "100vh",
        scale: isMobile ? 0.8 : 1,
        opacity: 1,
        transformOrigin: "center center",
      },
      {
        x: isMobile ? "120vw" : "110vw",
        y: isMobile ? "-100vh" : "-120vh",
        scale: isMobile ? 7 : 10,
        duration: 2.8,
      }
    )
      .to(".page-peacock", { opacity: 0, duration: 0.4 });
  }, [onComplete]);

  return (
    <div
      className="
        fixed inset-0 z-[9999]
        pointer-events-none overflow-hidden
        bg-gradient-to-br from-white via-emerald-50 to-white
      "
    >
      <img
        src={peacock}
        alt="Peacock"
        className="
          page-peacock
          absolute left-0 bottom-0
          w-[40vw] sm:w-[32vw] md:w-[26vw] lg:w-[20vw]
          select-none
        "
      />
    </div>
  );
}
