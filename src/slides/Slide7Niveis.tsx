import { motion } from 'framer-motion';
import { Building2, Landmark, FileSpreadsheet, BrainCircuit, Database, LayoutDashboard, FileBarChart } from 'lucide-react';

const INPUTS = [
  { icon: Building2, label: '8 Bancos', sub: 'Itaú, Viacredi, Santander...' },
  { icon: Landmark, label: '4 FIDCs', sub: 'BMA, Basso, Multiplike...' },
  { icon: FileSpreadsheet, label: 'Multiformato', sub: 'PDF, Excel, OFX, CNAB' },
];

const OUTPUTS = [
  { icon: Database, label: 'ERP Sapiens', sub: 'Baixas sincronizadas' },
  { icon: LayoutDashboard, label: 'Dashboard', sub: 'Controle em tempo real' },
  { icon: FileBarChart, label: 'Relatórios', sub: 'Diário, mensal, auditoria' },
];

const LEVELS = [
  { pct: '70%', label: 'Match Exato', color: 'bg-green-500', textColor: 'text-green-400' },
  { pct: '10%', label: 'Soma N:1', color: 'bg-cyan-500', textColor: 'text-cyan-400' },
  { pct: '10%', label: 'Similaridade', color: 'bg-amber-500', textColor: 'text-amber-400' },
  { pct: '10%', label: 'Fila Humana', color: 'bg-red-500', textColor: 'text-red-400' },
];

export default function Slide7Niveis() {
  return (
    <div className="slide-container w-full h-full flex flex-col justify-center max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl sm:text-4xl md:text-4xl sm:text-5xl font-black tracking-tighter">
          <span className="bg-gradient-to-r from-slate-50 to-cyan-400 bg-clip-text text-transparent">
            Inteligência entre o Banco e o ERP
          </span>
        </h2>
        <p className="mt-3 text-lg text-slate-400 font-light">
          Arquitetura desenhada exclusivamente para o ecossistema da Huvispan.
        </p>
      </motion.div>

      {/* 3-Column Flow: INPUT → ENGINE → OUTPUT */}
      <div className="mt-10 grid grid-cols-1 lg:grid-cols-[1fr_1.5fr_1fr] gap-6 items-center">

        {/* LEFT: Inputs */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col gap-3"
        >
          <div className="text-xs uppercase tracking-widest text-blue-400/60 font-semibold mb-1">Entrada</div>
          {INPUTS.map((item, i) => {
            const Icon = item.icon;
            return (
              <div key={i} className="bg-slate-900/60 border border-slate-800/60 rounded-xl p-4 flex items-center gap-3">
                <Icon size={20} className="text-blue-400 shrink-0" />
                <div>
                  <div className="text-sm font-semibold text-slate-200">{item.label}</div>
                  <div className="text-xs text-slate-500">{item.sub}</div>
                </div>
              </div>
            );
          })}
        </motion.div>

        {/* CENTER: Engine */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-blue-950/30 border border-blue-500/30 rounded-2xl p-6 shadow-[0_0_40px_rgba(59,130,246,0.08)] relative"
        >
          {/* Animated flow arrows */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute -left-4 top-1/2 -translate-y-1/2 text-blue-400/40 text-2xl hidden lg:block"
          >
            ▸▸
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            className="absolute -right-4 top-1/2 -translate-y-1/2 text-green-400/40 text-2xl hidden lg:block"
          >
            ▸▸
          </motion.div>

          <div className="flex items-center gap-3 mb-4">
            <BrainCircuit size={32} className="text-blue-400" />
            <div>
              <div className="text-lg font-bold text-white">Motor de Conciliação</div>
              <div className="text-xs text-blue-300/70">4 Níveis de Inteligência</div>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            {LEVELS.map((level, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.0 + i * 0.15, duration: 0.4 }}
                className="flex items-center gap-3"
              >
                <div className={`w-2 h-2 rounded-full ${level.color} shrink-0`} />
                <span className="text-sm text-slate-300 flex-1">{level.label}</span>
                <span className={`text-sm font-mono font-bold ${level.textColor}`}>{level.pct}</span>
              </motion.div>
            ))}
          </div>

          <div className="mt-4 pt-3 border-t border-blue-500/20 text-xs text-blue-400/60 italic text-center">
            Zero baixa sem validação. Assertividade é prioridade #1.
          </div>
        </motion.div>

        {/* RIGHT: Outputs */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="flex flex-col gap-3"
        >
          <div className="text-xs uppercase tracking-widest text-green-400/60 font-semibold mb-1">Saída</div>
          {OUTPUTS.map((item, i) => {
            const Icon = item.icon;
            return (
              <div key={i} className="bg-slate-900/60 border border-slate-800/60 rounded-xl p-4 flex items-center gap-3">
                <Icon size={20} className="text-green-400 shrink-0" />
                <div>
                  <div className="text-sm font-semibold text-slate-200">{item.label}</div>
                  <div className="text-xs text-slate-500">{item.sub}</div>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}
