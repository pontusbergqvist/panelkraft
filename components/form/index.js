import FormSuccess from "./formSuccess";
import FormBadRequest from "./formBadRequest";
import Name from "./name";
import Email from "./email";
import Phone from "./phone";
import Request from "./request";
import Contact from "./contact";
import { useState } from "react";

const Form = () => {
  const [formWasSent, setFormWasSent] = useState(false);
  const [formSuccess, setFormSuccess] = useState(true);
  const [isOk, setIsOk] = useState(true);
  const [contactIsValid, setContactIsValid] = useState(false);
  const [requestIsValid, setRequestIsValid] = useState(false);

  const formHandler = async (e) => {
    e.preventDefault();
    const body = {};
    Array.from(e.currentTarget.elements).forEach((input) => {
      if (input.hasOwnProperty("checked")) {
        body[input.name] = input.checked;
      } else if (input.name) {
        body[input.name] = input.value;
      }
    });
    if (contactIsValid && requestIsValid) {
      setIsOk(true);
      fetch("/api/form", {
        method: "post",
        body: JSON.stringify(body),
      }).then((res) => {
        setFormWasSent(true);
        if (res.ok) {
          setFormSuccess(true);
        } else {
          setFormSuccess(false);
        }
      });
    } else {
      setIsOk(false);
    }
  };
  return (
    <div className="relative">
      {formWasSent && (formSuccess ? <FormSuccess /> : <FormBadRequest />)}
      <form
        method="post"
        onSubmit={formHandler}
        className="rounded p-2 my-6 border border-[#999] max-w-[450px] w-full mx-auto"
        style={formWasSent ? { display: "none" } : { display: "block" }}
      >
        <div className="max-w-[350px] w-full mx-auto">
          <Name isOk={isOk} />
          <Email isOk={isOk} />
          <Phone isOk={isOk} />
          <Request
            isOk={isOk}
            requestIsValid={requestIsValid}
            setRequestIsValid={setRequestIsValid}
          />
          <Contact
            isOk={isOk}
            contactIsValid={contactIsValid}
            setContactIsValid={setContactIsValid}
          />
          <textarea
            name="meddelande"
            className="border border-black w-full p-1 rounded my-5"
            rows="5"
            placeholder="Valfritt meddelande"
            id=""
          ></textarea>
        </div>
        <button className="bg-accent text-black drop-shadow rounded p-2 px-3 mb-5">
          Skicka
        </button>
      </form>
    </div>
  );
};

export default Form;
