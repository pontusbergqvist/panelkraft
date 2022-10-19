import { FcOk, FcCancel } from "react-icons/fc";
import { useState, useEffect } from "react";

const Address = ({ isOk, setAddressIsValid }) => {
  const [value, setValue] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    value.length >= 1 ? setIsValid(true) : setIsValid(false);
  }, [value]);

  useEffect(() => {
    if (isValid) {
      setAddressIsValid(true);
    } else {
      setAddressIsValid(false);
    }
  }, [isValid]);

  return (
    <div className="block text-left my-5">
      <label className="text-[16px]" htmlFor="name">
        Adress:
      </label>
      <div className="relative">
        <input
          name="address"
          type="text"
          placeholder="Adress"
          className="block w-full placeholder:text-black border p-1 border-[#444] rounded placeholder:opacity-40 relative"
          onChange={(e) => setValue(e.target.value)}
          value={value}
          onFocus={() => setIsActive(true)}
          onBlur={() => setIsActive(false)}
        />
        <i className="absolute top-1/2 -translate-y-1/2 right-2">
          {isValid && !isActive && <FcOk />}
          {!isValid && !isActive && value && <FcCancel />}
        </i>
      </div>
      {!isValid && !isActive && (value || !isOk) && (
        <p className="text-red-500 text-[14px]">Fyll i din adress</p>
      )}
    </div>
  );
};

export default Address;
