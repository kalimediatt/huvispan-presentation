import { motion } from 'framer-motion';
import { Server, Code2, PlayCircle, ShieldCheck } from 'lucide-react';

const PHASES = [
  { icon: Server, days: '01-15', title: 'Fundação', desc: 'Setup on-premise, banco de dados, autenticação e mapeamento WSDL do Sapiens.', color: 'blue' },
  { icon: Code2, days: '16-30', title: 'Ingestão', desc: 'Conexão com os 8 bancos e 4 FIDCs. Captura automatizada de extratos.', color: 'cyan' },
  { icon: PlayCircle, days: '31-45', title: 'Motor N:1', desc: 'Algoritmos de match, soma inteligente, tolerâncias. Dashboard operacional.', color: 'green' },
  { icon: ShieldCheck, days: '46-60', title: 'Shadow + Go-Live', desc: 'Motor em paralelo x planilha manual. Validação 95%+. Chave virada.', color: 'emerald' },
];

const colorMap: Record<string, { bg: string; border: string; text: string; dot: string }> = {
  blue: { bg: 'bg-blue-950/30', border: 'border-blue-500/30', text: 'text-blue-400', dot: 'bg-blue-500' },
  cyan: { bg: 'bg-cyan-950/30', border: 'border-cyan-500/30', text: 'text-cyan-400', dot: 'bg-cyan-500' },
  green: { bg: 'bg-green-950/30', border: 'border-green-500/30', text: 'text-green-400', dot: 'bg-green-500' },
  emerald: { bg: 'bg-emerald-950/30', border: 'border-emerald-500/30', text: 'text-emerald-400', dot: 'bg-emerald-500' },
};

export default function Slide10Cronograma() {
  return (
    <div className="slide-container w-full h-full flex flex-col justify-center max-w-6xl mx-auto">
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter text-slate-100">
          MVP em <span className="text-blue-500">60 Dias</span>
        </h2>
        <p className="mt-3 text-lg text-slate-400 font-light max-w-2xl">
          Cronograma agressivo, mas cirúrgico. Zero impacto na operação atual.
        </p>
      </motion.div>

      {/* Horizontal Timeline */}
      <div className="mt-4 md:mt-8 md:mt-14 relative">
        {/* Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.5, delay: 0.3, ease: 'easeInOut' }}
          className="absolute top-4 md:p-8 left-0 right-0 h-0.5 bg-slate-800 origin-left z-0"
        />

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 relative z-10">
          {PHASES.map((phase, i) => {
            const Icon = phase.icon;
            const colors = colorMap[phase.color];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.2, duration: 0.5 }}
                className="flex flex-col items-center"
              >
                {/* Dot on the line */}
                <div className={`w-4 h-4 rounded-full ${colors.dot} mb-6 shadow-lg relative z-20`}>
                  <div className={`absolute inset-0 rounded-full ${colors.dot} animate-ping opacity-30`} />
                </div>

                {/* Card */}
                <div className={`${colors.bg} border ${colors.border} rounded-2xl p-5 w-full text-center hover:scale-[1.02] transition-transform`}>
                  <div className={`w-10 h-10 mx-auto rounded-xl ${colors.bg} border ${colors.border} flex items-center justify-center mb-3`}>
                    <Icon size={20} className={colors.text} />
                  </div>
                  <div className="text-xs font-mono font-bold text-slate-500 mb-1">Dias {phase.days}</div>
                  <div className="text-base font-bold text-slate-100 mb-2">{phase.title}</div>
                  <div className="text-xs text-slate-400 leading-relaxed">{phase.desc}</div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* SLA Note */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.8 }}
        className="mt-6 md:mt-10 text-center text-xs font-medium text-slate-500 bg-slate-900/50 inline-block mx-auto px-6 py-2 rounded-full border border-slate-800/60"
      >
        Entregas validadas por bloco. Faturamento avança com aprovação.
      </motion.div>
    </div>
  );
}
