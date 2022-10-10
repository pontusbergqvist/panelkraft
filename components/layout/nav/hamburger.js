import Link from "next/link";

const Hamburger = ({ active, setActive, black }) => {
  return (
    <div className="relative" onClick={() => setActive(!active)}>
      <div className="cursor-pointer p-2 h-[40px] w-[50px] flex flex-col justify-between tablet:hidden rounded">
        <span
          style={
            active
              ? { transform: "translateY(5px)" }
              : { transform: "translateY(0px)" }
          }
          className={`w-full h-[2px] rounded block transition-all ${
            black ? "bg-black" : "bg-white"
          }`}
        ></span>
        <span
          style={active ? { width: "0px" } : { width: "100%" }}
          className={`w-full h-[2px] rounded block ${
            black ? "bg-black" : "bg-white"
          }`}
        ></span>
        <span
          style={
            active
              ? { transform: "translateY(-5px)" }
              : { transform: "translateY(0px)" }
          }
          className={`w-full h-[2px] rounded block transition-all ${
            black ? "bg-black" : "bg-white"
          }`}
        ></span>
      </div>
      {active ? (
        <ul className="absolute text-white right-0 flex flex-col mt-1 bg-[#222] rounded text-right z-20">
          <Link href="/">
            <li className="pl-16 my-2 pr-2">Hem</li>
          </Link>
          <Link href="/referenser">
            <li className="pl-16 my-2 pr-2">Referenser</li>
          </Link>
          <Link href="/">
            <li className="pl-16 my-2 pr-2">Om oss</li>
          </Link>
        </ul>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Hamburger;
