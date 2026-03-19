import { motion } from 'framer-motion';
import { Shield, Quote } from 'lucide-react';

const GUARANTEES = [
  { title: 'Zero Baixa Cega', desc: 'Nenhum título é liquidado sem 100% de confiança ou aprovação humana explícita.' },
  { title: 'Score de Confiança', desc: 'Cada match recebe uma nota de 0-100%. Abaixo de 95%, vai para auditoria humana.' },
  { title: 'Rollback Instantâneo', desc: 'Qualquer ação do motor pode ser revertida com 1 clique. Sem impacto no ERP.' },
];

export default function SlideGarantia() {
  return (
    <div className="slide-container w-full h-full flex flex-col justify-center max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <div className="inline-flex items-center gap-2 bg-green-950/30 border border-green-800/40 px-4 py-2 rounded-full text-green-400 text-sm font-semibold mb-6">
          <Shield size={16} />
          Garantia de Assertividade
        </div>
        <h2 className="text-5xl md:text-6xl font-black tracking-tighter">
          <span className="bg-gradient-to-r from-slate-50 to-green-400 bg-clip-text text-transparent">
            100% de Precisão
          </span>
        </h2>
        <p className="mt-4 text-xl text-slate-400 font-light max-w-2xl mx-auto">
          Ou não vai ao vivo. Simples assim.
        </p>
      </motion.div>

      {/* Guarantee cards */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.15, delayChildren: 0.4 } } }}
        className="grid grid-cols-3 gap-4 mt-10"
      >
        {GUARANTEES.map((g, i) => (
          <motion.div
            key={i}
            variants={{
              hidden: { opacity: 0, y: 15 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
            }}
            className="bg-slate-900/50 border border-slate-800/60 rounded-xl p-5 text-center"
          >
            <div className="text-base font-bold text-slate-100 mb-2">{g.title}</div>
            <div className="text-xs text-slate-400 leading-relaxed">{g.desc}</div>
          </motion.div>
        ))}
      </motion.div>

      {/* Juliano Quote */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="mt-10 bg-green-950/10 border border-green-900/30 rounded-2xl p-8 text-center relative"
      >
        <Quote size={40} className="absolute top-4 left-6 text-green-500/10" />
        <p className="text-2xl md:text-3xl font-bold text-slate-100 italic leading-relaxed max-w-3xl mx-auto relative z-10">
          "Confiança de que a ferramenta está, de fato, cumprindo com{' '}
          <span className="text-green-400">100% de acuracidade</span>{' '}
          nos movimentos que ela realizar."
        </p>
        <div className="mt-4 text-sm text-slate-500">
          — Juliano Vieira, Coordenador de TI · Huvispan Têxtil
        </div>
      </motion.div>
    </div>
  );
}
