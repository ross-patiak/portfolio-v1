import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LinkIconDiagonal, LinkIconRight } from "@/components/icons/icons";
import Image from "next/image";

const Projects = () => {
  const projects = [
    {
      title: "BugWatch",
      dates: "Currently in development",
      img: "/bugwatch.png",
      description:
        "A full-stack ticket tracker dashboard built using the T3 Stack. Create teams, add users, and track the progress of their work. Inspired by project trackers like Jira and Asana.",
      link: "https://bugwatch.vercel.app/",
      technologies: [
        "Next.js",
        "Prisma",
        "tRPC",
        "NextAuth",
        "React Query",
        "MySQL",
        "React",
        "Typescript",
      ],
    },

    {
      title: "KING Clothing",
      dates: "",
      img: "/kingclothing.png",
      description:
        "Fully-functioning e-commerce web application in my early days of learning React. Uses Redux, Firebase, and Stripe API to handle cart management, authentication, and process user payments.",
      link: "https://ross-patiak.github.io/KingClothing/",
      technologies: ["React", "Redux", "Firebase", "Javascript"],
    },
  ];

  return (
    <section
      id="projects"
      className="mb-7 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24 mt-12"
    >
      <div className="flex flex-col gap-1 group/list">
        {projects?.map((proj) => (
          <Card
            key={proj.title}
            className="group [&:not(:hover)]:border-transparent transition-all bg-clip-padding hover:bg-slate-800/50 pb-1 hover:!opacity-100 hover:backdrop-blur-xl hover:drop-shadow-lg shadow-none rounded-lg lg:group-hover/list:opacity-50"
          >
            <a target="_blank" rel="noopener noreferrer" href={proj.link}>
              <CardContent className="flex pt-6 gap-5">
                <header className="z-10 mb-2 mt-1 text-xs leading-loose font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2 w-1/4">
                  <Image
                    src={proj.img as string}
                    width={200}
                    height={112.5}
                    className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
                    alt="Project Image"
                  />
                </header>
                <div className="flex flex-col w-3/4">
                  <h3 className="font-medium leading-snug text-slate-200">
                    <div className="inline-flex font-medium leading-tight text-slate-200 group-hover:text-teal-300 focus-visible:text-teal-300 text-base items-center transition-all">
                      <span>
                        {`${proj.title}`}
                        <LinkIconDiagonal />
                      </span>
                    </div>
                  </h3>

                  {proj.dates !== "" ? (
                    <div
                      className="text-slate-500 text-sm mt-1 font-semibold italic"
                      aria-hidden="true"
                    >
                      {proj.dates}
                    </div>
                  ) : null}

                  <p className="mt-2 text-sm leading-normal">
                    {proj.description}{" "}
                    {/* {proj.title === "BugWatch" && (
                      <span className="font-semibold text-sm italic">
                        Currently in development.
                      </span>
                    )} */}
                  </p>

                  <ul className="mt-2 flex flex-wrap">
                    {proj?.technologies?.map((tech) => (
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
        href="https://github.com/ross-patiak"
      >
        <span className="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">
          View Project Archive
        </span>
        <span className="text-sm">
          <LinkIconRight />
        </span>
      </a>
    </section>
  );
};

export default Projects;
