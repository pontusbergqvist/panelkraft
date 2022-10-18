import OmOssSection from "../components/omOssSection";
import BliKund from "../components/referenser/bliKund";
import Contentful from "../utils/contentful";
import Layout from "../components/layout";

export const getStaticProps = async () => {
  const contentful = new Contentful();
  const data = await contentful.getOmOssPage();
  const pageInfo = await contentful.getPageInfo();

  return {
    props: {
      data,
      pageInfo,
    },
    revalidate: 10,
  };
};

const OmOss = ({ data, pageInfo }) => {
  return (
    <Layout data={pageInfo}>
      <OmOssSection data={data} />
      <BliKund />
    </Layout>
  );
};

export default OmOss;
