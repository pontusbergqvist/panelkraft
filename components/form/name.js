import { FcOk, FcCancel } from "react-icons/fc";
import { useState, useEffect } from "react";

const Name = ({ isOk }) => {
  const [value, setValue] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    /[a-zA-Z]+\s+[a-zA-Z]+/g.test(value) ? setIsValid(true) : setIsValid(false);
  }, [value]);

  return (
    <div className="block text-left my-5">
      <label className="text-[16px]" htmlFor="name">
        Namn:
      </label>

      <div className="relative">
        <input
          name="name"
          type="text"
          placeholder="För & efternamn"
          className="block w-full placeholder:text-black border p-1 border-[#444] rounded placeholder:opacity-40"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onFocus={() => setIsActive(true)}
          onBlur={() => setIsActive(false)}
        />
        <i className="absolute top-1/2 -translate-y-1/2 right-2">
          {isValid && !isActive && <FcOk />}
          {!isValid && !isActive && value && <FcCancel />}
        </i>
      </div>
      {!isValid && !isActive && (value || !isOk) && (
        <p className="text-red-500 text-[14px]">Fyll i för och efternamn</p>
      )}
    </div>
  );
};

export default Name;
