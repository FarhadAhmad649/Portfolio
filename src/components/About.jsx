export default function About() {
  return (
    <section id="About" className="py-20 px-6 md:px-20 bg-gray-50">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-4xl font-bold text-cyan-950">About Me</h2>
          <p className="mt-2 text-gray-600">Oghi, District Mansehra, KPK</p>
        </div>
        <div className="text-gray-700 leading-relaxed">
          <p>
            I'm a front-end developer focused on building responsive and
            user‑friendly interfaces using React and Tailwind CSS.
          </p>
          <ul className="list-disc mt-4 ml-4">
            <li>Strong HTML, CSS, JavaScript fundamentals</li>
            <li>React & Tailwind focused projects</li>
            <li>Git & GitHub workflow experience</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
