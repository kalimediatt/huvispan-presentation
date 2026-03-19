import { motion } from 'framer-motion';

export default function Slide6Middleware() {
  return (
    <div className="slide-container w-full h-full flex flex-col items-center justify-center max-w-4xl mx-auto relative">
      {/* Ambient glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[400px] h-[400px] bg-blue-500/[0.03] rounded-full blur-3xl" />
      </div>

      {/* Line 1 */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="text-4xl md:text-6xl font-black tracking-tighter text-center text-slate-200 leading-tight"
      >
        A pergunta não é{' '}
        <span className="text-white">SE</span>{' '}
        vocês vão automatizar.
      </motion.h2>

      {/* Dramatic pause line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.2, delay: 1.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="my-10 h-px w-48 bg-gradient-to-r from-transparent via-slate-600 to-transparent origin-center"
      />

      {/* Line 2 - with delay for dramatic effect */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 2.5 }}
        className="text-4xl md:text-6xl font-black tracking-tighter text-center leading-tight"
      >
        <span className="text-slate-400">É se vão fazer </span>
        <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          antes
        </span>
        <span className="text-slate-400"> ou </span>
        <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
          depois
        </span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.8, duration: 0.8 }}
        className="text-xl text-slate-500 mt-4 font-light"
      >
        do próximo erro.
      </motion.p>
    </div>
  );
}
