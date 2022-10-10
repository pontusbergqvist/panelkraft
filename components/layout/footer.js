import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="w-full bg-[#222] text-[#ccc] p-2 tablet:p-10">
        <article className="max-w-[1000px] w-full h-full mx-auto flex flex-col justify-between tablet:flex-row">
          <section className="flex flex-col tablet:flex-row tablet:items-start items-center">
            <div className="max-w-[300px] h-full flex flex-col tablet:mr-10 my-4 text-center">
              <a href="index.html">
                <img
                  src="/panelkraft-no-icon.png"
                  alt="Solklart logo"
                  className="w-full mb-5"
                />
              </a>
              <p className="text-left">
                Vi levererar nyckelfärdiga installationer av solceller till
                villor, företag och lantbruksfastigheter.
              </p>
            </div>
            <div className="font-mono tracking-wider flex flex-col tablet:items-start items-center">
              <Link href="/">
                <a className="underline py-1">Hem</a>
              </Link>
              <Link href="/referenser">
                <a className="underline py-1">Referenser</a>
              </Link>
              {/* <p className="cursor-pointer underline py-1">Om oss</p> */}
            </div>
          </section>
          <section className="flex flex-col justify-between tablet:mt-0 mt-16 tablet:text-right text-center text-[14px]">
            <div>
              <p>info@panelkraft.nu</p>
              <p>072 - 241 14 45</p>
            </div>
            <div>
              <p>Panelkraft AB</p>
              <p>Jäxviken Skattegården 1</p>
              <p>438 95 Hällingsjö</p>
              <p>Orgnr: 559398-6705</p>
            </div>
          </section>
        </article>
      </footer>
      <p className="bg-[#222] text-[14px] text-center pt-10 pb-3 text-[#666]">
        En del av MW El & Montage
        <br />
      </p>
    </>
  );
};

export default Footer;
