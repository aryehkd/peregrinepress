import PersonCard from "../components/PersonCard";

export default function AuthorsPage() {
    const team = [
      {
        name: "Author Name",
        role: "Morocco",
        bio: "Everyday carry plaid polaroid",
        imageUrl: "/images/team/alexandra.jpg",
      },
      {
        name: "Author Name",
        role: "Algeria",
        bio: "hell of pop-up squid cornhole venmo letterpress",
        imageUrl: "/images/team/michael.jpg",
      },
      {
        name: "Author Name",
        role: "Morocco",
        bio: "williamsburg jean shorts quinoa salvia echo park",
        imageUrl: "/images/team/sofia.jpg",
      },
    ];
  
    return (
      <main className="min-h-screen bg-white">
        <section className="py-16 px-6 max-w-6xl mx-auto">
          <h1 className="text-4xl font-serif mb-8 text-center text-gray-900">
            Authors
          </h1>
          <p className="text-gray-800 max-w-2xl mx-auto text-center mb-12">
            Peregrine Press is dedicated to publishing bold, distinctive voices in
            contemporary literature. Meet the people who make it all possible.
          </p>
          <div className="grid gap-8 md:grid-cols-3">
            {team.map((person, index) => (
              <PersonCard
                key={index}
                name={person.name}
                role={person.role}
                bio={person.bio}
                imageUrl={person.imageUrl}
              />
            ))}
          </div>
        </section>
      </main>
    );
  }
  