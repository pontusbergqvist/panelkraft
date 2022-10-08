import ReferenserSection from "../../components/referenser/referenserSection";
import Contentful from "../../utils/contentful";

export const getStaticProps = async () => {
  const contentful = new Contentful();
  const referenser = await contentful.getAllReferrals();

  return {
    props: {
      referenser,
    },
  };
};

const Referenser = ({ referenser }) => {
  return (
    <>
      <article className="tablet:my-24 my-10 text-center max-w-[1200px] w-full mx-auto p-2">
        <p className="text-[#222] font-light tracking-wider mb-4 font-mono">
          Referenser
        </p>
        <div className="w-[50px] h-[2px] mb-4 bg-[#666] mx-auto"></div>
        <h2 className="text-h2 mb-4 tracking-wide">Våra kundrecensioner</h2>
        <div className="max-w-[700px] w-full mx-auto my-4">
          <p className="mb-2">
            Här nedan kan du ser mer om vilka projekt vi har gjort. Klicka på
            någon av bilderna för att läsa mer om arbetet!
          </p>
        </div>
        <ReferenserSection referenser={referenser} />
      </article>

      <article className="relative bg-[#f3f3f3] h-[300px] center bg-center bg-cover">
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
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
          <p className="text-[23px] mt-3 font-light drop-shadow-xl">
            Vill du också bli kund? Gör en intresseanmälan nedan!
          </p>
          <button className="border mt-6 border-black drop-shadow rounded p-2 px-3">
            Intresseanmälan
          </button>
        </div>
      </article>
    </>
  );
};

export default Referenser;
