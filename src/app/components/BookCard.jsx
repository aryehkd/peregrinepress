import Image from "next/image";
import Link from "next/link";

export default function BookCard({ title, description, imageUrl, href }) {
  return (
    <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition" style={{width: "250px"}}>
      <Image
        src={imageUrl}
        alt={title}
        width={250}
        height={350}
        className="w-[250px] h-[350px] object-fill"
      />
      <div className="p-4">
        <h3 className="font-semibold font-serif text-lg mb-2">{title}</h3>
        <p className="text-sm font-serif text-gray-600 mb-4">{description}</p>
        <Link
          href={href}
          className="text-indigo-600 font-medium hover:underline font-serif"
        >
          Learn More →
        </Link>
      </div>
    </div>
  );
}