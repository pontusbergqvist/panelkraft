import Link from "next/link";
import Hamburger from "./hamburger";

const Nav = ({ active, setActive }) => {
  return (
    <div className="tablet:bg-[#333] tablet:text-white">
      <nav className="mx-auto text-lg flex justify-between items-center w-full max-w-[1000px] px-2 py-4">
        <Link href="/">
          <a className="invisible tablet:visible">
            <img
              src="/small-logo.png"
              alt="Solklart logo"
              className="w-[50px]"
            />
          </a>
        </Link>
        <div className="items-center ml-5 mr-auto font-mono tablet:flex hidden">
          <Link href="/">
            <a className="px-2 mx-1 hover:text-[#ccc]">Hem</a>
          </Link>
          <Link href="/referenser">
            <a className="px-2 mx-1 hover:text-[#ccc]">Referenser</a>
          </Link>
          {/* <Link href="/">
            <a className="px-2 mx-1 hover:text-[#ccc]">Om oss</a>
          </Link> */}
        </div>
        <Link href="/#form">
          <button className="tablet:block hidden border-b-2 ml-10 border-b-white text-[16px]">
            Gör en intresseanmälan
          </button>
        </Link>
        <Hamburger active={active} setActive={setActive} black={true} />
      </nav>
    </div>
  );
};

export default Nav;
