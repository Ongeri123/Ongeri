import React from "react";

const About = () => {
  return (
    <div className="mt-10 pt-20 px-4 flex flex-col pb-12 w-full max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row gap-12 items-start">
        <div className="flex flex-col">
          <p className="text-accent font-mono text-sm tracking-wide mb-2">
            04 - About Me{" "}
            <span
              style={{
                borderBottom: "solid #7fffb2",
                display: "inline-block",
                width: "80px",
                verticalAlign: "middle",
                marginLeft: "8px",
              }}
            ></span>
          </p>
          <h1 className="text-3xl font-bold text-white mb-8">
            The Human <br /> Behind The Code
          </h1>
          <div className="flex flex-col gap-6">
            <p className="text-muted italic text-lg max-w-3xl">
              I'm a <span className="text-text-main">fullstack developer based in Nairobi</span>, focused on building
              AI-powered web applications that solve concrete, real-world
              problems. I graduated recently but I've been shipping code well
              before that the degree just gave me the theory to match the
              practice.
            </p>
            <p className="text-muted italic text-lg max-w-3xl">
              My edge is sitting comfortably at the intersection of <span className="text-accent">product
              thinking, backend systems, and LLM integration</span>. Most devs know React
              or Python. Fewer can architect a RAG pipeline, wire it to a Flask
              API, and ship a polished React frontend all at once.
            </p>
            <p className="text-muted italic text-lg max-w-3xl">
              I've worked with generative AI tools since before ChatGPT was
              mainstream, which means I understand <span className="text-text-main">not just how to call an API,
              but how to prompt effectively, manage context windows, handle
              hallucinations, and build reliable AI features </span>not just demos.
            </p>
            <p className="text-muted italic text-lg max-w-3xl">
              Currently looking for a <span className="text-text-main">fullstack or AI engineer role</span> (remote or
              Nairobi-based) where I can build products that matter. If you're
              building something interesting, let's talk.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-6">
            <div className="bg-surface border border-muted rounded-lg p-6 w-80">
            <h2 className="text-muted text-xs pb-2">// &nbsp; GET IN TOUCH</h2>
            <div className=" text-text-main text-sm flex flex-col gap-4">
              <a href="ongerinewton10@gmail.com" className="flex items-center gap-2  hover:text-accent transition-colors">
                <span className="border border-muted w-8 h-8 flex items-center justify-center text-xs font-mono">@</span>
                Gmail
              </a>
              <a href="https://www.linkedin.com/in/newton-orina/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2  hover:text-accent transition-colors">
                <span className="border border-muted w-8 h-8 flex items-center justify-center text-xs font-mono">in</span>
                LinkedIn
              </a>
              <a href="https://github.com/Ongeri123" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2  hover:text-accent transition-colors">
                <span className="border border-muted w-8 h-8 flex items-center justify-center text-xs font-mono">gh</span>
                GitHub
              </a>
              <a href="/path-to-cv.pdf" download className="flex items-center gap-2  hover:text-accent transition-colors">
                <span className="border border-muted w-8 h-8 flex items-center justify-center text-xs font-mono">cv</span>
                Download CV
              </a>
            </div>
            </div>
            <div className="bg-surface border border-muted rounded-lg p-6 w-80">
                <h2 className="text-muted text-xs pb-2">// &nbsp;LOOKING FOR</h2>
                <ul className="text-text-main text-sm flex flex-col gap-2">
                   <li>Fullstack or AI Engineer Role</li>
                   <li>AI/LLM Integration role</li>
                    <li>Remote or Nairobi</li>       
                    <li>Open to contract work</li>   
                </ul>      
            </div>
            <div className="bg-surface border border-muted rounded-lg p-6 w-80">
                <h2 className="text-muted text-xs pb-2">// &nbsp;CURRENTLY LEARNING</h2>
                <ul className="text-text-main text-sm flex flex-col gap-2">
                   <li>LangGraph / Agents</li>
                   <li>Docker + CI/CD</li>
                   <li>TypeScript</li>       
                </ul>       
            </div>      
        </div>
      </div>
    </div>
  );
};

export default About;
