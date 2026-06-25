import React, { useState, useEffect, useRef } from 'react';

export default function ProjectCard({ project, onReadMore }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    if (!isPaused) {
      timerRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % project.images.length);
      }, 3000);
    }
    return () => clearInterval(timerRef.current);
  }, [isPaused, project.images.length]);

  const handleManualNav = (index, e) => {
    e.stopPropagation(); 
    setIsPaused(true);   
    setCurrentSlide(index);
  };

  return (
    <article 
      onClick={() => onReadMore(project)} 
      className="bg-gray-900/60 border border-gray-800 rounded-xl p-6 shadow-2xl hover:border-blue-500/50 transition cursor-pointer group flex flex-col md:flex-row gap-8 items-center"
    >
      <div className="w-full md:w-1/2 flex flex-col gap-3">
        <div className="relative rounded-lg overflow-hidden border border-gray-800 bg-black/40 h-56 flex items-center justify-center shadow-inner">
          {project.images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`Slide ${idx + 1}`}
              className={`w-full h-full object-cover absolute transition-opacity duration-500 ${idx === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
              onError={(e) => { e.target.style.display = 'none'; }}
            />
          ))}
        </div>
        
        {/* Dynamic Image Thumbnails instead of text */}
        <div className="flex justify-center items-center gap-2 px-2">
          <button 
            onClick={(e) => handleManualNav((currentSlide - 1 + project.images.length) % project.images.length, e)} 
            className="text-gray-500 hover:text-white text-xs px-1 select-none cursor-pointer"
          >❬</button>
          
          {project.images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`Thumb ${idx + 1}`}
              onClick={(e) => handleManualNav(idx, e)}
              className={`rounded w-14 h-9 object-cover select-none cursor-pointer transition-all duration-300 ${
                idx === currentSlide 
                  ? 'border-2 border-blue-500 opacity-100 scale-105 shadow-md' 
                  : 'border border-gray-800 opacity-40 hover:opacity-80'
              }`}
            />
          ))}

          <button 
            onClick={(e) => handleManualNav((currentSlide + 1) % project.images.length, e)} 
            className="text-gray-500 hover:text-white text-xs px-1 select-none cursor-pointer"
          >❭</button>
        </div>
      </div>

      <div className="w-full md:w-1/2 flex flex-col justify-between h-full space-y-4">
        <div>
          <h3 className="text-2xl font-bold tracking-wide text-white group-hover:text-blue-400 transition uppercase">
            {project.title}
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed mt-2 line-clamp-3">
            {project.summary}
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {project.skills.map((skill, idx) => (
            <span key={idx} className="bg-gray-800 text-gray-300 text-[10px] tracking-wider px-3 py-1 rounded-full border border-gray-700 font-medium uppercase">
              {skill}
            </span>
          ))}
        </div>

        <div className="flex justify-end pt-2">
          <span className="bg-blue-600 group-hover:bg-blue-500 text-white font-semibold tracking-wide uppercase text-xs px-6 py-2.5 rounded-full transition shadow-lg">
            Read More
          </span>
        </div>
      </div>
    </article>
  );
}