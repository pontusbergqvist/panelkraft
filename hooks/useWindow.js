import { useState, useEffect } from "react";

const useWindow = () => {
  const [width, setWidth] = useState(0);

  const handler = () => setWidth(window.innerWidth);

  useEffect(() => {
    if (typeof window !== "undefined") {
      handler(); // Set initial browser width on component mount
      window.addEventListener("resize", handler);
    }
    return () => window.removeEventListener("resize", handler);
  });

  return width >= 640 ? true : false;
};

export default useWindow;
