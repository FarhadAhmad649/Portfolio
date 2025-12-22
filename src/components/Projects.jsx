import projects from "../assets/projects";

export default function Projects() {
  return (
    <section id="Projects" className="py-20 px-6 md:px-20">
      <h2 className="text-4xl font-bold text-center text-cyan-950">Projects</h2>
      <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((item, index) => (
          <div
            key={index}
            className="border rounded-2xl overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-5 duration-500 transition-all"
          >
            {item.image ? (
              <img
                src={item.image}
                alt={item.title}
                className="h-48 w-full object-cover"
              />
            ) : (
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500">Image Placeholder</span>
              </div>
            )}

            <div className="p-4">
              <h3 className="font-bold text-lg">{item.title}</h3>
              <p className="text-sm text-gray-600 mt-2">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
