import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import PageTransition from "./PageTransition";
import IntroAnimation from "./IntroAnimation";

export default function AnimatedRoute({ children }) {
  const location = useLocation();

  const [showIntro, setShowIntro] = useState(false);
  const [showTransition, setShowTransition] = useState(false);
  const [ready, setReady] = useState(false); // render children only when ready

  useEffect(() => {
    const introSeen = localStorage.getItem("introSeen");

    if (location.pathname === "/" && !introSeen) {
      // show intro animation
      setShowIntro(true);
      setReady(false);
    } else {
      // skip intro, show page transition for other routes
      setShowIntro(false);
      setShowTransition(true);
      setReady(true);
    }
  }, [location.pathname]);

  const handleIntroFinish = () => {
    setShowIntro(false);
    setReady(true); // now show main content
  };

  const handleTransitionFinish = () => {
    setShowTransition(false);
  };

  return (
    <>
      {/* Intro animation only for home */}
      {showIntro && <IntroAnimation onFinish={handleIntroFinish} />}

      {/* Page transition for other routes */}
      {showTransition && <PageTransition onComplete={handleTransitionFinish} />}

      {/* Render main content only when ready */}
      {ready && (
        <div
          style={{
            opacity: showTransition || showIntro ? 0 : 1,
            transition: "opacity 0.5s ease",
          }}
        >
          {children}
        </div>
      )}
    </>
  );
}
