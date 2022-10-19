import Link from "next/link";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/router";
import Hamburger from "./hamburger";

const Nav = ({ active, setActive, data }) => {
  const [lowBatteryMode, setLowBatteryMode] = useState(false);
  const router = useRouter();
  const video = useRef();

  useEffect(() => {
    video &&
      video.current
        .play()
        .then(() => {
          setLowBatteryMode(false);
        })
        .catch((err) => {
          setLowBatteryMode(true);
        });
  }, []);

  return (
    <div
      className={`relative overflow-hidden w-screen h-screen bg-center before:content-[''] before:h-full before:w-full before:block before:absolute before:bg-black before:opacity-40 before:top-0 before:z-10 ${
        router.route === "/" ? "tablet:h-[85vh] h-screen" : "h-[55vh]"
      }`}
    >
      <video
        src="/panelkraft.mov"
        autoPlay
        muted
        playsInline
        loop
        className="min-w-full min-h-full object-cover"
        ref={video}
        style={lowBatteryMode ? { display: "none" } : { display: "block" }}
      ></video>
      {lowBatteryMode && (
        <img
          src={`https:${data.fields.headerFallback.fields.file.url}`}
          alt={data.fields.headerFallback.fields.title}
          className="h-full object-cover"
        />
      )}
      <nav className="absolute top-0 left-1/2 text-lg -translate-x-1/2 flex justify-between items-center w-full max-w-[1000px] px-2 py-4 text-white z-20">
        <Link href="/">
          <a>
            <Image
              src={`https:${data.fields.litenLogotyp.fields.file.url}`}
              alt={data.fields.litenLogotyp.fields.title}
              className="w-[50px] hidden tablet:inline"
              width="50px"
              height="50px"
            />
          </a>
        </Link>
        <div className="tablet:flex items-center ml-5 mr-auto font-mono hidden">
          <Link href="/">
            <a
              className="mx-3 hover:text-[#ccc]"
              style={
                router.route === "/"
                  ? { borderBottom: "2px solid #f37f04" }
                  : { textDecoration: "none" }
              }
            >
              Hem
            </a>
          </Link>
          <Link href="/referenser">
            <a
              className="mx-3 hover:text-[#ccc]"
              style={
                router.route.includes("/referenser")
                  ? { borderBottom: "2px solid #f37f04" }
                  : { textDecoration: "none" }
              }
            >
              Referenser
            </a>
          </Link>
          <Link href="/om-oss">
            <a
              className="mx-3 hover:text-[#ccc]"
              style={
                router.route === "/om-oss"
                  ? { borderBottom: "2px solid #f37f04" }
                  : { textDecoration: "none" }
              }
            >
              Om oss
            </a>
          </Link>
        </div>
        <Link href="/#form">
          <button className="border-b-2 ml-10 text-left border-b-accent text-white font-mono drop-shadow tablet:block hidden">
            Kontakt
          </button>
        </Link>
        <Hamburger active={active} setActive={setActive} />
      </nav>
      <div className="absolute mt-14 tablet:mt-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-[40%] text-center w-[90%] flex flex-col items-center z-20">
        <img
          src={`https:${data.fields.storLogotyp.fields.file.url}`}
          alt={data.fields.storLogotyp.fields.title}
          className="max-w-[650px] w-[80%] mx-auto mb-4"
        />
        <div
          className="flex flex-col items-center"
          style={
            router.route !== "/" ? { display: "none" } : { display: "flex" }
          }
        >
          <p className="text-white tablet:text-[20px] my-8 font-light drop-shadow-xl font-mono header-text">
            {data.fields.slogan}
          </p>
          <Link href="/#form">
            <button className="border text-white border-accent drop-shadow rounded p-2 px-3 hidden tablet:block">
              Kontakta oss
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Nav;

// {`bg-[url('https://images.unsplash.com/photo-1629726797843-618688139f5a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=4000&q=80')]
