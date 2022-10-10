import Referens from "./referens";
import useWindow from "../../hooks/useWindow";

const ReferenserSection = ({ referenser }) => {
  const mobile = useWindow();

  return (
    <section
      classme={`${
        mobile ? "image-gallery" : ""
      } grid grid-cols-[repeat(auto-fill,_minmax(320px,_1fr))] place-content-center mt-14 gap-3`}
    >
      {referenser.length !== 0 &&
        referenser.map((referens) => (
          <Referens key={referens.slug} data={referens} />
        ))}
      {referenser.length === 0 && <div className="rounded bg-slate-400 p-2"><p className="text-center">Vi håller på att sätta upp vårat system för referenser! Om bildgalleriet är tomt, kika in här igen om ett tag.</p></div>}
    </section>
  );
};

export default ReferenserSection;
