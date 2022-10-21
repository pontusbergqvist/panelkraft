import Head from "next/head";
import Layout from "../../components/layout";
import BliKund from "../../components/referenser/bliKund";
import ReferenserSection from "../../components/referenser/referenserSection";
import Contentful from "../../utils/contentful";

export const getStaticProps = async () => {
  const contentful = new Contentful();
  const referenser = await contentful.getAllReferrals();
  const page = await contentful.getReferralPage();
  const pageInfo = await contentful.getPageInfo();

  return {
    props: {
      referenser,
      page,
      pageInfo,
    },
    revalidate: 10,
  };
};

const Referenser = ({ referenser, page, pageInfo }) => {
  const { textOvanfrRubrik, rubrik, beskrivning } = page.fields;
  return (
    <>
      <Head>
        <link
          rel="shortcut icon"
          href={`https:${pageInfo.fields.litenLogotyp.fields.file.url}`}
        />
      </Head>
      <Layout data={pageInfo}>
        <article className="tablet:my-24 my-10 text-center max-w-[1200px] w-full mx-auto p-2">
          <p className="text-[#222] font-light tracking-wider mb-4 font-mono">
            {textOvanfrRubrik}
          </p>
          <div className="w-[50px] h-[2px] mb-4 bg-[#666] mx-auto"></div>
          <h2 className="text-h2 mb-4 tracking-wide">{rubrik}</h2>
          <div className="max-w-[700px] w-full mx-auto my-4">
            <p className="mb-2">{beskrivning}</p>
          </div>
          <ReferenserSection referenser={referenser} />
        </article>
        <BliKund />
      </Layout>
    </>
  );
};

export default Referenser;
