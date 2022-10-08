import { BiErrorCircle } from "react-icons/bi";

const FormBadRequest = () => {
  return (
    <div className="my-10">
      <div className="text-[40px] flex flex-col items-center">
        <BiErrorCircle className="text-red-600" />
        <p className="text-[18px] mt-5">Något gick fel! Försök igen senare.</p>
      </div>
    </div>
  );
};

export default FormBadRequest;
