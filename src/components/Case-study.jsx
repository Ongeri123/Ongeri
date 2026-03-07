import React, { useState } from "react";

const projects = ['DocuMind', 'SyncBoard', 'DevPulse', 'MeetingMind'];

const Case_study = () => {
  const [selected, setSelected] = useState('DocuMind');

  return (
    <div className="mt-10 pt-20 px-4 flex flex-col md:flex-row gap-8 w-full max-w-6xl mx-auto pb-12">
      <div className="md:w-64 flex-shrink-0">
        <h2 className="text-accent font-mono text-sm tracking-wide mb-6">CASE STUDIES</h2>
        <div className="flex flex-col gap-2">
          {projects.map((project) => (
            <button
              key={project}
              onClick={() => setSelected(project)}
              className={`text-left px-4 py-3 rounded transition-colors ${
                selected === project
                  ? 'bg-accent/10 text-accent border-l-2 border-accent'
                  : 'text-muted hover:text-text-main hover:bg-surface'
              }`}
            >
              {project}
            </button>
          ))}
        </div>
      </div>
      <div className="flex-1">
        {selected === 'DocuMind' && (
            <>
                <div className="flex gap-4 border-b border-white/10 pb-6 mb-6">
                    {/* Write your DocuMind case study here */}
                    <h1 className="text-3xl font-bold text-white border-r-2 border-muted pr-4">DocuMind</h1>
                    <p className="text-muted text-sm">Chat with any PDF using a RAG pipeline on <br /> pgvector + GPT-4.</p>
                    <div className="ml-auto flex gap-4">        
                        <button className="bg-accent rounded-md p-2 text-sm">Live Demo</button>
                        <button className="text-muted text-sm border border-muted p-2 rounded-md flex items-center hover:border-accent transition-colors whitespace-nowrap">Github</button>
                    </div>            
                </div>
                <div>
                    <p className="text-accent text-sm mb-2">01 - Problem {" "}<span style={{ borderBottom: "solid #7fffb2", display: "inline-block", width: "80px", verticalAlign: "middle", marginLeft: "8px", }}></span></p>
                    <h2 className="text-white text-xl mb-2">Documents are black boxes.</h2>
                    <p className="text-muted text-sm mb-4">Legal teams, researchers, and analysts spend hours hunting for information buried in lengthy PDFs. A typical 80-page contract review takes 3–4 hours manually.<span className="text-white" >Existing tools are keyword-only they don't understand intent.</span> Enterprise solutions like Copilot require costly subscriptions and don't work on arbitrary documents.</p>
                    <p className="text-accent text-sm">The gap: a lightweight, self-contained app that makes any document instantly queryable using natural language.</p>      
                </div>
                <div className="mt-12">
                    <p className="text-accent text-sm mb-2">02 - Architecture {" "}<span style={{ borderBottom: "solid #7fffb2", display: "inline-block", width: "80px", verticalAlign: "middle", marginLeft: "8px", }}></span></p>
                    <h2 className=" text-white text-xl mb-2">RAG pipeline, end to end.</h2> 
                    <p className="text-muted text-sm mb-4">Rather than feeding entire documents into GPT-4's context window, the system chunks documents into semantic pieces, embeds each as a vector, then at query time retrieves only the most relevant chunks as context.</p>      
                </div>      
            </>
        )}
        {selected === 'SyncBoard' && (
          <div>
            {/* Write your SyncBoard case study here */}
            <h1 className="text-3xl font-bold text-white mb-2">SyncBoard</h1>
            <p className="text-accent text-lg mb-8">Real-time collaborative whiteboard</p>
          </div>
        )}
        {selected === 'DevPulse' && (
          <div>
            {/* Write your DevPulse case study here */}
            <h1 className="text-3xl font-bold text-white mb-2">DevPulse</h1>
            <p className="text-accent text-lg mb-8">Developer productivity analytics</p>
          </div>
        )}
        {selected === 'MeetingMind' && (
          <div>
            {/* Write your MeetingMind case study here */}
            <h1 className="text-3xl font-bold text-white mb-2">MeetingMind</h1>
            <p className="text-accent text-lg mb-8">AI meeting summarization</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Case_study;