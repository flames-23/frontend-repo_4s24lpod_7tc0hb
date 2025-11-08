import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';

export default function Hero() {
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-50, 50], [-6, 6]);

  React.useEffect(() => {
    const controls = animate(x, 50, { duration: 2, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' });
    return () => controls.stop();
  }, [x]);

  return (
    <section id="home" className="relative min-h-[90vh] pt-24 overflow-hidden bg-gradient-to-b from-black via-slate-900 to-black">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center py-16">
          <div className="text-left">
            <p className="text-sm tracking-widest uppercase text-emerald-300/80">Welcome</p>
            <h1 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
              <span className="bg-gradient-to-r from-emerald-300 via-sky-300 to-cyan-200 text-transparent bg-clip-text">Fauzi Rahmat Febrian</span>
            </h1>
            <p className="mt-4 text-lg text-white/80">Data Analyst • Data Engineer • AI Prompt Engineer</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#contact" className="inline-flex items-center justify-center px-5 py-3 rounded-md bg-emerald-500 hover:bg-emerald-400 text-white font-medium shadow-lg shadow-emerald-500/20 transition">
                Contact Me
              </a>
              <a href="https://drive.google.com" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center px-5 py-3 rounded-md border border-cyan-300/40 text-cyan-200 hover:bg-cyan-300/10 font-medium transition">
                View My CV
              </a>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <motion.div style={{ x, rotate }} className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-full ring-4 ring-emerald-400/40 shadow-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1200&auto=format&fit=crop"
                alt="Fauzi Rahmat Febrian portrait"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
