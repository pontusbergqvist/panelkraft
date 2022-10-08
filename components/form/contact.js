import { useState, useEffect } from "react";

const Contact = ({ isOk, contactIsValid, setContactIsValid }) => {
  const [phoneIsChecked, setPhoneIsChecked] = useState(false);
  const [emailIsChecked, setEmailIsChecked] = useState(false);

  useEffect(() => {
    !phoneIsChecked && !emailIsChecked
      ? setContactIsValid(false)
      : setContactIsValid(true);
  }, [phoneIsChecked, emailIsChecked]);

  return (
    <div className="flex flex-col text-left my-5">
      <p className="text-[16px] mb-1">Kontakta mig via:</p>
      <div className="flex">
        <div className="mr-8">
          <input
            id="contactmail"
            className="mr-1"
            type="checkbox"
            name="contactmail"
            onChange={() => setEmailIsChecked(!emailIsChecked)}
          />
          <label htmlFor="contactmail">E-post</label>
        </div>
        <div>
          <input
            id="contactphone"
            className="mr-1"
            type="checkbox"
            name="contactphone"
            onChange={() => setPhoneIsChecked(!phoneIsChecked)}
          />
          <label htmlFor="contactphone">Telefon</label>
        </div>
      </div>
      {!contactIsValid && !isOk && (
        <p className="text-red-500 text-[14px]">
          Välj minst ett sätt att bli kontaktad på
        </p>
      )}
    </div>
  );
};

export default Contact;
