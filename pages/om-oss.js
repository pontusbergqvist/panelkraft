import OmOssSection from "../components/omOssSection";
import BliKund from "../components/referenser/bliKund";
import Contentful from "../utils/contentful";

export const getStaticProps = async () => {
  const contentful = new Contentful();
  const data = await contentful.getOmOssPage();
  const pageInfo = await contentful.getPageInfo();

  return {
    props: {
      data,
      pageInfo,
    },
  };
};

const OmOss = ({ data }) => {
  return (
    <>
      <OmOssSection data={data} />
      <BliKund />
    </>
  );
};

export default OmOss;
