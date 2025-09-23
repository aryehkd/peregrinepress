'use client'

import PersonCard from "../components/PersonCard";
import { useState, useMemo } from "react";

export default function AuthorsPage() {
    const team = [
      {
        name: "Abdallah Zrika",
        role: "Morocco",
        bio: "",
        imageUrl: "/people/zrika2.jpeg",
      },
      {
        name: "Author Name",
        role: "Algeria",
        bio: "",
        imageUrl: "/images/team/michael.jpg",
      },
      {
        name: "Author Name",
        role: "Morocco",
        bio: "",
        imageUrl: "/images/team/sofia.jpg",
      },
      {
        name: "Author Name",
        role: "Morocco",
        bio: "",
        imageUrl: "/images/team/sofia.jpg",
      },
      {
        name: "Author Name",
        role: "Morocco",
        bio: "",
        imageUrl: "/images/team/sofia.jpg",
      },
      {
        name: "Author Name",
        role: "Morocco",
        bio: "",
        imageUrl: "/images/team/sofia.jpg",
      },
      {
        name: "Author Name",
        role: "Morocco",
        bio: "",
        imageUrl: "/images/team/sofia.jpg",
      },
      {
        name: "Author Name",
        role: "Morocco",
        bio: "",
        imageUrl: "/images/team/sofia.jpg",
      },
      {
        name: "Author Name",
        role: "Morocco",
        bio: "",
        imageUrl: "/images/team/sofia.jpg",
      },
      {
        name: "Author Name",
        role: "Morocco",
        bio: "",
        imageUrl: "/images/team/sofia.jpg",
      },
    ];

    const [search, setSearch] = useState("");

    const filteredTeam = useMemo(() => {
      return team.filter((person) =>
        person.name.toLowerCase().includes(search.toLowerCase())
      );
    }, [team, search]);
  
    return (
      <main className="min-h-screen bg-[#FFFDE7]">
        <section className="py-16 px-6 max-w-6xl mx-auto">
   
          <div className="flex flex-col md:flex-row items-center justify-between mb-8 gap-4">
          <h1 className="text-4xl font-serif text-gray-900">Authors</h1>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search authors..."
            className="w-full md:w-64 px-4 py-2 border border-gray-300 rounded-lg shadow-sm 
            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
            text-gray-900 placeholder-gray-500"          />
        </div>

          <div className="grid gap-8 md:grid-cols-3">
            {filteredTeam.map((person, index) => (
              <PersonCard
                key={index}
                name={person.name}
                role={person.role}
                bio={person.bio}
                imageUrl={person.imageUrl}
              />
            ))}
            {filteredTeam.length === 0 && (
            <p className="col-span-full font-serif text-center text-gray-500">
              No authors found.
            </p>
          )}
          </div>
        </section>
      </main>
    );
  }
  