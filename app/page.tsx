import Navbar from "@/components/navbar/Navbar";
import About from "@/components/about/About";
import Experience from "@/components/experience/Experience";
import Projects from "@/components/projects/Projects";
import Overlay from "@/components/overlay/overlay";

export default function Home() {
  //OUTER DIV MUST BE H-MAX-CONTENT...sticky will not work as intended bc if h-screen, then the right side counts as overflow from the outer div.
  //outer div's real height does not account for the overflow and thus sticky nav will eventually scroll

  return (
    <div className="lg:flex mx-auto lg:justify-between lg:gap-4 lg:max-h-max max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0 items-start">
      <Overlay />
      <header className="lg:top-0 lg:sticky lg:min-h-screen lg:flex lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
        <Navbar />
      </header>
      <main id="content" className="pt-24 lg:w-1/2 lg:py-24">
        <div className="flex flex-col gap-8">
          <About />
          <Experience />
          <Projects />

          <footer className="max-w-md pb-16 text-sm text-slate-500 sm:pb-0 mb-10">
            Built with{" "}
            <a
              href="https://nextjs.org/"
              className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
              target="_blank"
              rel="noreferrer"
            >
              Next.js
            </a>
            ,{" "}
            <a
              href="https://tailwindcss.com/"
              className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
              target="_blank"
              rel="noreferrer"
            >
              Tailwind CSS
            </a>
            , and{" "}
            <a
              href="https://ui.shadcn.com/"
              className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
              target="_blank"
              rel="noreferrer"
            >
              shadcn/ui
            </a>
            . All text is set in the{" "}
            <a
              href="https://rsms.me/inter/"
              className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
              target="_blank"
              rel="noreferrer"
            >
              Inter
            </a>{" "}
            typeface.
          </footer>
        </div>
      </main>
    </div>
  );
}
