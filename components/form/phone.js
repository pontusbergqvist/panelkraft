import { useState, useEffect } from "react";
import { FcOk, FcCancel } from "react-icons/fc";

const Phone = ({ isOk, setPhoneIsValid }) => {
  const [value, setValue] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const input = value.split("").filter((char) => /\d/.test(char));
    (input[0] === "0" || input[0] === "4") &&
    input.length >= 9 &&
    input.length <= 11
      ? setIsValid(true)
      : setIsValid(false);
  }, [value]);

  useEffect(() => {
    if (isValid) {
      setPhoneIsValid(true);
    } else {
      setPhoneIsValid(false);
    }
  }, [isValid]);

  return (
    <div className="block text-left my-5">
      <label className="text-[16px]" htmlFor="name">
        Telefonnummer:
      </label>
      <div className="relative">
        <input
          name="phone"
          type="tel"
          placeholder="Telefonnummer"
          className="block w-full placeholder:text-black border p-1 border-[#444] rounded placeholder:opacity-40"
          onChange={(e) => setValue(e.target.value)}
          value={value}
          onFocus={() => setIsActive(true)}
          onBlur={() => setIsActive(false)}
        />
        <i className="absolute top-1/2 -translate-y-1/2 right-2">
          {value && isValid && <FcOk />}
          {!isValid && !isActive && value && <FcCancel />}
        </i>
      </div>
      {!isValid && !isActive && (value || !isOk) && (
        <p className="text-red-500 text-[14px]">
          Kontrollera ditt telefonnummer
        </p>
      )}
    </div>
  );
};

export default Phone;
