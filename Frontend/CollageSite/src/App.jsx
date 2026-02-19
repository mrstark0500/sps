import './App.css';
import AppRoutes from './AppRoutes';
import { useState } from "react";
import IntroAnimation from "./components/IntroAnimation";
import PageTransition from "./components/PageTransition";
import DiplomaEnquiryPopup from './DiplomaEnquiryPopup';

function App() {
  const [showIntro, setShowIntro] = useState(
    !localStorage.getItem("introSeen")
  );
  const [showTransition, setShowTransition] = useState(false);

  const handleIntroFinish = () => {
    localStorage.setItem("introSeen", "true");
    setShowIntro(false);
    setShowTransition(true);
    setTimeout(() => setShowTransition(false), 1200);
  };

  return (
    <>
      {/* INTRO */}
      {showIntro && <IntroAnimation onFinish={handleIntroFinish} />}

      {/* PAGE TRANSITION */}
      {!showIntro && showTransition && <PageTransition />}

      {/* ENQUIRY POPUP (AFTER INTRO ONLY) */}
      {!showIntro && <DiplomaEnquiryPopup />}

      {/* MAIN APP */}
      {!showIntro && <AppRoutes />}
    </>
  );
}

export default App;
