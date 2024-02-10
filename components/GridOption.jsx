import Link from "next/link";
import Image from 'next/image'
import { cn } from "@/lib/utils";

const GridOptions = ({ title, className, image }) => {
  return (
    <Link
      href={{
        pathname: "/search",
        query: { q: title },
      }}
      className={cn('grid-option relative', className)}
    >
      <h2 className="text-xl font-bold">{title}</h2>
      {image && (
        <Image
        src={image}
        alt={title}
        layout='fill'
        className='object-cover opacity-20 rounded-md'
        />
      )}
    </Link>
  );
};

export default GridOptions;
