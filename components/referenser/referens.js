import Link from "next/link";
import Image from "next/image";

const Referens = ({ data }) => {
  return (
    <Link href={`/referenser/${data.slug}`}>
      <div className="relative cursor-pointer">
        <Image
          priority={true}
          src={`https:${data.thumbnail.fields.file.url}`}
          className="aspect-square object-cover opacity-90"
          alt={data.address}
          layout="responsive"
          height="90%"
          width="100%"
        />
        <h3 className="absolute bg-white m-2 bottom-0 p-2 left-0 text-h3 desktop:text-h4 font-mono">
          {data.address}
        </h3>
      </div>
    </Link>
  );
};

export default Referens;
