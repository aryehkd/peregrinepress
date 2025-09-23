import Image from "next/image";

export default function PersonCard({ name, role, bio, imageUrl }) {
  return (
    <div className="flex flex-col items-center text-center border rounded-lg p-6 shadow-sm hover:shadow-lg transition">
      <div className="w-40 h-40 rounded-full overflow-hidden mb-4">
        <Image
          src={imageUrl}
          alt={name}
          width={160}
          height={160}
          className="object-cover w-full h-full"
        />
      </div>
      <h3 className="text-lg font-serif font-semibold text-gray-900">{name}</h3>
      <p className="text-sm font-serif text-gray-700 mb-3">{role}</p>
      <p className="text-sm font-serif text-gray-800">{bio}</p>
    </div>
  );
}