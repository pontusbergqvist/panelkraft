import Link from "next/link";
import { useRouter } from "next/router";
import Hamburger from "./hamburger";

const Nav = ({ active, setActive }) => {
  const router = useRouter();

  return (
    <div
      className={`relative overflow-hidden h-screen before:content-[''] before:h-full before:w-full before:block before:absolute before:bg-black before:opacity-60 before:top-0 before:z-10`}
      style={router.route === "/" ? { height: "85vh" } : { height: "40vh" }}
    >
      <video
        src="/header-1920-nosound.mp4"
        muted
        autoPlay
        loop
        className="min-w-full min-h-full object-cover"
        style={
          router.route === "/"
            ? { transform: "translateY(0)" }
            : { transform: "translateY(-20vh)" }
        }
      ></video>
      <nav className="absolute top-0 left-1/2 text-lg -translate-x-1/2 flex justify-between items-center w-full max-w-[1000px] px-2 py-4 text-white z-20">
        <Link href="/">
          <a>
            <img
              src="/small-logo.png"
              alt="Solklart logo"
              className="w-[50px] hidden tablet:inline"
            />
          </a>
        </Link>
        <div className="tablet:flex items-center ml-5 mr-auto font-mono hidden">
          <Link href="/">
            <a
              className="px-2 mx-1 hover:text-[#ccc]"
              style={
                router.route === "/"
                  ? { textDecoration: "underline" }
                  : { textDecoration: "none" }
              }
            >
              Hem
            </a>
          </Link>
          <Link href="/referenser">
            <a
              className="px-2 mx-1 hover:text-[#ccc]"
              style={
                router.route === "/referenser"
                  ? { textDecoration: "underline" }
                  : { textDecoration: "none" }
              }
            >
              Referenser
            </a>
          </Link>
          {/* <Link href="/">
            <a className="px-2 mx-1 hover:text-[#ccc]">Om oss</a>
          </Link> */}
        </div>
        <Link href="/#form">
          <button className="border-b-2 ml-10 text-left border-b-accent text-[16px] text-white drop-shadow tablet:block hidden">
            Gör en intresseanmälan
          </button>
        </Link>
        <Hamburger active={active} setActive={setActive} />
      </nav>
      <div className="absolute mt-14 tablet:mt-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-[90%] flex flex-col items-center z-20">
        <img
          src="/panelkraft-no-icon.png"
          alt="Solklart logo"
          className="max-w-[650px] w-[80%] mx-auto"
        />
        <div
          className="flex flex-col items-center"
          style={
            router.route !== "/" ? { display: "none" } : { display: "flex" }
          }
        >
          <p className="text-white tablet:text-[20px] my-8 font-light drop-shadow-xl font-mono">
            Vi levererar kompletta installationer av solceller för villor och
            företagsfastigheter.
          </p>
          <Link href="/#form">
            <button className="border text-white border-accent drop-shadow rounded p-2 px-3 hidden tablet:block">
              Intresseanmälan
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Nav;
