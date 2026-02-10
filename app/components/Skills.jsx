const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Bootstrap",
  "Git & GitHub",
];

export default function Skills() {
  return (
    <section className="py-24 px-6 bg-gray-900">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-10 text-cyan-400">
          Skills
        </h2>

        <div className="flex flex-wrap gap-4">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="px-5 py-2 rounded-xl bg-black border border-white/10 text-gray-300 hover:border-cyan-400 hover:text-cyan-400 transition"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
