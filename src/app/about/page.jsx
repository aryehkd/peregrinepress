import PersonCard from "../components/PersonCard";

const team = [
  {
    name: "Victor Reinking",
    role: "Publisher",
    bio: "Everyday carry plaid polaroid",
    imageUrl: "/people/Victor-Reinking-c4X5.jpg",
  },
  {
    name: "Elhadji Malick Ndiaye",
    role: "Executive Editor",
    bio: "hell of pop-up squid cornhole venmo letterpress",
    imageUrl: "/people/El-Hadji-Malick-Ndiaye.jpg",
  },
  {
    name: "Annie Jamison",
    role: "Executive Editor",
    bio: "hell of pop-up squid cornhole venmo letterpress",
    imageUrl: "/people/C27D1D93-0E4C-4F4F-BC88-36A50392FE95_1_102_o.jpeg",
  },
  {
    name: "Kenny Bates",
    role: "Executive Editor",
    bio: "williamsburg jean shorts quinoa salvia echo park",
    imageUrl: "/people/kenny-bates.jpeg",
  },
];

const advisoryBoard = [
  {
    name: "Ken Bugul",
    role: "Author",
    bio: "",
    imageUrl: "/people/KenBugul.jpg",
  },
  {
    name: "Felwine Sarr",
    role: "Author",
    bio: "",
    imageUrl: "/people/felwine-sarr.png",
  },
  {
    name: "Fatima Matousse",
    role: "Filmmaker",
    bio: "",
    imageUrl: "/people/FatimaMatousse_1.jpg",
  },
  {
    name: "Courtney Erwin, J.D.",
    role: "",
    bio: "",
    imageUrl: "/people/CourtneyErwin.jpg",
  },
  {
    name: "Nabil Yousfi, J.D.",
    role: "",
    bio: "",
    imageUrl: "/people/NabilYousfi.png",
  },
  {
    name: "Mark Ingram",
    role: "Professor of Translational Studies, Goucher College",
    bio: "",
    imageUrl: "/people/MarkIngram.jpeg",
  },
  {
    name: "David Willingham",
    role: "",
    bio: "",
    imageUrl: "",
  },
  {
    name: "Rick Simonson",
    role: "Head Buyer and Readings Coordinator, Elliott Bay Book Company",
    bio: "",
    imageUrl: "/people/RickSimonson.jpg",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#FFFDE7] text-neutral-900">
      

      {/* Dictionary Card */}
      <section className="mx-auto max-w-4xl px-6 pt-10">
        <article
          className="relative rounded-2xl border border-neutral-200 bg-[#636B2F] p-6 shadow-sm sm:p-10"
          aria-labelledby="term"
        >
          {/* Corner accents */}
          <div className="pointer-events-none absolute inset-px rounded-[1rem] ring-1 ring-inset ring-white/60" />
          <div className="pointer-events-none absolute -inset-px -z-10 rounded-2xl bg-gradient-to-br from-white via-white to-neutral-100" />

          <header className="grid grid-cols-1 items-start gap-4 sm:grid-cols-[1fr_auto]">
            <div>
              <h2 id="term" className="font-serif text-4xl sm:text-5xl">
                <span className="mr-2 inline-block rounded-md bg-neutral-900 px-2 py-1 font-serif text-sm font-semibold uppercase tracking-widest text-[#FDE68A]">per·e·gri·nate</span>
              </h2>
              <div className="mt-2 font-serif flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-[#FAF3E0]">
                <span className="font-semibold italic">verb</span>
                <span className="h-1 w-1 rounded-full bg-neutral-300" />
                <span>Latin: <em>peregrinus</em></span>
              </div>
            </div>
            <div className="text-right sm:pt-2">
              <span className="rounded-full bg-neutral-900 px-3 py-1 text-xs font-medium tracking-wide text-[#FDE68A]">
                \ˈpe-rə-grə-ˌnāt\
              </span>
            </div>
          </header>

          <div className="my-6 h-px w-full bg-gradient-to-r from-transparent via-neutral-200 to-transparent" />

          <ol className="space-y-4 pl-5 [counter-reset:step]">
            <li className="relative pl-6">
              <span className="absolute left-0 top-0 inline-flex h-6 w-6 items-center justify-center rounded-full border border-neutral-300 bg-neutral-50 text-xs font-medium text-neutral-700 [counter-increment:step] before:content-[counter(step)]" />
              <p className="max-w-prose font-serif leading-relaxed text-[#FAF3E0] pl-2">
                to travel or wander from place to place.
              </p>
            </li>
          </ol>

          <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-1">
            <section>
              <p className="mt-2 font-serif text-[#FAF3E0]">
                Peregrine Press is named not only after the falcon renowned for its speed and migratory habits, but also after the verb <em>peregrinate</em>, which means to travel from place to place. Our carefully translated works make a journey of their own, from one language into another.
              </p>
            </section>

            <section>
              <p className="mt-2 font-serif text-[#FAF3E0]">
                Cultural peregrination, in the form of storytelling, can work as a bridge between continents. We strive to create a direct route for African literature to reach global readers, with a focus on authentic storytelling and artistic excellence.
              </p>
            </section>
          </div>

          <section className="mt-8">
            <h3 className="font-serif text-xs font-semibold uppercase tracking-widest text-[#FDE68A]">
              Our Mission
            </h3>
            <p className="mt-2 font-serif text-[#FAF3E0]">
              Our passion is sharing Africa’s literary richness in translation — from histories and poetry to vibrant fiction and short stories. We champion linguistic diversity, cultural dialogue, and literature as a conduit for global empathy.
            </p>
          </section>
        </article>
      </section>

      <section className="py-16 px-6 max-w-6xl mx-auto">
          <div className="grid gap-8 md:grid-cols-4">
            {team?.map((person, index) => (
              <PersonCard
                key={index}
                name={person.name}
                role={person.role}
                bio={person.bio}
                imageUrl={person.imageUrl}
                showCornerStamp={false}
              />
            ))}
          </div>
      </section>
      
      <section className="flex justify-center bg-[#FFFDE7] p-18 pt-0">
        <div className="mt-10 w-full max-w-4xl rounded-2xl border border-black bg-[#FFFDE7] p-8 shadow-lg">
          <h2 className="mb-8 text-center font-serif text-2xl font-semibold">
            Advisory Board
          </h2>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
            {advisoryBoard.map((member, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center rounded-xl border border-black/70 bg-[#FFFDE7] p-4 shadow-sm"
              >
                {/* Image (optional / fallback) */}
                {member.imageUrl ? (
                  <img
                    src={member.imageUrl}
                    alt={member.name}
                    className="mb-3 h-20 w-20 rounded-full object-cover"
                  />
                ) : (
                  <div className="mb-3 flex h-20 w-20 items-center justify-center rounded-full border border-black/40 bg-white/60 font-serif text-xl">
                    {member.name.charAt(0)}
                  </div>
                )}

                {/* Name */}
                <div className="text-center font-serif text-base font-semibold">
                  {member.name}
                </div>

                {/* Role (only if present) */}
                {member.role && (
                  <div className="mt-1 text-center font-serif text-sm text-black/70">
                    {member.role}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
  
  