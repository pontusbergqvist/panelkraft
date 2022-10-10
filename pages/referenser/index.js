import BliKund from "../../components/referenser/bliKund";
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
      <BliKund />
    </>
  );
};

export default Referenser;
