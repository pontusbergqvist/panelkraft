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
              <p>Din kundvänliga installatör av solceller i Västsverige.</p>
            </div>
            <div className="font-mono tracking-wider flex flex-col tablet:items-start items-center">
              <a href="index.html" className="underline py-1">
                Hem
              </a>
              <a href="referenser.html" className="underline py-1">
                Solceller
              </a>
              <p className="cursor-pointer underline py-1">Om oss</p>
            </div>
          </section>
          <section className="flex flex-col justify-between tablet:mt-0 mt-16 tablet:text-right text-center text-[14px]">
            <div>
              <p>hej@soltjanst.se</p>
              <p>031-36 35 780</p>
            </div>
            <p>Öppettider: 08-16</p>
            <div>
              <p>Solklart AB</p>
              <p>Jäxviken Skattegården 1</p>
              <p>438 95 Hällingsjö</p>
              <p>Orgnr: 559022-4878</p>
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
