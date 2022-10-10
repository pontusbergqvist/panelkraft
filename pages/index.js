import Form from "../components/form";

export default function Home() {
  return (
    <>
      <article className="text-center my-28">
        <p className="text-[#222] font-light tracking-widest mb-4 font-mono">
          Vår process
        </p>
        <div className="w-[50px] h-[2px] mb-4 bg-[#666] mx-auto"></div>
        <h2 className="tracking-wide text-h2 mb-14">
          Hur vi jobbar på Panelkraft
        </h2>
        <section className="max-w-[1000px] w-full mx-auto grid grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))] gap-10 place-content-center px-2 tablet:px-6 text-center tablet:text-left justify-center text-black">
          <div>
            <h3 className="text-h3 mb-2">Visa ditt intresse</h3>
            <p className="text-[#222]">
              Kom i kontakt med oss via formuläret här på hemsidan. Efter du
              fyllt i dina uppgifter kommer vi att kontakta dig. Vi fångar upp
              grundläggande underlag och gör en förstudie av möjligheterna hos
              just er.
            </p>
          </div>
          <div>
            <h3 className="text-h3 mb-2">Boka ett möte</h3>
            <p className="text-[#222]">
              Varje plats är unik och det krävs ett verkligt möte för att bedöma
              möjligheterna och ta fram ett skarpt anbud. I detta skede bokar vi
              in ett kostnadsfritt platsbesök.
            </p>
          </div>
          <div>
            <h3 className="text-h3 mb-2">Installation</h3>
            <p className="text-[#222]">
              Vi sköter hela processen från start till mål. Våra behöriga
              elektriker och montörer kommer att genomföra installationen
              noggrant, snyggt men framför allt{" "}
              <span className="underline">säkert</span>.
            </p>
          </div>
          <div>
            <h3 className="text-h3 mb-2">Driftsättning</h3>
            <p className="text-[#222]">
              Efter avslutat arbete tar vi ett möte tillsammans med er för att
              gå igenom anläggningen innan vi driftsätter, samt överlämna
              slutdokumentation.
            </p>
          </div>
          <div>
            <h3 className="text-h3 mb-2">Uppföljning</h3>
            <p className="text-[#222]">
              Vi jobbar ständigt med att kvalitetssäkra våra installationer och
              det är viktigt för oss att du som kund känner dig nöjd och
              delaktig hela vägen.
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
          Vi levererar mer än bara solceller!
        </h2>
        <p className="max-w-[700px] mx-auto mb-16 text-[#333]">
          Kanske önskar ni komplettera er anläggning med ett batteri och
          elbilsladdare? Vi jobbar alltid med kvalitativa och välbeprövade
          produkter. Nedan följer exempel på vanliga tillval.
        </p>
        <section className="max-w-[1000px] w-full mx-auto grid grid-cols-[repeat(auto-fill,_minmax(290px,_1fr))]  place-content-center gap-5 gap-y-12">
          <div className="tablet:text-left">
            <img
              src="https://images.unsplash.com/photo-1600490819734-6311c5c6f517?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738&q=80"
              alt="Solar cells"
              className="rounded"
            />
            <h3 className="text-h3 my-3">Tankar på elbil?</h3>
            <p className="text-[#333]">
              Givetvis kan våra elektriker även installera en eller flera
              elbilsladdare i samband med att vi installerar er
              solcellsanläggning.
            </p>
          </div>
          <div className="tablet:text-left">
            <img
              src="https://images.unsplash.com/photo-1592318348310-f31b61a931c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
              alt="Solar cells"
              className="rounded"
            />
            <h3 className="text-h3 my-3">Lagra energi?</h3>
            <p className="text-[#333]">
              Batteri börjar bli ett vanligt komplement till solceller idag! Vi
              konsulterar gärna och förklarar fördelarna med ett batteri och hur
              det fungerar. Något som vi kan komplettera er anläggning med om ni
              önskar!
            </p>
          </div>
          <div className="tablet:text-left">
            <img
              src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80"
              alt="Solar cells"
              className="rounded"
            />
            <h3 className="text-h3 my-3">Typ av anläggning?</h3>
            <p className="text-[#333]">
              Vi har kompetens och erfarenhet inom dem olika systemen och är
              anpassningsbara vad det gäller material. Vi lyssnar på era
              önskemål och lägger därefter fram förslag på anläggning som vi
              anser passar er bäst.
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
          Kontaktformulär
        </p>
        <div className="w-[50px] h-[2px] mb-4 bg-[#666] mx-auto"></div>
        <h2 className="tracking-wide text-h2 mb-4">Vill du veta mer?</h2>
        <div className="max-w-[700px] w-full mx-auto my-4">
          <Form />
        </div>
      </article>
    </>
  );
}
