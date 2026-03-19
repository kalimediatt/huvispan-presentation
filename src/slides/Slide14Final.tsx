import { motion } from 'framer-motion';
import { MessageCircle, FileText, Rocket } from 'lucide-react';

const STEPS = [
  { icon: MessageCircle, title: 'Alinhamento Final', desc: 'Validar escopo, tirar dúvidas técnicas, alinhar expectativas.', color: 'blue' },
  { icon: FileText, title: 'Contrato + Kickoff', desc: 'Após aprovação, montamos o ambiente e iniciamos no mesmo dia.', color: 'blue' },
  { icon: Rocket, title: 'MVP em 60 Dias', desc: 'Dashboard + Motor CR + Itaú + FIDCs. Valor tangível desde a semana 3.', color: 'green' },
];

export default function Slide14Final() {
  return (
    <div className="slide-container w-full h-full flex flex-col items-center justify-center max-w-4xl mx-auto text-center">
      {/* Ambient glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[500px] h-[500px] bg-blue-500/[0.03] rounded-full blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="bg-blue-500/10 border border-blue-500/20 text-blue-400 px-5 py-2 rounded-full text-sm font-bold mb-8"
      >
        PRÓXIMOS PASSOS
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="text-5xl md:text-7xl font-black tracking-tighter leading-tight"
      >
        <span className="text-slate-50">O futuro da</span>
        <br />
        <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          Tesouraria
        </span>
      </motion.h2>

      {/* 3 Steps */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.15, delayChildren: 0.8 } } }}
        className="grid grid-cols-3 gap-4 mt-14 w-full"
      >
        {STEPS.map((step, i) => {
          const Icon = step.icon;
          const isGreen = step.color === 'green';
          return (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
              className={`p-6 rounded-2xl border ${
                isGreen
                  ? 'bg-green-950/20 border-green-800/40'
                  : 'bg-slate-900/50 border-slate-800/60'
              }`}
            >
              <div className={`w-10 h-10 mx-auto rounded-xl flex items-center justify-center mb-4 border ${
                isGreen
                  ? 'bg-green-950/40 border-green-800/30 text-green-400'
                  : 'bg-blue-950/30 border-blue-800/30 text-blue-400'
              }`}>
                <Icon size={20} />
              </div>
              <div className={`text-base font-bold mb-2 ${isGreen ? 'text-green-300' : 'text-slate-200'}`}>
                {step.title}
              </div>
              <div className="text-xs text-slate-500 leading-relaxed">
                {step.desc}
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Closing phrase */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.8 }}
        className="mt-12"
      >
        <div className="h-px w-32 bg-gradient-to-r from-transparent via-slate-700 to-transparent mx-auto mb-6" />
        <span className="text-sm tracking-[0.3em] text-slate-600 font-bold">RENOMADE</span>
        <p className="text-xs text-slate-700 mt-1">Soluções de Tecnologia para Indústria</p>
      </motion.div>
    </div>
  );
}
