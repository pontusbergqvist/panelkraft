import Form from "../components/form";

export default function Home() {
  return (
    <>
      <article className="text-center my-28">
        <p className="text-[#222] font-light tracking-widest mb-4 font-mono">
          Från start till mål
        </p>
        <div className="w-[50px] h-[2px] mb-4 bg-[#666] mx-auto"></div>
        <h2 className="tracking-wide text-h2 mb-14">Så här jobbar vi</h2>
        <section className="max-w-[1000px] w-full mx-auto grid grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))] gap-5 place-content-center px-2 tablet:px-6 text-center tablet:text-left text-black">
          <div>
            <p>02.</p>
            <h3 className="text-h3 mb-2">Intresseanmäl</h3>
            <p className="text-[#222]">
              Börja med att kontakta oss så berättar vi om möjligheterna hos
              just dig. Vill du hellre bli kontaktad så kan du göra en
              intresseanmälan så ringer vi upp. Efter samtalet bokar vi gärna
              ett kostnadsfritt platsbesök.
            </p>
          </div>
          <div>
            <p>02.</p>
            <h3 className="text-h3 mb-2">Platsbesök</h3>
            <p className="text-[#222]">
              Väl på plats hos er går vi i detalj igenom hur installationen kan
              utföras varpå ni även får ett prisförslag att ta ställning till.
              Vid godkännande av prisförslaget är det äntligen dags för sista
              momentet - installationen.
            </p>
          </div>
          <div>
            <p>03.</p>
            <h3 className="text-h3 mb-2">Installation</h3>
            <p className="text-[#222]">
              Vi genomför samlat installationer hos de som har beställt i
              området. Oavsett om vi börjar hos dig eller grannen så håller vi
              alla informerade om det pågående arbetet tills alla producerar sin
              egen el!
            </p>
          </div>
        </section>
      </article>
      <article className="text-center bg-accent relative py-16 my-28 px-2 tablet:px-8">
        <div className="custom-shape-divider-bottom-1662474846 hidden tablet:block">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
        <div className="custom-shape-divider-bottom-1662476107 hidden tablet:block">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
        <div className="custom-shape-divider-bottom-1662476324 hidden tablet:block">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
        <p className="text-[#222] font-light tracking-widest mb-4 font-mono">
          Tillval
        </p>
        <div className="w-[50px] h-[2px] mb-4 bg-[#666] mx-auto"></div>
        <h2 className="tracking-wide text-h2 mb-4">
          Komplettera era solceller
        </h2>
        <p className="max-w-[700px] mx-auto mb-16 text-[#333]">
          Vid installation av solceller erbjuder vi även tillval i form av
          solcellsbatteri och laddbox för elbilen. Nedan är exempel på våra
          produkter inom respektive segment. Vi installerar alltid utrustning av
          välkända märken.
        </p>
        <section className="max-w-[1000px] w-full mx-auto grid grid-cols-[repeat(auto-fill,_minmax(290px,_1fr))]  place-content-center gap-5 gap-y-12">
          <div className="tablet:text-left">
            <img
              src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80"
              alt="Solar cells"
              className="rounded"
            />
            <h3 className="text-h3 my-3">Solceller</h3>
            <p className="text-[#333]">
              Vi tillhandahåller solceller i både svart och silvrig design. Du
              väljer själv vilken färg du önskar, svart är det mest populära
              valet.
            </p>
          </div>
          <div className="tablet:text-left">
            <img
              src="https://images.unsplash.com/photo-1592318348310-f31b61a931c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
              alt="Solar cells"
              className="rounded"
            />
            <h3 className="text-h3 my-3">Solcellsbatteri</h3>
            <p className="text-[#333]">
              Nyttjar man främst el när solen gått ner kan energilagring vara
              lämpligt. Vi tillhandahåller olika nivåer av batterikapacitet.
            </p>
          </div>
          <div className="tablet:text-left">
            <img
              src="https://images.unsplash.com/photo-1600490819734-6311c5c6f517?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738&q=80"
              alt="Solar cells"
              className="rounded"
            />
            <h3 className="text-h3 my-3">Laddbox</h3>
            <p className="text-[#333]">
              Våra elektriker kan i samband med installationen av solceller
              sätta upp laddbox till bilen. Finns i flera färger.
            </p>
          </div>
        </section>
        {/* <p className="mt-20 underline text-[18px] text-[#111] tracking-wide">
          Se alla tillval
        </p> */}
        <div className="custom-shape-divider-top-1662475761 hidden tablet:block">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
        <div className="custom-shape-divider-top-1662475984 hidden tablet:block">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
        <div className="custom-shape-divider-top-1662476743 hidden tablet:block">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
      </article>
      <article
        id="form"
        className="text-center max-w-[1000px] w-full mx-auto p-2 mt-28 mb-10"
      >
        <p className="text-[#222] font-light tracking-widest mb-4 font-mono">
          Intresseanmälan
        </p>
        <div className="w-[50px] h-[2px] mb-4 bg-[#666] mx-auto"></div>
        <h2 className="tracking-wide text-h2 mb-4">
          Anmäl ditt intresse redan idag
        </h2>
        <div className="max-w-[700px] w-full mx-auto my-4">
          <p className="mb-2">
            Anmäl ditt intresse så kontaktar vi dig och berättar om vad som är
            bra att tänka på om man funderar på att skaffa solceller. Är du
            fortsatt intresserad efter samtalet så bokar vi ett kostnadsfritt
            platsbesök hos dig för att ta fram ett prisförslag.
          </p>
          <Form />
        </div>
      </article>
    </>
  );
}
