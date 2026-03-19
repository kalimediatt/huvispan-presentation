import { motion } from 'framer-motion';
import { Database, ArrowRight, FileCheck, BrainCircuit, ShieldCheck } from 'lucide-react';
import { useEffect, useState } from 'react';

const PIPELINE_STEPS = [
  { label: 'Extrato Recebido', sub: 'PIX R$ 4.250,00 — Nome: Luciano M.', icon: Database, color: 'blue' },
  { label: 'Normalização', sub: 'OFX → JSON. CNPJ extraído.', icon: FileCheck, color: 'cyan' },
  { label: 'Motor N:1', sub: 'Match: NF 12.847 (R$ 4.250,00) ✓', icon: BrainCircuit, color: 'green' },
  { label: 'Baixa no Sapiens', sub: 'API WSDL → Título liquidado.', icon: ShieldCheck, color: 'emerald' },
];

const colorMap: Record<string, { bg: string; border: string; text: string; dot: string }> = {
  blue: { bg: 'bg-blue-950/30', border: 'border-blue-500/30', text: 'text-blue-400', dot: 'bg-blue-500' },
  cyan: { bg: 'bg-cyan-950/30', border: 'border-cyan-500/30', text: 'text-cyan-400', dot: 'bg-cyan-500' },
  green: { bg: 'bg-green-950/30', border: 'border-green-500/30', text: 'text-green-400', dot: 'bg-green-500' },
  emerald: { bg: 'bg-emerald-950/30', border: 'border-emerald-500/30', text: 'text-emerald-400', dot: 'bg-emerald-500' },
};

export default function Slide9Fluxo() {
  const [activeStep, setActiveStep] = useState(-1);

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];
    PIPELINE_STEPS.forEach((_, i) => {
      timers.push(setTimeout(() => setActiveStep(i), 1200 + i * 1500));
    });
    // Loop
    timers.push(setTimeout(() => setActiveStep(-1), 1200 + PIPELINE_STEPS.length * 1500 + 1000));
    timers.push(setTimeout(() => {
      // Restart cycle
      PIPELINE_STEPS.forEach((_, i) => {
        timers.push(setTimeout(() => setActiveStep(i), i * 1500));
      });
    }, 1200 + PIPELINE_STEPS.length * 1500 + 1500));
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="slide-container w-full h-full flex flex-col justify-center max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl sm:text-4xl md:text-4xl sm:text-5xl font-black tracking-tighter text-white">
          A Jornada de um Pagamento
        </h2>
        <p className="mt-3 text-lg text-slate-400 font-light">
          Do extrato bancário à baixa no ERP — sem intervenção manual.
        </p>
      </motion.div>

      {/* Pipeline */}
      <div className="relative flex flex-col md:flex-row md:items-stretch gap-4 md:gap-0">
        {/* Connecting line */}
        <div className="hidden md:block absolute top-1/2 left-0 right-0 h-px bg-slate-800 -translate-y-1/2 z-0" />

        {PIPELINE_STEPS.map((step, i) => {
          const Icon = step.icon;
          const colors = colorMap[step.color];
          const isActive = activeStep >= i;

          return (
            <div key={i} className="flex-1 flex items-center relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.15, duration: 0.5 }}
                className={`w-full rounded-2xl p-5 border transition-all duration-500 ${
                  isActive
                    ? `${colors.bg} ${colors.border} shadow-lg`
                    : 'bg-slate-900/40 border-slate-800/60'
                }`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors duration-500 ${
                    isActive ? `${colors.bg} ${colors.border} border` : 'bg-slate-800 border border-slate-700'
                  }`}>
                    <Icon size={20} className={isActive ? colors.text : 'text-slate-500'} />
                  </div>
                  <div className={`w-2 h-2 rounded-full transition-colors duration-500 ${
                    isActive ? `${colors.dot} shadow-lg` : 'bg-slate-700'
                  }`} />
                </div>
                <div className={`text-sm font-bold transition-colors duration-500 ${isActive ? 'text-slate-100' : 'text-slate-400'}`}>
                  {step.label}
                </div>
                <div className={`text-xs mt-1 transition-colors duration-500 ${isActive ? 'text-slate-400' : 'text-slate-600'}`}>
                  {step.sub}
                </div>
              </motion.div>

              {/* Arrow between steps */}
              {i < PIPELINE_STEPS.length - 1 && (
                <div className="hidden md:flex items-center justify-center w-8 shrink-0 z-20">
                  <motion.div
                    animate={{ opacity: activeStep > i ? 1 : 0.3 }}
                    className="text-slate-600"
                  >
                    <ArrowRight size={16} />
                  </motion.div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Status bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.6 }}
        className="mt-4 md:mt-8 flex justify-center"
      >
        <div className="bg-slate-900/60 border border-slate-800/60 rounded-full px-6 py-2 flex items-center gap-3">
          <div className={`w-2 h-2 rounded-full transition-colors duration-500 ${
            activeStep === PIPELINE_STEPS.length - 1 ? 'bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]' : 'bg-blue-500 animate-pulse'
          }`} />
          <span className="text-xs text-slate-400 font-mono">
            {activeStep === PIPELINE_STEPS.length - 1
              ? 'CONCLUÍDO — Título liquidado com sucesso'
              : activeStep >= 0
                ? `PROCESSANDO — ${PIPELINE_STEPS[activeStep].label}...`
                : 'AGUARDANDO — Novo extrato...'}
          </span>
        </div>
      </motion.div>
    </div>
  );
}
