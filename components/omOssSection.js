import Image from "next/image";

const OmOssSection = ({ data }) => {
  const {
    beskrivningDavid,
    beskrivningMarkus,
    beskrivningSida,
    rubrik,
    textOvanfrRubrik,
    yrkestitelDavid,
    yrkestitelMarkus,
    bildMarkus,
    bildDavid,
  } = data.fields;

  const getDescriptionBlocks = (text) => {
    return text.split("\n\n");
  };

  return (
    <article className="text-center my-28">
      <p className="text-[#222] font-light tracking-widest mb-4 font-mono">
        {textOvanfrRubrik}
      </p>
      <div className="w-[50px] h-[2px] mb-4 bg-[#666] mx-auto"></div>
      <h2 className="tracking-wide text-h2 mb-4">{rubrik}</h2>
      <p className="max-w-[700px] mx-auto mb-16 text-[#333]">
        {beskrivningSida}
      </p>
      <div className="grid grid-cols-1 desktop:grid-cols-2 text-left gap-10 max-w-[1200px] mx-auto px-3">
        <div>
          <Image
            src={`https:${bildMarkus.fields.file.url}`}
            alt={bildMarkus.fields.title}
            layout="responsive"
            height="70%"
            width="100%"
            objectFit="cover"
          />
          <p className="text-h3 mt-3">Markus Wilson</p>
          <p className="italic mb-3">{yrkestitelMarkus}</p>
          {getDescriptionBlocks(beskrivningMarkus).map((text, index) => (
            <p className="my-3" key={index}>
              {text}
            </p>
          ))}
        </div>
        <div>
          <Image
            src={`https:${bildDavid.fields.file.url}`}
            alt={bildDavid.fields.title}
            layout="responsive"
            height="70%"
            width="100%"
            objectFit="cover"
          />
          <p className="text-h3 mt-3">David Estehghari</p>
          <p className="italic mb-3">{yrkestitelDavid}</p>
          {getDescriptionBlocks(beskrivningDavid).map((text, index) => (
            <p className="my-3" key={index}>
              {text}
            </p>
          ))}
        </div>
      </div>
    </article>
  );
};

export default OmOssSection;
