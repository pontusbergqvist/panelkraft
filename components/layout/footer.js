import Link from "next/link";

const Footer = ({ data }) => {
  return (
    <>
      <div className="w-full bg-[#f3f3f3] py-5">
        <div className="flex flex-col tablet:flex-row justify-between items-center w-full max-w-[1000px] mx-auto px-1">
          <img
            src={data.fields.footerLogo1.fields.file.url}
            alt={data.fields.footerLogo1.fields.title}
            className="my-2"
          />
          <img
            src={data.fields.footerLogo2.fields.file.url}
            alt={data.fields.footerLogo2.fields.title}
            className="my-2"
          />
          <img
            src={data.fields.footerLogo3.fields.file.url}
            alt={data.fields.footerLogo3.fields.title}
            className="my-2"
          />
        </div>
      </div>
      <footer className="w-full bg-accent text-black p-2 tablet:p-10">
        <article className="max-w-[1000px] w-full h-full mx-auto flex flex-col justify-between tablet:flex-row">
          <section className="flex flex-col tablet:flex-row tablet:items-start items-center">
            <div className="max-w-[350px] h-full flex flex-col tablet:mr-10 my-4 text-center">
              <a href="index.html">
                <img
                  src={`https:${data.fields.storLogotypFooter.fields.file.url}`}
                  alt={data.fields.storLogotypFooter.fields.title}
                />
              </a>
              <p className="text-left my-4">{data.fields.slogan}</p>
            </div>
            <div className="font-mono tracking-wider flex flex-col tablet:items-start items-center">
              <Link href="/">
                <a className="underline py-1">Hem</a>
              </Link>
              <Link href="/referenser">
                <a className="underline py-1">Referenser</a>
              </Link>
              <Link href="/om-oss">
                <a className="underline py-1">Om oss</a>
              </Link>
            </div>
          </section>
          <section className="flex flex-col justify-between tablet:mt-0 mt-16 tablet:text-right text-center text-[14px]">
            <div>
              <p>{data.fields.epost}</p>
              <p>{data.fields.telefonnummer}</p>
              <br />
              <p>{data.fields.fretagsnamn}</p>
              <p>{data.fields.adress}</p>
              <p>{data.fields.postnummerOmrde}</p>
              <p>Orgnr: {data.fields.organisationsnummer}</p>
            </div>
          </section>
        </article>
      </footer>
      <p className="bg-accent text-[14px] text-center pt-10 pb-3 text-black">
        En del av MW El & Montage
        <br />
      </p>
    </>
  );
};

export default Footer;
