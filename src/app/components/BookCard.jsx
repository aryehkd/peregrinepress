import Image from "next/image";
import Link from "next/link";

export default function BookCard({ title, description, imageUrl, href }) {
  return (
    <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition">
      <Image
        src={imageUrl}
        alt={title}
        width={400}
        height={600}
        className="w-full object-cover"
      />
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2">{title}</h3>
        <p className="text-sm text-gray-600 mb-4">{description}</p>
        <Link
          href={href}
          className="text-indigo-600 font-medium hover:underline"
        >
          Learn More →
        </Link>
      </div>
    </div>
  );
}