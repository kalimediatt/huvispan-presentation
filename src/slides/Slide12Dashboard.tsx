import { motion, useSpring } from 'framer-motion';
import { Activity, CheckCircle2, Clock, BarChart3, ArrowUpRight, ChevronRight } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';
import { useInView } from 'framer-motion';

function AnimatedMetric({ value, suffix = '%' }: { value: number; suffix?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [display, setDisplay] = useState(0);
  const spring = useSpring(0, { damping: 30, stiffness: 60 });

  useEffect(() => { if (isInView) spring.set(value); }, [isInView, spring, value]);
  useEffect(() => {
    return spring.on('change', (v) => setDisplay(Math.floor(v)));
  }, [spring]);

  return <span ref={ref}>{display}{suffix}</span>;
}

export default function Slide12Dashboard() {
  return (
    <div className="slide-container w-full h-full flex flex-col justify-center max-w-6xl mx-auto">
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-8 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-4xl sm:text-5xl font-black tracking-tighter text-white">
          Visão Gerencial. Não Operacional.
        </h2>
        <p className="mt-3 text-lg text-slate-400 font-light">
          A tela que o coordenador financeiro verá todos os dias de manhã.
        </p>
      </motion.div>

      {/* Mac Window */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="w-full bg-slate-950 rounded-2xl border border-slate-800 shadow-2xl overflow-hidden flex flex-col"
      >
        {/* Header */}
        <div className="h-10 bg-slate-900 border-b border-slate-800 px-4 flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-amber-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
          <div className="ml-4 text-xs font-mono text-slate-500 flex items-center gap-2">
            <Activity size={12} className="text-blue-500" /> Huvispan · Conciliação Financeira
          </div>
        </div>

        <div className="p-3 md:p-6 bg-slate-950">
          {/* Dash Header */}
          <div className="flex justify-between items-end border-b border-slate-800 pb-4 mb-5">
            <div>
              <h1 className="text-xl font-bold text-slate-100">Conciliações · Contas a Receber</h1>
              <p className="text-xs text-slate-500">Hoje, 19 Março 2026 · Atualizado há 3 min</p>
            </div>
            <span className="px-3 py-1 bg-green-950/40 text-green-400 border border-green-900/50 rounded text-xs font-bold flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" /> ENGINE ONLINE
            </span>
          </div>

          {/* KPIs */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-5">
            <div className="bg-slate-900/50 border border-slate-800 p-4 rounded-xl">
              <div className="text-slate-400 text-xs mb-1 flex items-center gap-1.5">
                <CheckCircle2 size={14} className="text-blue-400" /> Conciliado Automático
              </div>
              <div className="text-3xl font-mono font-bold text-white flex items-baseline gap-2">
                <AnimatedMetric value={94} />
                <span className="text-xs font-sans text-green-500 bg-green-500/10 px-1.5 py-0.5 rounded flex items-center">
                  <ArrowUpRight size={12} /> 12%
                </span>
              </div>
            </div>
            <div className="bg-slate-900/50 border border-slate-800 p-4 rounded-xl">
              <div className="text-slate-400 text-xs mb-1 flex items-center gap-1.5">
                <Clock size={14} className="text-amber-400" /> Exceções para Análise
              </div>
              <div className="text-3xl font-mono font-bold text-white">
                <AnimatedMetric value={6} suffix="" /> <span className="text-lg text-slate-500">%</span>
              </div>
            </div>
            <div className="bg-slate-900/50 border border-slate-800 p-4 rounded-xl">
              <div className="text-slate-400 text-xs mb-1 flex items-center gap-1.5">
                <BarChart3 size={14} className="text-emerald-400" /> Horas Economizadas
              </div>
              <div className="text-3xl font-mono font-bold text-emerald-400">
                <AnimatedMetric value={125} suffix="h" />
              </div>
            </div>
          </div>

          {/* Table */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="bg-slate-900/30 border border-slate-800 rounded-xl overflow-hidden"
          >
            <div className="bg-slate-900/80 px-4 py-2.5 border-b border-slate-800 flex justify-between items-center">
              <span className="text-xs font-bold text-slate-200">Últimas Transações</span>
              <span className="text-[10px] text-blue-400 flex items-center">Ver todas <ChevronRight size={12} /></span>
            </div>
            {[
              { time: '09:41', bank: 'Itaú', client: 'Malharia Fios Ouro', value: 'R$ 4.250', status: 'Match Exato', ok: true },
              { time: '09:38', bank: 'BMA FIDC', client: 'Confecções ABC', value: 'R$ 12.100', status: 'Soma N:1', ok: true },
              { time: '09:35', bank: 'Viacredi', client: 'Luciano M.', value: 'R$ 1.800', status: 'Pendente', ok: false },
            ].map((tr, i) => (
              <div key={i} className="flex px-4 py-2.5 border-b border-slate-800/30 text-xs items-center hover:bg-slate-800/30">
                <div className="w-12 font-mono text-slate-500">{tr.time}</div>
                <div className="w-20 text-slate-500">{tr.bank}</div>
                <div className="flex-1 font-medium text-slate-300">{tr.client}</div>
                <div className="w-24 text-right font-mono text-slate-400">{tr.value}</div>
                <div className="w-24 text-right">
                  <span className={`text-[10px] px-2 py-0.5 rounded-full border ${
                    tr.ok
                      ? 'border-emerald-900/50 text-emerald-500 bg-emerald-950/20'
                      : 'border-amber-900/50 text-amber-500 bg-amber-950/20'
                  }`}>
                    {tr.status}
                  </span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
