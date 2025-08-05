import Image from "next/image";

export default function PersonCard({ name, role, bio, imageUrl }) {
  return (
    <div className="flex flex-col items-center text-center border rounded-lg p-6 shadow-sm hover:shadow-lg transition">
      <Image
        src={imageUrl}
        alt={name}
        width={160}
        height={160}
        className="rounded-full object-cover mb-4"
      />
      <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
      <p className="text-sm text-gray-700 mb-3">{role}</p>
      <p className="text-sm text-gray-800">{bio}</p>
    </div>
  );
}