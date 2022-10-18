import Layout from "../components/layout";
import Image from "next/image";
import Form from "../components/form";
import Contentful from "../utils/contentful";

export const getStaticProps = async () => {
  const contentful = new Contentful();
  const data = await contentful.getHomePage();
  const pageInfo = await contentful.getPageInfo();

  return {
    props: {
      data,
      pageInfo,
    },
    revalidate: 10,
  };
};

export default function Home({ data, pageInfo }) {
  return (
    <Layout data={pageInfo}>
      <article className="text-center my-28">
        <p className="text-[#222] font-light tracking-widest mb-4 font-mono">
          {data.fields.sektion1TextOvanfrRubrik}
        </p>
        <div className="w-[50px] h-[2px] mb-4 bg-[#666] mx-auto"></div>
        <h2 className="tracking-wide text-h2 mb-14">
          {data.fields.sektion1Rubrik}
        </h2>
        <section className="max-w-[700px] w-full mx-auto grid grid-cols-1 gap-10 place-content-center px-2 tablet:px-6 text-center tablet:text-left justify-center text-black">
          <div className="text-center">
            <Image
              priority={true}
              src={`https:${data.fields.sektion1Cell1Bild.fields.file.url}`}
              alt={data.fields.sektion1Cell1Bild.fields.title}
              height="60%"
              width="100%"
              layout="responsive"
              objectFit="contain"
            />
            <h3 className="text-h3 mb-2">{data.fields.cell1Rubrik}</h3>
            <p className="text-[#222]">{data.fields.sektion1Cell1}</p>
          </div>
          <div className="text-center">
            <Image
              priority={true}
              src={`https:${data.fields.sektion1Cell2Bild.fields.file.url}`}
              alt={data.fields.sektion1Cell2Bild.fields.title}
              height="60%"
              width="100%"
              layout="responsive"
              objectFit="contain"
            />
            <h3 className="text-h3 mb-2">{data.fields.cell2Rubrik}</h3>
            <p className="text-[#222]">{data.fields.sektion1Cell2}</p>
          </div>
          <div className="text-center">
            <Image
              priority={true}
              src={`https:${data.fields.sektion1Cell3BIld.fields.file.url}`}
              alt={data.fields.sektion1Cell3BIld.fields.title}
              height="60%"
              width="100%"
              layout="responsive"
              objectFit="contain"
            />
            <h3 className="text-h3 mb-2">{data.fields.cell3Rubrik}</h3>
            <p className="text-[#222]">{data.fields.sektion1Cell3}</p>
          </div>
          <div className="text-center">
            <Image
              priority={true}
              src={`https:${data.fields.sektion1Cell4Bild.fields.file.url}`}
              alt={data.fields.sektion1Cell4Bild.fields.title}
              height="60%"
              width="100%"
              layout="responsive"
              objectFit="contain"
            />
            <h3 className="text-h3 mb-2">{data.fields.cell4Rubrik}</h3>
            <p className="text-[#222]">{data.fields.sektion1Cell4}</p>
          </div>
          <div className="text-center">
            <Image
              priority={true}
              src={`https:${data.fields.sektion1Cell5Bild.fields.file.url}`}
              alt={data.fields.sektion1Cell5Bild.fields.title}
              height="60%"
              width="100%"
              layout="responsive"
              objectFit="contain"
            />
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
        <p className="text-black font-light tracking-widest mb-4 font-mono">
          {data.fields.sektion2TextOvanfrRubrik}
        </p>
        <div className="w-[50px] h-[2px] mb-4 bg-black mx-auto"></div>
        <h2 className="tracking-wide text-h2 mb-4">
          {data.fields.sektion2Rubrik}
        </h2>
        <p className="max-w-[700px] mx-auto mb-16 text-black">
          {data.fields.sektion2Beskrivning}
        </p>
        <section className="max-w-[1000px] w-full mx-auto grid grid-cols-[repeat(auto-fill,_minmax(290px,_1fr))]  place-content-center gap-5 gap-y-12">
          <div className="tablet:text-left">
            <Image
              priority={true}
              src={`https:${data.fields.sektion2Cell1Bild.fields.file.url}`}
              alt={data.fields.sektion2Cell1Bild.fields.title}
              className="rounded"
              layout="responsive"
              height="80%"
              width="100%"
              objectFit="cover"
            />
            <h3 className="text-h3 my-3">{data.fields.sektion2Cell1Rubrik}</h3>
            <p className="text-black">{data.fields.sektion2Cell1}</p>
          </div>
          <div className="tablet:text-left">
            <Image
              priority={true}
              src={`https:${data.fields.sektion2Cell2Bild.fields.file.url}`}
              alt={data.fields.sektion2Cell2Bild.fields.title}
              className="rounded"
              layout="responsive"
              height="80%"
              width="100%"
              objectFit="cover"
            />
            <h3 className="text-h3 my-3">{data.fields.sektion2Cell2Rubrik}</h3>
            <p className="text-black">{data.fields.sektion2Cell2}</p>
          </div>
          <div className="tablet:text-left">
            <Image
              priority={true}
              src={`https:${data.fields.sektion2Cell3Bild.fields.file.url}`}
              alt={data.fields.sektion2Cell3Bild.fields.title}
              className="rounded"
              layout="responsive"
              height="80%"
              width="100%"
              objectFit="cover"
            />
            <h3 className="text-h3 my-3">{data.fields.sektion2Cell3Rubrik}</h3>
            <p className="text-black">{data.fields.sektion2Cell3}</p>
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
        className="text-center max-w-[1000px] w-full mx-auto p-2 mt- mb-10"
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
    </Layout>
  );
}
