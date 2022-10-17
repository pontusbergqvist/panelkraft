import { useState } from "react";
import Gallery from "../../components/gallery";
import Contentful from "../../utils/contentful";
import BliKund from "../../components/referenser/bliKund";

export const getStaticPaths = async () => {
  const contentful = new Contentful();
  const paths = await contentful.getAllPaths();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const contentful = new Contentful();
  const referens = await contentful.getReferral(params.referens);
  const pageInfo = await contentful.getPageInfo();
  return {
    props: {
      referens,
      pageInfo,
    },
  };
};

const Referens = ({ referens }) => {
  const [openGallery, setOpenGallery] = useState(false);
  const [image, setImage] = useState(null);
  const onClick = (image) => {
    setImage(image.sys.id);
    setOpenGallery(true);
  };

  return (
    <div style={openGallery ? { position: window.screenY } : {}}>
      {openGallery ? (
        <Gallery
          setOpenGallery={setOpenGallery}
          image={image}
          setImage={setImage}
          images={referens.images}
        />
      ) : (
        <div></div>
      )}
      <div className="max-w-[1200px] w-full mx-auto text-center tablet:my-24 my-10 p-2">
        <p className="text-[#222] font-light tracking-wider mb-4 font-mono">
          Referenser
        </p>
        <div className="w-[50px] h-[2px] mb-4 bg-[#666] mx-auto"></div>
        <h2 className="text-h2 mb-4 tracking-wide">Kundrecension</h2>
        <div className="max-w-[700px] w-full mx-auto my-4">
          {/* <p className="mb-2">
            Här nedan kan du ser mer om vilka projekt vi har gjort. Klicka på
            någon av bilderna för att läsa mer om arbetet!
          </p> */}
        </div>
        <header className="relative">
          <div className="relative before:content-[''] before:h-full before:w-full before:block before:absolute before:bg-black before:opacity-10 before:top-0 my-10">
            <img
              src={referens.thumbnail.fields.file.url}
              alt={referens.thumbnail.fields.description}
              className="w-full"
            />
          </div>
          {/* <p className="absolute bottom-5 left-5 text-h2 bg-white p-2 font-mono">
            {referens.address}
          </p> */}
        </header>
        <main className="my-10 text-center max-w-[1200px] w-full mx-auto p-2">
          <q className="text-h3 italic block">{referens.comment}</q>
          <section className="text-left my-10 flex flex-col items-center desktop:flex-row justify-between">
            <div className="desktop:max-w-[500px] self-start w-full">
              <h2 className="text-h2 mb-4 tracking-wide">{referens.address}</h2>
              <h3 className="font-mono text-h3">Beskrivning av projekt</h3>
              {referens.description.split("\n\n").map((paragraph, index) => (
                <p key={index} className="my-4">
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="p-5 w-full desktop:max-w-[400px] h-full bg-accent font-mono">
              <h3 className="text-h3 my-3">Teknisk data</h3>
              <p className="my-3">
                Antal installerade paneler: {referens.installedPanels}
              </p>
              <p className="my-3">Fabrikat: {referens.manufacturer}</p>
              <p className="my-3">
                Uppskattad genererad effekt: {referens.energy}kW
              </p>
              <p className="my-3">Tillval:</p>
              <ul className="mx-3">
                {referens.addons.map((addon, index) => (
                  <li key={index}>&gt; {addon}</li>
                ))}
              </ul>
            </div>
          </section>
          <section className="mt-10">
            <h3 className="font-mono text-h3 text-left">Bildgalleri</h3>
            <div className="image-gallery grid grid-cols-1 desktop:grid-cols-4 place-content-center gap-1">
              {referens.images.map((image, key) => (
                <img
                  key={key}
                  src={image.fields.file.url}
                  alt={image.fields.description}
                  className="aspect-square object-cover cursor-zoom-in"
                  onClick={() => onClick(image)}
                />
              ))}
            </div>
          </section>
        </main>
      </div>
      <BliKund />
    </div>
  );
};

export default Referens;
