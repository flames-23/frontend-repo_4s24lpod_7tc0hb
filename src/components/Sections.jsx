import React from 'react';
import { GraduationCap, Wrench, FolderGit2, Send } from 'lucide-react';

export function Education() {
  return (
    <section id="education" className="py-20 bg-gradient-to-b from-slate-950 to-black text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <GraduationCap className="text-sky-300" />
          <h2 className="text-3xl font-bold">Education</h2>
        </div>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          <div className="p-6 rounded-xl bg-slate-900/60 border border-slate-700/60">
            <div className="font-semibold">Bachelor of Computer Science</div>
            <div className="text-white/70">Your University Name</div>
            <div className="text-sm text-white/60 mt-1">2016 — 2020</div>
            <p className="mt-3 text-white/80">Focus on data systems, databases, distributed computing, and analytics.</p>
          </div>
          <div className="p-6 rounded-xl bg-slate-900/60 border border-slate-700/60">
            <div className="font-semibold">Certifications</div>
            <ul className="list-disc list-inside text-white/80 mt-2 space-y-1">
              <li>Google Cloud Data Engineer</li>
              <li>dbt Fundamentals</li>
              <li>SQL Advanced</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Skills() {
  const skills = ['Python', 'SQL', 'Airflow', 'dbt', 'Spark', 'Kafka', 'GCP', 'AWS', 'Docker', 'CI/CD'];
  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-black to-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <Wrench className="text-emerald-300" />
          <h2 className="text-3xl font-bold">Skills</h2>
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          {skills.map((s) => (
            <span key={s} className="px-4 py-2 rounded-full bg-slate-900/60 border border-slate-700/60 text-white/90">
              {s}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-slate-950 to-black text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <FolderGit2 className="text-cyan-300" />
          <h2 className="text-3xl font-bold">Projects</h2>
        </div>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[1,2,3].map((i) => (
            <a key={i} href="#" className="group block p-6 rounded-xl bg-slate-900/60 border border-slate-700/60 hover:border-cyan-400/60 transition">
              <div className="h-36 rounded-lg bg-gradient-to-br from-emerald-400/20 via-sky-400/20 to-cyan-400/20 group-hover:from-emerald-400/30 group-hover:to-cyan-400/30" />
              <div className="mt-4 font-semibold">Data Project {i}</div>
              <p className="text-white/70 text-sm mt-1">Brief description of the project and the technologies used.</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-black to-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <Send className="text-emerald-300" />
          <h2 className="text-3xl font-bold">Contact</h2>
        </div>
        <form className="mt-6 grid sm:grid-cols-2 gap-4">
          <input type="text" placeholder="Name" className="w-full px-4 py-3 rounded-md bg-slate-900/60 border border-slate-700/60 focus:outline-none focus:ring-2 focus:ring-emerald-400" />
          <input type="email" placeholder="Email" className="w-full px-4 py-3 rounded-md bg-slate-900/60 border border-slate-700/60 focus:outline-none focus:ring-2 focus:ring-emerald-400" />
          <textarea placeholder="Message" rows="4" className="sm:col-span-2 w-full px-4 py-3 rounded-md bg-slate-900/60 border border-slate-700/60 focus:outline-none focus:ring-2 focus:ring-emerald-400" />
          <div>
            <button type="submit" className="px-6 py-3 rounded-md bg-emerald-500 hover:bg-emerald-400 text-white font-medium">Send</button>
          </div>
        </form>
      </div>
    </section>
  );
}
