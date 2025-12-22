export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6 md:px-20 bg-gray-50">
      <h2 className="text-4xl font-bold text-center text-cyan-950">Skills</h2>
      <div className="flex flex-wrap justify-center items-center gap-4 mx-auto mt-8 max-w-200">
        {[
          "HTML",
          "CSS",
          "JavaScript",
          "React",
          "Tailwind",
          "Git",
          "Github",
          "NodeJs",
          "ExpressJs",
          "MongoDb",
        ].map((skill) => (
          <span
            key={skill}
            className="bg-cyan-900 text-white  px-8 py-3 border rounded-full text-md transition-all duration-300 hover:scale-105"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
