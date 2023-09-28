import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LinkIconDiagonal, LinkIconRight } from "@/components/icons/icons";

const Experience = () => {
  const jobs = [
    {
      jobTitle: "Frontend Developer",
      dates: "May 2021 — May 2023",
      company: "PfizerPro Medical",
      description:
        "Developed high-quality, robust, and adaptable core Web Components that are currently being used by Pfizer web applications in over 35 global markets.  Oversaw discussions and collaboration across different teams regarding component development, as well as component redesigns. Regularly performed code and design reviews, and provided guidance through mentorship of junior team members.",
      link: "https://pfizermedical.pfizerpro.com/",
      technologies: [
        "Stencil.js",
        "React",
        "Typescript",
        "GrapesJS",
        "Storybook",
        "Jest",
        "Puppeteer",
        "Abode Analytics",
      ],
    },

    {
      jobTitle: "Software Engineer",
      dates: "Mar 2021 — May 2023",
      company: "Tata Consultancy Services",
      description:
        "Coordinated the frontend development initiative of a PoC which aimed replace and/or enhance the building process of web apps under Pfizer's PfizerPro umbrella. Spearheaded the building process of a PoC application to visualize and manage internal organizational data using D3.js and Python.",
      link: "https://www.tcs.com/",
      technologies: ["D3.js", "Python", "Javascript", "Adobe AEM Franklin"],
    },
  ];

  return (
    <section id="work" className="flex flex-col">
      <div className="flex flex-col gap-1 group/list">
        {jobs?.map((job) => (
          <Card
            key={job.jobTitle}
            className="group [&:not(:hover)]:border-transparent transition-all bg-clip-padding hover:bg-slate-800/50 pb-1 hover:!opacity-100 hover:backdrop-blur-xl hover:drop-shadow-lg shadow-none rounded-lg lg:group-hover/list:opacity-50"
          >
            <a target="_blank" rel="noopener noreferrer" href={job.link}>
              <CardContent className="flex pt-6 gap-2">
                <header className="z-10 mb-2 mt-1 text-xs leading-loose font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2 w-1/5">
                  {job.dates}
                </header>
                <div className="flex flex-col w-4/5">
                  <h3 className="font-medium leading-snug text-slate-200">
                    <div className="inline-flex font-medium leading-tight text-slate-200 group-hover:text-teal-300 focus-visible:text-teal-300 text-base items-center transition-all">
                      <span>
                        {`${job.jobTitle} · ${job.company}`}
                        <LinkIconDiagonal />
                      </span>
                    </div>
                  </h3>

                  <p className="mt-2 text-sm leading-normal">
                    {job.description}
                  </p>

                  <ul className="mt-2 flex flex-wrap">
                    {job.technologies.map((tech) => (
                      <li key={tech} className="mr-1.5 mt-2">
                        <Badge
                          className="flex items-center rounded-full bg-teal-400/10 hover:bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300"
                          variant="secondary"
                        >
                          {tech}
                        </Badge>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </a>
          </Card>
        ))}
      </div>

      <a
        className="inline-flex items-center leading-tight text-slate-200 font-semibold group mt-6 pl-2"
        href="/resume.pdf"
      >
        <span className="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">
          View Full Résumé
        </span>
        <span className="text-sm">
          <LinkIconRight />
        </span>
      </a>
    </section>
  );
};

export default Experience;
