import { FcCheckmark } from "react-icons/fc";

const FormSuccess = () => {
  return (
    <div className="my-10">
      <div className="text-[40px] flex flex-col items-center">
        <FcCheckmark />
        <p className="text-[18px] mt-5">
          Vi har tagit emot din anmälan! Tack för ditt intresse.
        </p>
      </div>
    </div>
  );
};

export default FormSuccess;
