import { motion } from 'framer-motion';
import { ShieldCheck, TestTube, FileCode } from 'lucide-react';

const PROTECTIONS = [
  { icon: TestTube, title: 'Homologação Rigorosa', desc: 'O motor roda em paralelo à planilha manual. Só vai ao vivo após provar 95%+ de precisão.', color: 'text-blue-400', border: 'border-blue-500/20', bg: 'bg-blue-950/20' },
  { icon: ShieldCheck, title: 'Go-Live em Paralelo', desc: 'Mesmo após ativação, o sistema mantém relatório comparativo por 15 dias. Zero risco.', color: 'text-emerald-400', border: 'border-emerald-500/20', bg: 'bg-emerald-950/20' },
  { icon: FileCode, title: 'Controle Total', desc: 'Infraestrutura 100% on-premise. Dentro do servidor Huvispan. Sem dependência de cloud externa.', color: 'text-cyan-400', border: 'border-cyan-500/20', bg: 'bg-cyan-950/20' },
];

export default function Slide11Trincheiras() {
  return (
    <div className="slide-container w-full h-full flex flex-col justify-center items-center max-w-5xl mx-auto text-center">
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter text-white">
          3 Camadas de Proteção
        </h2>
        <p className="mt-4 text-xl text-slate-400 max-w-2xl mx-auto font-light">
          Nenhuma mudança acontece sem validação. O risco é <span className="text-green-400 font-semibold">zero</span>.
        </p>
      </motion.div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.2, delayChildren: 0.4 } } }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mt-14"
      >
        {PROTECTIONS.map((prot, i) => {
          const Icon = prot.icon;
          return (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, scale: 0.9, y: 20 },
                visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5 } },
              }}
              className={`${prot.bg} border ${prot.border} p-8 rounded-2xl flex flex-col items-center text-center hover:-translate-y-1 transition-transform`}
            >
              <div className={`w-14 h-14 rounded-2xl ${prot.bg} border ${prot.border} flex items-center justify-center mb-5 ${prot.color}`}>
                <Icon size={28} />
              </div>
              <h3 className="text-lg font-bold text-slate-100 mb-3">{prot.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed font-light">
                {prot.desc}
              </p>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
