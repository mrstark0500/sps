import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import peacock from "../assets/peacock.png";

export default function IntroAnimation({ onFinish }) {
  const peacockRef = useRef(null);
  const introRef = useRef(null);

  useEffect(() => {
    const width = window.innerWidth;
    const isMobile = width < 768;

    const tl = gsap.timeline({
      defaults: { ease: "power3.out" },
      onComplete: () => onFinish?.(),
    });

    // 1️⃣ Entrance from bottom-left (or adjusted for mobile)
    tl.fromTo(
      peacockRef.current,
      {
        x: isMobile ? "-30vw" : "-40vw",
        y: isMobile ? "30vh" : "40vh",
        scale: isMobile ? 0.6 : 0.5,
        opacity: 0,
        rotate: -15,
      },
      {
        x: 0,
        y: 0,
        scale: 1,
        opacity: 1,
        rotate: 0,
        duration: 3,
      }
    )

      // 2️⃣ Peacock spin
      .to(peacockRef.current, { rotateY: 180, duration: 1.2 })
      .to(peacockRef.current, { rotateY: 360, duration: 1.2 })

      // 3️⃣ Gentle horizontal swing
      .to(peacockRef.current, {
        x: isMobile ? -8 : -12,
        duration: 0.8,
        yoyo: true,
        repeat: 4,
      })

      // 4️⃣ Zoom out dramatic exit
      .to(peacockRef.current, {
        scale: isMobile ? 2.5 : 4,
        duration: 2.5,
        ease: "power4.inOut",
      })

      // 5️⃣ Small pause before fade
      .to({}, { duration: 0.5 })

      // 6️⃣ Fade out the intro overlay
      .to(introRef.current, { opacity: 0, duration: 1, pointerEvents: "none" });
  }, [onFinish]);

  return (
    <div
      ref={introRef}
      className="fixed inset-0 flex items-center justify-center bg-white z-9999"
    >
      <img
        ref={peacockRef}
        src={peacock}
        alt="Peacock"
        style={{
          width: "clamp(120px, 22vw, 260px)",
          pointerEvents: "none",
          userSelect: "none",
          transformStyle: "preserve-3d",
        }}
      />
    </div>
  );
}
