"use client";

import { GitHubIcon, LinkedInIcon, MailIcon } from "@/components/icons/icons";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [sectionId, setSectionId] = useState("about");

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const box = document.querySelector("main");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setSectionId(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: "0% 0% -50% 0%",
        threshold: 0.3,
      }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });
  }, []);

  return (
    <div className="flex flex-col grow justify-between">
      <div className="flex grow flex-col">
        <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
          <a href="/">Ross Patiak</a>
        </h1>
        <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
          Full-Stack Software Engineer
        </h2>
        <p className="mt-4 max-w-xs leading-normal">
          I build accessible, inclusive products and digital experiences for the
          web.
        </p>

        <nav className="nav hidden lg:block">
          <ul className="mt-16 w-max">
            <li>
              <a className="group flex items-center py-3" href="#about">
                <span
                  className={cn(
                    "nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none",
                    {
                      "w-16 bg-slate-200": sectionId === "about",
                    }
                  )}
                ></span>
                <span
                  className={cn(
                    "nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200",
                    {
                      "text-slate-200": sectionId === "about",
                    }
                  )}
                >
                  About
                </span>
              </a>
            </li>
            <li>
              <a className="group flex items-center py-3" href="#work">
                <span
                  className={cn(
                    "nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none",
                    {
                      "w-16 bg-slate-200": sectionId === "work",
                    }
                  )}
                ></span>
                <span
                  className={cn(
                    "nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200",
                    {
                      "text-slate-200": sectionId === "work",
                    }
                  )}
                >
                  Experience
                </span>
              </a>
            </li>
            <li>
              <a className="group flex items-center py-3" href="#projects">
                <span
                  className={cn(
                    "nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none",
                    {
                      "w-16 bg-slate-200": sectionId === "projects",
                    }
                  )}
                ></span>
                <span
                  className={cn(
                    "nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200",
                    {
                      "text-slate-200": sectionId === "projects",
                    }
                  )}
                >
                  Projects
                </span>
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <ul
        className="ml-1 mt-8 flex items-center gap-[2px]"
        aria-label="Social media"
      >
        <li className="mr-5 text-xs">
          <a
            className="block hover:text-slate-200"
            href="https://github.com/ross-patiak"
            target="_blank"
            rel="noreferrer"
          >
            <span className="sr-only">GitHub</span>
            <GitHubIcon />
          </a>
        </li>
        <li className="mr-5 text-xs">
          <a
            className="block hover:text-slate-200"
            href="https://www.linkedin.com/in/ross-patiak/"
            target="_blank"
            rel="noreferrer"
          >
            <span className="sr-only">LinkedIn</span>
            <LinkedInIcon />
          </a>
        </li>
        <li className="mr-5 text-xs">
          <a
            className="block hover:text-slate-200"
            href="mailto:ross.patiak@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <span className="sr-only">Email</span>
            <MailIcon />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
