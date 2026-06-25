import React, { useState } from 'react';
import { projectsData } from './data/projects';
import ProjectCard from './components/ProjectCard';

export default function App() {
  const [activeModalProject, setActiveModalProject] = useState(null);

  return (
    <div className="bg-gray-950 text-gray-100 font-sans min-h-screen p-8 max-w-5xl mx-auto">
      <header className="text-center my-12">
        <h1 className="text-4xl font-bold tracking-tight text-white mb-2">Josh Sar-Shalom</h1>
        <p className="text-xl text-blue-400 mb-6">Computer Engineering Student at UCF</p>
        <div className="flex justify-center gap-6 text-sm font-medium">
          <a href="resume.pdf" target="_blank" rel="noreferrer" className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded transition shadow-lg">Resume</a>
          <a href="https://www.linkedin.com/in/josh-sar/" target="_blank" rel="noreferrer" className="border border-gray-700 hover:bg-gray-800 px-4 py-2 rounded transition">LinkedIn</a>
          <a href="https://github.com/JoshSar-Shalom" target="_blank" rel="noreferrer" className="border border-gray-700 hover:bg-gray-800 px-4 py-2 rounded transition">GitHub</a>
        </div>
      </header>

      <hr className="border-gray-800 my-8" />

      <main>
        <h2 className="text-2xl font-semibold text-white mb-6 tracking-wide uppercase">Projects</h2>
        <div className="grid gap-8">
          {projectsData.map((project) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              onReadMore={setActiveModalProject} 
            />
          ))}
        </div>
      </main>

      {activeModalProject && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50" onClick={() => setActiveModalProject(null)}>
          <div className="bg-gray-900 border border-gray-800 max-w-2xl w-full rounded-xl p-6 shadow-2xl relative max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setActiveModalProject(null)} className="absolute top-4 right-4 text-gray-400 hover:text-white font-bold text-xl transition">&times;</button>
            <h3 className="text-2xl font-bold text-white mb-2 uppercase tracking-wide">{activeModalProject.title}</h3>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {activeModalProject.skills.map((skill, i) => (
                <span key={i} className="bg-gray-800 text-gray-300 text-[10px] tracking-wider px-3 py-1 rounded-full border border-gray-700 font-medium uppercase">{skill}</span>
              ))}
            </div>

            <h4 className="text-xs font-semibold text-blue-400 uppercase tracking-widest mb-2">Project Overview</h4>
            <p className="text-gray-300 mb-6 leading-relaxed text-sm">{activeModalProject.overview}</p>

            <h4 className="text-xs font-semibold text-blue-400 uppercase tracking-widest mb-3">Technical Accomplishments</h4>
            <ul className="list-disc list-inside text-gray-300 space-y-3 text-sm mb-8 leading-relaxed">
              {activeModalProject.bullets.map((bullet, i) => (
                <li key={i}>{bullet}</li>
              ))}
            </ul>

            <div className="flex justify-end">
              <button onClick={() => setActiveModalProject(null)} className="bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white font-medium text-xs tracking-wider uppercase px-5 py-2.5 rounded-full border border-gray-700 transition">Close Explorer</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}