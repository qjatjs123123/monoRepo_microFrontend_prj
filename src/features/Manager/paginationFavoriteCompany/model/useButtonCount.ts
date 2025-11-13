import { useState, useEffect } from "react";

export function useButtonCount() {
  const [maxButton, setMaxButtons] = useState(10);
  const [sideButtonCount, setSideButtonCount] = useState(2);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setMaxButtons(5);
        setSideButtonCount(1);
      } else {
        setMaxButtons(10);
        setSideButtonCount(2);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return { maxButton, sideButtonCount };
}
