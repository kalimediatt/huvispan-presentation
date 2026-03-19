import { motion } from 'framer-motion';
import { Repeat, FileSpreadsheet, UserX, CalendarX } from 'lucide-react';

const FRICTIONS = [
  {
    icon: Repeat,
    title: 'Alt-Tab Infinito',
    desc: 'ERP → PDF → Excel → ERP. O dia inteiro.',
    color: 'red',
  },
  {
    icon: FileSpreadsheet,
    title: 'Planilha Paralela',
    desc: 'Controle fora do sistema. Editável. Sem log.',
    color: 'orange',
  },
  {
    icon: UserX,
    title: 'CNPJ ≠ Nome',
    desc: 'PIX de Luciano, Roberto, Igreja... tudo para 1 nota.',
    color: 'amber',
  },
  {
    icon: CalendarX,
    title: 'Datas Fantasma',
    desc: 'Vence sexta, paga segunda. Filtro 100% manual.',
    color: 'red',
  },
];

const FLOW_STEPS = [
  'Abrir banco',
  'Baixar extrato',
  'Abrir planilha',
  'Conferir Sapiens',
  'Buscar comprovante',
  'Baixar título',
];

const colorMap: Record<string, string> = {
  red: 'text-red-400 bg-red-950/30 border-red-900/40',
  orange: 'text-orange-400 bg-orange-950/30 border-orange-900/40',
  amber: 'text-amber-400 bg-amber-950/30 border-amber-900/40',
};

export default function Slide2Entregas() {
  return (
    <div className="slide-container w-full h-full flex flex-col justify-center max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter">
          <span className="bg-gradient-to-r from-slate-50 to-orange-400 bg-clip-text text-transparent">
            O que encontramos
          </span>
        </h2>
        <p className="mt-4 text-xl text-slate-400 font-light max-w-2xl">
          4 fricções críticas que consomem a operação todos os dias.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-12">
        {/* LEFT: Friction Cards */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } } }}
          className="flex flex-col gap-3"
        >
          {FRICTIONS.map((f, i) => {
            const Icon = f.icon;
            const colors = colorMap[f.color];
            return (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
                }}
                className={`flex items-start gap-4 p-4 rounded-xl border ${colors}`}
              >
                <Icon size={20} className="mt-0.5 shrink-0" />
                <div>
                  <div className="text-sm font-bold text-slate-200">{f.title}</div>
                  <div className="text-xs text-slate-500 mt-0.5">{f.desc}</div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* RIGHT: Animated Flow Loop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="flex flex-col items-center justify-center bg-slate-900/50 border border-slate-800/60 rounded-2xl p-8 relative overflow-hidden"
        >
          <div className="text-xs uppercase tracking-widest text-slate-600 font-semibold mb-6">
            O Loop Manual Diário
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            {FLOW_STEPS.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.0 + i * 0.2, duration: 0.4 }}
                className="flex items-center gap-2"
              >
                <span className="bg-slate-800 text-slate-300 text-xs font-mono px-3 py-2 rounded-lg border border-slate-700/60">
                  {step}
                </span>
                {i < FLOW_STEPS.length - 1 && (
                  <span className="text-slate-600 text-xs">→</span>
                )}
              </motion.div>
            ))}
          </div>

          {/* Loop arrow */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.4, duration: 0.6 }}
            className="mt-4 flex items-center gap-2 text-red-400/60 text-xs font-mono"
          >
            ↻ Repetir para cada banco. Todos os dias.
          </motion.div>

          {/* Impact badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.8, duration: 0.5 }}
            className="mt-6 bg-red-950/40 border border-red-900/40 rounded-xl px-6 py-3 text-center"
          >
            <div className="text-2xl font-black text-red-400 font-mono">~100 lançamentos/dia</div>
            <div className="text-xs text-slate-500 mt-1">Processados manualmente, um por um</div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
