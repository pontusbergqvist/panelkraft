import { useEffect, useState } from "react";

const Request = ({ isOk, requestIsValid, setRequestIsValid }) => {
  const [vetaMerIsChecked, setVetaMerIsChecked] = useState(false);
  const [bokaIsChecked, setBokaIsChecked] = useState(false);

  useEffect(() => {
    !vetaMerIsChecked && !bokaIsChecked
      ? setRequestIsValid(false)
      : setRequestIsValid(true);
  }, [vetaMerIsChecked, bokaIsChecked]);

  return (
    <div className="flex flex-col text-left my-5">
      <p className="text-[16px] mb-1">Jag vill:</p>
      <div className="flex">
        <div className="mr-8">
          <input
            className="mr-1"
            type="checkbox"
            name="veta"
            id="veta"
            onChange={() => setVetaMerIsChecked(!vetaMerIsChecked)}
          />
          <label htmlFor="veta">Veta mer</label>
        </div>
        <div>
          <input
            className="mr-1"
            type="checkbox"
            name="boka"
            id="boka"
            onChange={() => setBokaIsChecked(!bokaIsChecked)}
          />
          <label htmlFor="boka">Boka platsbesök</label>
        </div>
      </div>
      {!requestIsValid && !isOk && (
        <p className="text-red-500 text-[14px]">
          Välj något av alternativen ovan
        </p>
      )}
    </div>
  );
};

export default Request;
