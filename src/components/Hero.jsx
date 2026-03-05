import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfinity } from "@fortawesome/free-solid-svg-icons";

const Hero = () => {
  return (
    <div className="hero grid grid-cols-1 lg:grid-cols-2 gap-10 lg:items-center">
      <div className="p-0 ml-4 lg:ml-20">
        <div
          className="flex items-center gap-2 text-muted border border-white/7 
                  rounded-sm px-3 py-1 font-mono text-xs tracking-wide  
                  w-fit mb-6"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          Available for work · Kenya / Remote
        </div>
        <h1 className="text-accent font-display font-extrabold text-6xl">
          Newton Orina
        </h1>
        <p className="text-muted italic font-body text-lg max-w-2xl">
          Fullstack developer building{" "}
          <span className="text-accent not-italic text-white font-bold">
            AI-powered products
          </span>{" "}
          that solve real problems from intelligent document systems to
          real-time collaborative tools.
        </p>
        <div className="flex space-x-2 mt-6">
          <div className="bg-accent border rounded-lg px-4 py-2">
            <button className="cta-button cursor-pointer">View Projects</button>
          </div>
          <div className="border border-white/10 rounded-lg px-4 py-2 hover:border-accent transition-colors">
            <button className="cta-button text-text-main cursor-pointer">
              Download CV
            </button>
          </div>
        </div>
      </div>

      <div className="bg-surface grid grid-cols-2 grid-rows-4 gap-4 w-full lg:w-1/2 border border-white/10 p-4 rounded-lg mr-4 lg:mr-20 lg:ml-auto">
        <div className="col-span-2">
          <h1 className="text-muted text-base font-display font-light m-2">
            // Current Stack
          </h1>
        </div>
        {[
          "React",
          "Flask/Python",
          "Supabase",
          "JavaScript",
          "PostgreSQL",
          "OpenAI API",
          "LangChain",
          "JWT Auth",
        ].map((tech) => (
          <div
            key={tech}
            className="bg-surface2 border border-white/10 rounded-lg p-2 text-xs font-mono text-text-main flex justify-center items-center text-center break-words overflow-hidden"
          >
            {tech}
          </div>
        ))}
        <div className="col-span-2 mt-4 flex border-t border-white/10 pt-4 gap-10 justify-start">
          <div className="flex flex-col items-center">
            <h1 className="text-accent font-extrabold text-2xl">3+</h1>
            <p className="text-muted">AI Projects</p>
          </div>
          <div className="flex flex-col items-center">
            <h1 className="text-accent  font-extrabold text-2xl">4</h1>
            <p className="text-muted">Live Apps</p>
          </div>
          <div className="flex flex-col items-center">
            <h1 className="text-accent  font-extrabold text-2xl">
              <FontAwesomeIcon icon={faInfinity} />
            </h1>
            <p className="text-muted">Coffee</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
