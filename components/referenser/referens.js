import Link from "next/link";

const Referens = ({ data }) => {
  return (
    <Link href={`/referenser/${data.slug}`}>
      <div className="relative cursor-pointer">
        <img
          src={data.thumbnail.fields.file.url}
          className="aspect-square object-cover opacity-90"
          alt={data.address}
        />
        <h3 className="absolute bg-white m-2 bottom-0 p-2 left-0 text-h3 desktop:text-h4 font-mono">
          {data.address}
        </h3>
      </div>
    </Link>
  );
};

export default Referens;
