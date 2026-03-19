import { motion, useSpring } from 'framer-motion';
import { BrainCircuit, LayoutDashboard, Globe, Cpu, GraduationCap, HeadphonesIcon, Package } from 'lucide-react';
import { useState, useEffect } from 'react';

function AnimatedCurrency({ value }: { value: number }) {
  const spring = useSpring(0, { damping: 20, stiffness: 50 });
  const [display, setDisplay] = useState('R$ 0');

  useEffect(() => { spring.set(value); }, [spring, value]);
  useEffect(() => {
    return spring.on('change', (v) => {
      setDisplay(new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 0 }).format(v));
    });
  }, [spring]);

  return <span>{display}</span>;
}

const STACK_ITEMS = [
  { icon: BrainCircuit, label: 'Motor de Conciliação 4 Níveis', value: 45000 },
  { icon: LayoutDashboard, label: 'Dashboard Gerencial Tempo Real', value: 30000 },
  { icon: Globe, label: 'Integração 8 Bancos + 4 FIDCs', value: 28000 },
  { icon: Cpu, label: 'IA de Classificação Automática', value: 20000 },
  { icon: GraduationCap, label: 'Treinamento + Documentação + IT', value: 12000 },
  { icon: HeadphonesIcon, label: 'Suporte Dedicado por 60 dias', value: 13000 },
];

const TOTAL = STACK_ITEMS.reduce((a, b) => a + b.value, 0);

export default function Slide13Garantia() {
  return (
    <div className="slide-container w-full h-full flex flex-col justify-center max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h2 className="text-3xl sm:text-4xl md:text-4xl sm:text-5xl font-black tracking-tighter">
          <span className="bg-gradient-to-r from-slate-50 to-green-400 bg-clip-text text-transparent">
            O que vocês recebem
          </span>
        </h2>
        <p className="mt-3 text-lg text-slate-400 font-light">
          Valor real de mercado de cada componente da solução.
        </p>
      </motion.div>

      {/* Value Stack */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.12, delayChildren: 0.4 } } }}
        className="mt-10 flex flex-col gap-2"
      >
        {STACK_ITEMS.map((item, i) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
              }}
              className="flex items-center justify-between bg-slate-900/50 border border-slate-800/60 rounded-xl px-6 py-4 hover:border-green-500/30 transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-green-950/40 border border-green-900/30 flex items-center justify-center">
                  <Icon size={20} className="text-green-400" />
                </div>
                <span className="text-base font-semibold text-slate-200">{item.label}</span>
              </div>
              <span className="text-lg font-mono font-bold text-green-400">
                <AnimatedCurrency value={item.value} />+
              </span>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Total */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.6, duration: 0.6 }}
        className="mt-6 bg-gradient-to-br from-green-950/40 to-slate-900 border border-green-800/40 rounded-2xl px-8 py-6 flex items-center justify-between shadow-[0_0_30px_rgba(34,197,94,0.08)]"
      >
        <div className="flex items-center gap-3">
          <Package size={24} className="text-green-400" />
          <span className="text-xl font-bold text-slate-100">Valor Total Equivalente</span>
        </div>
        <span className="text-3xl font-mono font-black text-green-400">
          <AnimatedCurrency value={TOTAL} />+
        </span>
      </motion.div>

      {/* Investment note */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 0.6 }}
        className="mt-6 text-center text-sm text-slate-500 italic"
      >
        O investimento real será apresentado verbalmente. Foco agora: o valor que vocês levam.
      </motion.p>
    </div>
  );
}
