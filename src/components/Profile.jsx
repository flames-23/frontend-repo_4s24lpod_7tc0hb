import React from 'react';
import { Database, Cloud, Code2, Workflow, Server } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Profile() {
  return (
    <section id="profile" className="relative py-24 bg-gradient-to-b from-black to-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold">Profile</h2>
            <p className="mt-4 text-white/80 leading-relaxed">
              I am a Data Engineer with a strong foundation in building reliable, scalable data platforms. I design and maintain data pipelines, automate ingestion and transformation, and enable analytics teams with clean, well-modeled datasets. My background spans SQL optimization, Python-based ETL, orchestration, and cloud-native architectures.
            </p>
            <p className="mt-4 text-white/80 leading-relaxed">
              I care about data quality, reproducibility, and performance. I collaborate with stakeholders to translate business needs into robust data solutions, enabling dashboards, machine learning, and experimentation at scale.
            </p>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {[{
                Icon: Code2, label: 'Python'
              }, {
                Icon: Database, label: 'SQL'
              }, {
                Icon: Workflow, label: 'Pipelines'
              }, {
                Icon: Cloud, label: 'Cloud'
              }, {
                Icon: Server, label: 'Warehouses'
              }].map(({ Icon, label }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative p-5 rounded-xl bg-slate-900/60 border border-slate-700/60 hover:border-emerald-400/60 hover:shadow-emerald-500/20 hover:shadow-xl transition"
                >
                  <Icon className="h-8 w-8 text-emerald-300" />
                  <div className="mt-2 text-sm text-white/90">{label}</div>
                  <div className="absolute -inset-px rounded-xl bg-gradient-to-r from-emerald-400/0 via-cyan-400/0 to-sky-400/0 opacity-0 group-hover:opacity-20 transition" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
