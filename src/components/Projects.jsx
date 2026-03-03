import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faPen, faCode } from "@fortawesome/free-solid-svg-icons";  

const ProjectCard = ({ project }) => (
  <div className="mt-12 p-4 md:p-6 border border-white/10 rounded-lg w-full max-w-4xl">
    <div className="flex flex-col md:flex-row md:justify-between gap-4">
      <div className="flex flex-col gap-2 flex-1">
        <p className="text-muted text-sm pb-4">{project.label}</p>
        <h2 className="text-xl text-white font-bold">{project.title}</h2>
        <p className="text-muted italic">{project.description}</p>
      </div>
      <div className="flex flex-col gap-4 md:ml-20">
        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-muted text-xs border border-muted p-2 rounded-md flex items-center gap-2 hover:border-accent transition-colors whitespace-nowrap">
          Live Demo <FontAwesomeIcon icon={faArrowRight} className="text-accent text-xs" />
        </a>
        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-muted text-xs border border-muted p-2 rounded-md flex items-center gap-2 hover:border-accent transition-colors whitespace-nowrap">
          GitHub <FontAwesomeIcon icon={faCode} className="text-accent text-xs" />
        </a>
        <a href={project.caseStudyUrl} target="_blank" rel="noopener noreferrer" className="text-muted text-xs border border-muted p-2 rounded-md flex items-center gap-2 hover:border-accent transition-colors whitespace-nowrap">
          Case Study <FontAwesomeIcon icon={faPen} className="text-accent text-xs" />
        </a>
      </div>
    </div>
    <div className="flex flex-wrap gap-2 mt-4">
      {project.techStack.map((tech) => {
        const colorMap = {
          'bg-accent': 'bg-accent/10 text-accent border-accent/20',
          'bg-periwinkle': 'bg-periwinkle/10 text-periwinkle border-periwinkle/20',
          'bg-coral': 'bg-coral/10 text-coral border-coral/20',
          'bg-amber': 'bg-amber/10 text-amber border-amber/20'
        };
        return (
          <span key={tech.name} className={`${colorMap[tech.color]} border font-mono text-xs px-2 py-0.5 rounded-sm tracking-wide uppercase`}>
            {tech.name}
          </span>
        );
      })}
    </div>
    <div className="mt-6 border-t border-white/10 pt-4 flex flex-wrap gap-4 md:gap-10">
      {project.stats.map((stat, index) => (
        <div key={index} className="flex flex-col">
          <p className="text-muted text-xs">{stat.label}</p>
          <p className="text-white text-sm">{stat.value}</p>
        </div>
      ))}
    </div>
  </div>
);

const Projects = () => {
  const projects = [
    {
      label: "Project 01 - AI Integration + RAG",
      title: "DocuMind - AI Document Intelligence",
      description: "Upload PDFs and contracts, then chat with them. Uses RAG pipeline with pgvector to retrieve context-aware answers, highlight source passages, and compare multiple documents.",
      liveUrl: "https://documind.ongeri.com",
      githubUrl: "https://github.com/ongeri/documind",
      caseStudyUrl: "https://documind.ongeri.com",
      techStack: [
        { name: "OpenAI GPT-4", color: "bg-periwinkle" },
        { name: "LangChain RAG", color: "bg-coral" },
        { name: "React", color: "bg-accent" },
        { name: "Flask API", color: "bg-amber" },
        { name: "pgvector", color: "bg-periwinkle" },
        { name: "Supabase", color: "bg-accent" },
      ],
      stats: [
        { label: "Avg Query Time", value: "1.2s response" },
        { label: "Docs Supported", value: "PDF, DOCX, TXT" },
        { label: "Architecture", value: "RAG + pgvector" },
      ],
    },
    {
      label: "Project 02 - Real-Time + WebSockets",
      title: "SyncBoard - Collaborative Whiteboard + AI",
      description: "Real-time collaborative whiteboard where users draw, annotate, and invite an AI assistant to generate diagrams or explain concepts sketched on the canvas.",
      liveUrl: "https://documind.ongeri.com",
      githubUrl: "https://github.com/ongeri/documind",
      caseStudyUrl: "https://documind.ongeri.com",
      techStack: [
        { name: "React + Konva.js", color: "bg-periwinkle" },
        { name: "Flask + Socket.IO", color: "bg-coral" },
        { name: "GPT-4 Vision", color: "bg-accent" },
        { name: "Supabase Realtime", color: "bg-amber" },
        { name: "JWT Auth", color: "bg-periwinkle" },
      ],
      stats: [
        { label: "Latency", value: "80ms sync" },
        { label: "Concurrent Users", value: "Tested with 20+" },
        { label: "Transport", value: "WebSocket / WS" },
      ],
    },
    {
      label: "Project 03 - Data + Analytics",
      title: "DevPulse - GitHub Productivity Dashboard",
      description: "Connects to GitHub OAuth to visualize commit patterns, PR velocity, language usage over time, with an AI coach that generates personalized weekly productivity insights.",
      liveUrl: "https://documind.ongeri.com",
      githubUrl: "https://github.com/ongeri/documind",
      caseStudyUrl: "https://documind.ongeri.com",
      techStack: [
        { name: "React + Recharts", color: "bg-periwinkle" },
        { name: "Flask API", color: "bg-coral" },
        { name: "GitHub OAuth", color: "bg-accent" },
        { name: "GPT-4 Insights", color: "bg-amber" },
        { name: "Supabase", color: "bg-periwinkle" },
      ],
      stats: [
        { label: "Data Points", value: "12+ chart types" },
        { label: "API Integration", value: "GitHub REST v3" },
        { label: "Auth Method", value: "OAuth 2.0 + JWT" },
      ],
    },
    {
      label: "Project 04 - Audio + AI Automation",
      title: "MeetingMind - AI Meeting Summarizer",
      description: "Upload meeting audio or a raw transcript — MeetingMind transcribes it, summarizes key decisions, extracts action items, assigns them to participants, and tracks completion status end-to-end.",
      liveUrl: "https://documind.ongeri.com",
      githubUrl: "https://github.com/ongeri/documind",
      caseStudyUrl: "https://documind.ongeri.com",
      techStack: [
        { name: "OpenAI Whisper", color: "bg-periwinkle" },
        { name: "GPT-4 Summarization", color: "bg-coral" },
        { name: "React", color: "bg-accent" },
        { name: "Flask API", color: "bg-amber" },
        { name: "Supabase Auth", color: "bg-periwinkle" },
        { name: "PostgreSQL", color: "bg-coral" },
        { name: "JWT", color: "bg-amber" },
      ],
      stats: [
        { label: "Data Points", value: "12+ chart types" },
        { label: "API Integration", value: "GitHub REST v3" },
        { label: "Auth Method", value: "OAuth 2.0 + JWT" },
      ],
    },
  ];

  return (
    <div className="pt-20 px-4 flex justify-center pb-12">
      <div className="flex flex-col items-start">
        <p className="text-accent font-mono text-sm tracking-wide mb-2">02 - SELECTED WORK <span style={{borderBottom: 'solid #7fffb2', display: 'inline-block', width: '80px', verticalAlign: 'middle', marginLeft: '8px'}}></span></p>
        <h2 className="text-4xl text-white font-bold mb-8">Projects That<br/> Actually Ship</h2>
        <p className="text-muted italic font-body">Each project solves a real problem, uses a production-grade stack, and is live and deployable.</p>
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div> 
    </div>
  );
}

export default Projects;