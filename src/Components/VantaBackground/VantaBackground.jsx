import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import NET from "vanta/dist/vanta.net.min";

export default function VantaBackground({ children }) {
  const vantaRef = useRef(null);
  const [effect, setEffect] = useState(null);

  useEffect(() => {
    if (!effect) {
      setEffect(
        NET({
          el: vantaRef.current,
          THREE,
          backgroundColor: 0xffffff,
          color: BF092F,
          points: 10,
          maxDistance: 20,
          spacing: 15,
          showDots: true,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200,
          minWidth: 200,
          scale: 1,
          scaleMobile: 1,
        }),
      );
    }
    return () => {
      if (effect) effect.destroy();
    };
  }, [effect]);

  return (
    <div
      ref={vantaRef}
      style={{ width: "100%", height: "100vh", position: "relative" }}
    >
      {children}
    </div>
  );
}
