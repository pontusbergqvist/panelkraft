import Referens from "./referens";
import useWindow from "../../hooks/useWindow";

const ReferenserSection = ({ referenser }) => {
  const mobile = useWindow();

  return (
    <section
      className={`${
        mobile ? "image-gallery" : ""
      } grid grid-cols-[repeat(auto-fill,_minmax(320px,_1fr))] place-content-center mt-14 gap-3`}
    >
      {referenser.map((referens) => (
        <Referens key={referens.slug} data={referens} />
      ))}
    </section>
  );
};

export default ReferenserSection;
