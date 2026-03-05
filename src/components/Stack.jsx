import React from "react";

const Stack = () => {
  return (
    <div className="mt-10 pt-20 px-4 flex flex-col pb-12 w-full max-w-6xl mx-auto">
      <div className="flex flex-col items-start">
        <p className="text-accent font-mono text-sm tracking-wide mb-2">
          03 - Stack{" "}
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
        <h2 className="text-3xl font-bold text-white mb-4">Technologies</h2>
      </div>
      <div className="border border-muted text-text-main text-sm rounded-lg w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 mt-8">
        <div className="border-r border-b border-muted p-10">
          <h2 className="text-muted text-sm">// &nbsp;FRONTEND</h2>
          <ul className="border-t border-muted flex flex-col gap-2 items-start mt-4 pt-4">
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent"></span> React
              + Hooks
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>{" "}
              JavaScript (ES2022+)
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>{" "}
              Tailwind CSS
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-periwinkle"></span>{" "}
              React Query / Zustand
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-periwinkle"></span>{" "}
              Socket.IO Client
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-muted"></span>{" "}
              Three.js (basics)
            </li>
          </ul>
        </div>
        <div className="border-r border-b border-muted p-10">
          <h2 className="text-muted text-xs">// &nbsp;BACKEND</h2>
          <ul className="border-t border-muted flex flex-col gap-2 items-start mt-4 pt-4">
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>{" "}
              Python + Flask
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent"></span> REST
              API Design
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent"></span> JWT
              Authentication
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-periwinkle"></span>{" "}
              WebSockets / Socket.IO
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-periwinkle"></span>{" "}
              Celery (task queues)
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-muted"></span>{" "}
              FastAPI
            </li>
          </ul>
        </div>
        <div className="border-b border-muted p-10">
          <h2 className="text-muted text-xs">// &nbsp;AI / LLM</h2>
          <ul className="border-t border-muted flex flex-col gap-2 items-start mt-4 pt-4">
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>{" "}
              OpenAI API (GPT-4, Whisper)
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>{" "}
              Prompt Engineering
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent"></span> RAG
              Pipelines
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-periwinkle"></span>{" "}
              LangChain / LlamaIndex
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-periwinkle"></span>{" "}
              Vector Embeddings
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-muted"></span>{" "}
              Fine-tuning basics
            </li>
          </ul>
        </div>
        <div className="border-r border-muted p-10">
          <h2 className="text-muted text-xs">// &nbsp;DATA + INFRA</h2>
          <ul className="border-t border-muted flex flex-col gap-2 items-start mt-4 pt-4">
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>{" "}
              PostgreSQL
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>{" "}
              Supabase (Auth, DB, Storage)
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>{" "}
              pgvector
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-periwinkle"></span>{" "}
              SQL Query Optimization
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-periwinkle"></span>{" "}
              Vercel + Railway deploy
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-muted"></span> Docker
              basics
            </li>
          </ul>
        </div>
      </div>
      <div className="flex justify-start gap-4 w-full max-w-6xl mt-4">
        <p className="text-muted text-xs flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>Daily use
        </p>
        <p className="text-muted text-xs flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-periwinkle"></span>
          Proficient
        </p>
        <p className="text-muted text-xs flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-muted"></span>Familiar /
          learning
        </p>
      </div>
    </div>
  );
};

export default Stack;
