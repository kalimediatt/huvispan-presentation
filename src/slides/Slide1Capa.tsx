import { motion } from 'framer-motion';
import { ShieldCheck, Zap, ArrowRight } from 'lucide-react';

export default function Slide1Capa() {
  return (
    <div className="slide-container w-full h-full flex flex-col justify-center relative">
      {/* Full-screen Background Dots & Glows */}
      <div 
        className="fixed inset-0 z-[-1] opacity-30 pointer-events-none" 
        style={{ 
          backgroundImage: 'radial-gradient(circle at center, #60a5fa 1px, transparent 1px)', 
          backgroundSize: '40px 40px' 
        }} 
      />
      <div className="fixed top-[-20%] right-[-10%] w-[800px] h-[800px] bg-blue-600/[0.08] rounded-full blur-[120px] z-[-1] pointer-events-none" />
      <div className="fixed bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-emerald-500/[0.04] rounded-full blur-[120px] z-[-1] pointer-events-none" />

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-start mt-[-4rem]">
        
        {/* Top Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-2 px-3 py-1.5 rounded-md text-slate-400 text-sm font-semibold tracking-widest uppercase mb-10"
        >
          <ShieldCheck size={18} className="text-blue-500" />
          RENOMADE
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-5xl md:text-[5rem] lg:text-[6rem] font-bold tracking-tighter leading-[1] mb-8"
        >
          <div className="whitespace-nowrap">
            <span className="text-blue-500">Automação</span>{' '}
            <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-blue-500 bg-clip-text text-transparent">
              Financeira
            </span>
          </div>
          <div className="bg-gradient-to-r from-blue-400 to-teal-300 bg-clip-text text-transparent">
            Inteligente
          </div>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-3xl text-slate-300 font-light leading-snug mb-12"
        >
          Proposta de Modernização da Tesouraria<br />
          <strong className="text-white font-semibold tracking-wide">Huvispan Têxtil</strong>
        </motion.p>

        {/* Bottom Feature Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center gap-4 px-6 py-3.5 rounded-full border border-blue-500/20 bg-blue-950/40 backdrop-blur-md text-sm shadow-xl"
        >
          <div className="flex items-center gap-2 text-emerald-400 font-medium">
            <Zap size={16} className="fill-emerald-400/20" />
            <span>6 dias de imersão</span>
          </div>
          <ArrowRight size={14} className="text-slate-600 hidden sm:block" />
          <div className="text-blue-400 font-medium">
            8 entregas concretas
          </div>
          <ArrowRight size={14} className="text-slate-600 hidden sm:block" />
          <div className="text-slate-200 font-medium">
            Zero achismo
          </div>
        </motion.div>
      </div>

      {/* Full-Width Footer Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="fixed bottom-6 w-full left-0 px-8 flex justify-between items-end z-10 pointer-events-none"
      >
        {/* Left Side: Date */}
        <div className="flex items-center gap-3">
          <span className="text-slate-500 text-xs font-mono tracking-widest uppercase">Março 2026</span>
        </div>
        
        {/* Right Side: Confidential text (Pagination is handled entirely by App.tsx at fixed right-8) */}
        <div className="flex items-center gap-12 text-slate-500 text-xs font-mono tracking-widest hidden md:flex mr-20">
          <span>Documento Confidencial — Preparado exclusivamente para Huvispan Têxtil</span>
        </div>
      </motion.div>
    </div>
  );
}
