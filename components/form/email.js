import { FcOk, FcCancel } from "react-icons/fc";
import { useEffect, useState } from "react";

const Email = ({ isOk, setEmailIsValid }) => {
  const [value, setValue] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    /([-!#-'*+/-9=?A-Z^-~]+(\.[-!#-'*+/-9=?A-Z^-~]+)*|"([]!#-[^-~ \t]|(\\[\t -~]))+")@[0-9A-Za-z]([0-9A-Za-z-]{0,61}[0-9A-Za-z])?(\.[0-9A-Za-z]([0-9A-Za-z-]{0,61}[0-9A-Za-z])?)+/.test(
      value
    )
      ? setIsValid(true)
      : setIsValid(false);
  }, [value]);

  useEffect(() => {
    if (isValid) {
      setEmailIsValid(true);
    } else {
      setEmailIsValid(false);
    }
  }, [isValid]);

  return (
    <div className="block text-left my-5">
      <label className="text-[16px]" htmlFor="name">
        E-post:
      </label>
      <div className="relative">
        <input
          name="email"
          type="email"
          placeholder="E-postadress"
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
        <p className="text-red-500 text-[14px]">Kontrollera din e-post</p>
      )}
    </div>
  );
};

export default Email;
