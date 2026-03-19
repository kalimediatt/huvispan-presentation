import { motion, useSpring } from 'framer-motion';
import { Globe, Download, Table2, Monitor, Search, CheckCircle } from 'lucide-react';
import { useState, useEffect } from 'react';

function AnimatedNumber({ value, suffix = '' }: { value: number; suffix?: string }) {
  const spring = useSpring(0, { damping: 20, stiffness: 50 });
  const [display, setDisplay] = useState('0');

  useEffect(() => { spring.set(value); }, [spring, value]);
  useEffect(() => {
    return spring.on('change', (v) => setDisplay(Math.round(v).toString()));
  }, [spring]);

  return <span>{display}{suffix}</span>;
}

const STEPS = [
  { icon: Globe, label: 'Abrir site do banco', sub: 'Itaú, Viacredi, Bradesco...', delay: 0.5 },
  { icon: Download, label: 'Baixar extrato', sub: 'OFX, PDF, CNAB 400', delay: 1.0 },
  { icon: Table2, label: 'Abrir planilha de controle', sub: 'Excel paralelo ao ERP', delay: 1.5 },
  { icon: Monitor, label: 'Conferir no Sapiens', sub: 'Título por título', delay: 2.0 },
  { icon: Search, label: 'Buscar comprovante', sub: 'No Teams, e-mail, pasta...', delay: 2.5 },
  { icon: CheckCircle, label: 'Baixar título', sub: 'Se tudo bater. Senão, volta.', delay: 3.0 },
];

export default function Slide3Diagnostico() {
  return (
    <div className="slide-container w-full h-full flex flex-col justify-center max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-5xl md:text-6xl font-black tracking-tighter">
          <span className="bg-gradient-to-r from-slate-50 to-amber-400 bg-clip-text text-transparent">
            O Dia-a-Dia Real
          </span>
        </h2>
        <p className="mt-4 text-lg text-slate-400">
          O fluxo que a Sabrina executa todos os dias, para cada um dos 12 bancos.
        </p>
      </motion.div>

      {/* Step-by-step animated flow */}
      <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
        {STEPS.map((step, i) => {
          const Icon = step.icon;
          const isLast = i === STEPS.length - 1;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: step.delay, duration: 0.5 }}
              className="relative flex flex-col items-center text-center"
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center border ${
                isLast
                  ? 'bg-green-950/40 border-green-800/40 text-green-400'
                  : 'bg-slate-900/80 border-slate-700/40 text-slate-400'
              }`}>
                <Icon size={24} />
              </div>
              <div className="mt-3 text-sm font-semibold text-slate-200 leading-tight">{step.label}</div>
              <div className="mt-1 text-xs text-slate-500">{step.sub}</div>

              {/* Arrow connector */}
              {!isLast && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: step.delay + 0.3 }}
                  className="absolute -right-2 top-6 text-slate-700 text-lg hidden lg:block"
                >
                  →
                </motion.div>
              )}
            </motion.div>
          );
        })}
      </div>

      {/* Loop indicator */}
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{ delay: 3.5, duration: 1 }}
        className="mt-6 h-px bg-gradient-to-r from-transparent via-red-500/40 to-transparent origin-center"
      />
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.8 }}
        className="text-center text-sm text-red-400/70 font-mono mt-3"
      >
        ↻ Repetir para cada banco. 8 bancos + 4 FIDCs = 12 ciclos.
      </motion.p>

      {/* Impact numbers */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 4.2, duration: 0.6 }}
        className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4"
      >
        <div className="bg-red-950/20 border border-red-900/30 rounded-xl p-4 text-center">
          <div className="text-3xl font-black text-red-400 font-mono">
            <AnimatedNumber value={150} suffix="+" />
          </div>
          <div className="text-xs text-slate-500 mt-1">horas/mês manuais</div>
        </div>
        <div className="bg-amber-950/20 border border-amber-900/30 rounded-xl p-4 text-center">
          <div className="text-3xl font-black text-amber-400 font-mono">3-4h</div>
          <div className="text-xs text-slate-500 mt-1">por dia de trabalho braçal</div>
        </div>
        <div className="bg-slate-900/60 border border-slate-800/60 rounded-xl p-4 text-center">
          <div className="text-3xl font-black text-slate-300 font-mono">
            <AnimatedNumber value={3} />
          </div>
          <div className="text-xs text-slate-500 mt-1">profissionais alocados</div>
        </div>
        <div className="bg-slate-900/60 border border-slate-800/60 rounded-xl p-4 text-center">
          <div className="text-3xl font-black text-slate-300 font-mono">
            <AnimatedNumber value={12} />
          </div>
          <div className="text-xs text-slate-500 mt-1">fontes bancárias</div>
        </div>
      </motion.div>
    </div>
  );
}
