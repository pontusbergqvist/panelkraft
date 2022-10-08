import useWindow from "../../hooks/useWindow";
import { useRef } from "react";

const Cursor = ({ text, position }) => {
  const mobile = useWindow();
  const cursor = useRef();

  return (
    <div>
      {mobile ? (
        <p
          ref={cursor}
          className={`test absolute bg-white text-black text-h4 z-20 ${
            text ? "p-2" : ""
          } -translate-x-1/2 -translate-y-1/2 pointer-events-none`}
          style={{ top: position.y, left: position.x }}
        >
          {text}
        </p>
      ) : (
        <div></div>
      )}
    </div>
  )
} 

export default Cursor;