/* eslint-disable react/no-unescaped-entities */
const About = () => {
  return (
    <section
      id="about"
      className="mb-14 scroll-mt-16 md:mb-24 lg:mb-34 lg:scroll-mt-24"
      aria-label="About me"
    >
      <div>
        <p className="mb-4 leading-[1.55]">
          Just a guy who got bit by the coding bug nearly a decade ago and has
          never looked back. As a passionate coder and a true problem-solver, I
          develop web applications with elegance, efficiency, and scalability in
          mind.
        </p>
        <p className="mb-4 leading-[1.55]">
          My main skills center around the{" "}
          <span className="font-medium text-slate-200">React</span> ecosystem
          (Next.js, Redux, Tanstack Query, etc.) and{" "}
          <span className="font-medium text-slate-200">Typescript</span> for the
          frontend, and{" "}
          <span className="font-medium text-slate-200">Python, NoSQL,</span> and{" "}
          <span className="font-medium text-slate-200">SQL</span> for the
          backend.
        </p>
        <p className="mb-4 leading-[1.55]">
          Currently, I am looking for new opportunities to further my journey as
          a developer. If you'd like to know more about me, you can check out my
          full{" "}
          <a
            className="font-medium text-slate-200 hover:text-teal-300 hover:decoration-teal-300 focus-visible:decoration-teal-300 focus-visible:text-teal-300 decoration-slate-400/40 underline-offset-2 underline"
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
          >
            résumé
          </a>
          , or you can reach out to me for any reason at{" "}
          <a
            className="font-medium text-slate-200 hover:text-teal-300 hover:decoration-teal-300 focus-visible:decoration-teal-300 focus-visible:text-teal-300 decoration-slate-400/50 underline-offset-2 underline"
            href="mailto:ross.patiak@gmail.com"
          >
            ross.patiak@gmail.com
          </a>
          .
        </p>
      </div>
    </section>
  );
};

export default About;
