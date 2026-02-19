import { useState, useEffect } from "react";
import IntroAnimation from "./IntroAnimation";

/**
 * Wrap your Routes or pages with IntroRoute to show
 * intro animation before the content renders.
 */
export default function IntroRoute({ children }) {
  const [showIntro, setShowIntro] = useState(!localStorage.getItem("introSeen"));
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    if (!showIntro) {
      setShowContent(true); // skip intro if already seen
    }
  }, [showIntro]);

  const handleFinish = () => {
    localStorage.setItem("introSeen", "true");
    setShowIntro(false);

    // small delay to render content after fade out
    setTimeout(() => setShowContent(true), 300);
  };

  return (
    <>
      {/* Show Intro if not seen */}
      {showIntro && <IntroAnimation onFinish={handleFinish} />}

      {/* Show wrapped content */}
      {showContent && children}
    </>
  );
}
