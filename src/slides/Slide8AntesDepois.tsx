import { motion } from 'framer-motion';
import { XCircle, CheckCircle } from 'lucide-react';

const BEFORE = [
  { label: 'Tempo diário', value: '3-4 horas' },
  { label: 'Profissionais full-time', value: '3 analistas' },
  { label: 'Horas/mês operacionais', value: '~150h+' },
  { label: 'Planilhas paralelas', value: 'Uso intensivo' },
  { label: 'Erros de digitação', value: 'Alto risco' },
  { label: 'Rastreabilidade', value: 'Parcial' },
  { label: 'Assertividade', value: 'Depende do operador' },
];

const AFTER = [
  { label: 'Tempo diário', value: '15-30 min' },
  { label: 'Profissionais full-time', value: '1 focado' },
  { label: 'Horas/mês operacionais', value: '~10h' },
  { label: 'Planilhas paralelas', value: 'Zero' },
  { label: 'Erros de digitação', value: 'Eliminado' },
  { label: 'Rastreabilidade', value: '100% auditável' },
  { label: 'Assertividade', value: 'Sistema + validação humana' },
];

export default function Slide8AntesDepois() {
  return (
    <div className="slide-container w-full h-full flex flex-col justify-center max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10"
      >
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter">
          <span className="bg-gradient-to-r from-slate-50 to-green-400 bg-clip-text text-transparent">
            A Transformação
          </span>
        </h2>
        <p className="mt-3 text-lg text-slate-400 font-light">
          A diferença entre operação manual e uma tesouraria estratégica.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-3 md:p-6">
        {/* BEFORE Panel */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-red-950/10 border border-red-900/30 rounded-2xl p-3 md:p-6 relative overflow-hidden"
        >
          <div className="flex items-center gap-2 mb-5">
            <XCircle size={20} className="text-red-400" />
            <span className="text-sm font-bold uppercase tracking-widest text-red-400/80">Hoje</span>
          </div>
          <div className="flex flex-col gap-3">
            {BEFORE.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + i * 0.08, duration: 0.3 }}
                className="flex justify-between items-center py-2 border-b border-red-900/20 last:border-0"
              >
                <span className="text-sm text-slate-400">{item.label}</span>
                <span className="text-sm font-semibold text-red-300 bg-red-950/40 px-2.5 py-0.5 rounded-md">
                  {item.value}
                </span>
              </motion.div>
            ))}
          </div>
          {/* Pulsing background indicator */}
          <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-red-500 animate-pulse" />
        </motion.div>

        {/* AFTER Panel */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-green-950/10 border border-green-900/30 rounded-2xl p-3 md:p-6 relative overflow-hidden"
        >
          <div className="flex items-center gap-2 mb-5">
            <CheckCircle size={20} className="text-green-400" />
            <span className="text-sm font-bold uppercase tracking-widest text-green-400/80">Com o Sistema</span>
          </div>
          <div className="flex flex-col gap-3">
            {AFTER.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 + i * 0.08, duration: 0.3 }}
                className="flex justify-between items-center py-2 border-b border-green-900/20 last:border-0"
              >
                <span className="text-sm text-slate-400">{item.label}</span>
                <span className="text-sm font-semibold text-green-300 bg-green-950/40 px-2.5 py-0.5 rounded-md">
                  {item.value}
                </span>
              </motion.div>
            ))}
          </div>
          {/* Glowing status indicator */}
          <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
        </motion.div>
      </div>

      {/* Bottom result */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8, duration: 0.6 }}
        className="mt-4 md:mt-8 flex justify-center items-center gap-3 md:gap-3 md:p-6 text-center"
      >
        <span className="text-3xl font-bold text-red-400 line-through font-mono opacity-60">3-4 horas</span>
        <motion.span
          animate={{ x: [0, 6, 0] }}
          transition={{ duration: 1.2, repeat: Infinity }}
          className="text-slate-600 text-2xl"
        >
          →
        </motion.span>
        <span className="text-4xl font-black text-green-400 font-mono">15-30 min</span>
      </motion.div>
    </div>
  );
}
