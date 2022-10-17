import OmOssSection from "../components/omOssSection";
import Form from "../components/form";
import Contentful from "../utils/contentful";

export const getStaticProps = async () => {
  const contentful = new Contentful();
  const omOssPage = await contentful.getOmOssPage();
  const pageInfo = await contentful.getPageInfo();
  const data = await contentful.getHomePage();

  return {
    props: {
      data,
      omOssPage,
      pageInfo,
    },
  };
};

export default function Home({ data, omOssPage }) {
  return (
    <>
      <article className="text-center my-28">
        <p className="text-[#222] font-light tracking-widest mb-4 font-mono">
          {data.fields.sektion1TextOvanfrRubrik}
        </p>
        <div className="w-[50px] h-[2px] mb-4 bg-[#666] mx-auto"></div>
        <h2 className="tracking-wide text-h2 mb-14">
          {data.fields.sektion1Rubrik}
        </h2>
        <section className="max-w-[1000px] w-full mx-auto grid grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))] gap-10 place-content-center px-2 tablet:px-6 text-center tablet:text-left justify-center text-black">
          <div>
            <h3 className="text-h3 mb-2">{data.fields.cell1Rubrik}</h3>
            <p className="text-[#222]">{data.fields.sektion1Cell1}</p>
          </div>
          <div>
            <h3 className="text-h3 mb-2">{data.fields.cell2Rubrik}</h3>
            <p className="text-[#222]">{data.fields.sektion1Cell2}</p>
          </div>
          <div>
            <h3 className="text-h3 mb-2">{data.fields.cell3Rubrik}</h3>
            <p className="text-[#222]">{data.fields.sektion1Cell3}</p>
          </div>
          <div>
            <h3 className="text-h3 mb-2">{data.fields.cell4Rubrik}</h3>
            <p className="text-[#222]">{data.fields.sektion1Cell4}</p>
          </div>
          <div>
            <h3 className="text-h3 mb-2">{data.fields.cell5Rubrik}</h3>
            <p className="text-[#222]">{data.fields.sektion1Cell5}</p>
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
          {data.fields.sektion2TextOvanfrRubrik}
        </p>
        <div className="w-[50px] h-[2px] mb-4 bg-[#666] mx-auto"></div>
        <h2 className="tracking-wide text-h2 mb-4">
          {data.fields.sektion2Rubrik}
        </h2>
        <p className="max-w-[700px] mx-auto mb-16 text-[#333]">
          {data.fields.sektion2Beskrivning}
        </p>
        <section className="max-w-[1000px] w-full mx-auto grid grid-cols-[repeat(auto-fill,_minmax(290px,_1fr))]  place-content-center gap-5 gap-y-12">
          <div className="tablet:text-left">
            <img
              src="https://images.unsplash.com/photo-1600490819734-6311c5c6f517?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738&q=80"
              alt="Solar cells"
              className="rounded"
            />
            <h3 className="text-h3 my-3">{data.fields.sektion2Cell1Rubrik}</h3>
            <p className="text-[#333]">{data.fields.sektion2Cell1}</p>
          </div>
          <div className="tablet:text-left">
            <img
              src="https://images.unsplash.com/photo-1592318348310-f31b61a931c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
              alt="Solar cells"
              className="rounded"
            />
            <h3 className="text-h3 my-3">{data.fields.sektion2Cell2Rubrik}</h3>
            <p className="text-[#333]">{data.fields.sektion2Cell2}</p>
          </div>
          <div className="tablet:text-left">
            <img
              src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80"
              alt="Solar cells"
              className="rounded"
            />
            <h3 className="text-h3 my-3">{data.fields.sektion2Cell3Rubrik}</h3>
            <p className="text-[#333]">{data.fields.sektion2Cell3}</p>
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
      <div className="mt-40">
        <OmOssSection data={omOssPage} />
      </div>
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
