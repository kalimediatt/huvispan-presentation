import { motion, useSpring } from 'framer-motion';
import { Calculator, TrendingDown, Clock, Users, ArrowRight, DollarSign, Calendar } from 'lucide-react';
import { useState, useEffect } from 'react';

function AnimatedCurrency({ value, suffix = "" }: { value: number, suffix?: string }) {
  const spring = useSpring(0, { damping: 20, stiffness: 60 });
  const [display, setDisplay] = useState("R$ 0,00");

  useEffect(() => {
    spring.set(value);
  }, [spring, value]);

  useEffect(() => {
    return spring.on("change", (latest) => {
      setDisplay(
        new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(latest)
      );
    });
  }, [spring]);

  return <span>{display}{suffix}</span>;
}

export default function Slide4Calculadora() {
  const [hoursPerDay, setHoursPerDay] = useState(3);
  const [professionals, setProfessionals] = useState(3);
  const [hourlyRate, setHourlyRate] = useState(45);
  const [daysPerMonth, setDaysPerMonth] = useState(22);

  const monthlyCost = hoursPerDay * professionals * hourlyRate * daysPerMonth;
  const annualCost = monthlyCost * 12;
  const errorRiskCost = annualCost * 0.15; // Assumption: 15% hidden cost due to errors/rework

  return (
    <div className="slide-container w-full h-full flex flex-col justify-center max-w-6xl mx-auto">
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter text-gradient-red flex items-center gap-4">
          <Calculator size={48} className="text-red-500" />
          O Prejuízo Invisível
        </h2>
        <p className="mt-3 text-lg text-slate-400">
          Quanto custa a conciliação manual hoje? Use o teclado para slide, mas arraste livremente aqui.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-12 w-full h-full lg:max-h-[500px] pb-24 lg:pb-0 overflow-y-auto lg:overflow-visible">
        {/* Controls - Left Side */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-5 flex flex-col gap-8 bg-slate-900/50 p-8 rounded-2xl border border-slate-800/60 shadow-xl"
        >
          {/* Slider 1 */}
          <div className="flex flex-col gap-3">
            <div className="flex justify-between items-center text-sm font-semibold text-slate-300">
              <span className="flex items-center gap-2"><Clock size={16} className="text-blue-400" /> Horas Manuais/Dia</span>
              <span className="bg-blue-950/50 text-blue-300 py-1 px-3 rounded-md border border-blue-900/50">{hoursPerDay}h</span>
            </div>
            <input 
              type="range" min="1" max="8" step="1" 
              value={hoursPerDay} 
              onChange={(e) => setHoursPerDay(Number(e.target.value))}
              className="w-full accent-blue-500 cursor-pointer h-1.5 bg-slate-800 rounded-lg appearance-none"
            />
          </div>

          {/* Slider 2 */}
          <div className="flex flex-col gap-3">
            <div className="flex justify-between items-center text-sm font-semibold text-slate-300">
              <span className="flex items-center gap-2"><Users size={16} className="text-cyan-400" /> Profissionais Alocados</span>
              <span className="bg-cyan-950/50 text-cyan-300 py-1 px-3 rounded-md border border-cyan-900/50">{professionals} pax</span>
            </div>
            <input 
              type="range" min="1" max="10" step="1" 
              value={professionals} 
              onChange={(e) => setProfessionals(Number(e.target.value))}
              className="w-full accent-cyan-500 cursor-pointer h-1.5 bg-slate-800 rounded-lg appearance-none"
            />
          </div>

          {/* Slider 3 */}
          <div className="flex flex-col gap-3">
            <div className="flex justify-between items-center text-sm font-semibold text-slate-300">
              <span className="flex items-center gap-2"><DollarSign size={16} className="text-green-400" /> Custo Hora/Tributado</span>
              <span className="bg-green-950/50 text-green-300 py-1 px-3 rounded-md border border-green-900/50">R$ {hourlyRate}/h</span>
            </div>
            <input 
              type="range" min="20" max="150" step="5" 
              value={hourlyRate} 
              onChange={(e) => setHourlyRate(Number(e.target.value))}
              className="w-full accent-green-500 cursor-pointer h-1.5 bg-slate-800 rounded-lg appearance-none"
            />
          </div>

          {/* Slider 4 */}
          <div className="flex flex-col gap-3">
            <div className="flex justify-between items-center text-sm font-semibold text-slate-300">
              <span className="flex items-center gap-2"><Calendar size={16} className="text-orange-400" /> Dias Úteis/Mês</span>
              <span className="bg-orange-950/50 text-orange-300 py-1 px-3 rounded-md border border-orange-900/50">{daysPerMonth} dias</span>
            </div>
            <input 
              type="range" min="15" max="25" step="1" 
              value={daysPerMonth} 
              onChange={(e) => setDaysPerMonth(Number(e.target.value))}
              className="w-full accent-orange-500 cursor-pointer h-1.5 bg-slate-800 rounded-lg appearance-none"
            />
          </div>
        </motion.div>

        {/* Results - Right Side */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-4 h-full"
        >
          {/* Monthly */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 flex flex-col justify-center overflow-hidden">
            <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 whitespace-nowrap truncate">Desperdício Direto (Mês)</div>
            <div className="text-3xl xl:text-4xl font-mono font-bold text-slate-200 tracking-tighter truncate">
              <AnimatedCurrency value={monthlyCost} />
            </div>
            <div className="text-sm text-slate-500 mt-2 leading-relaxed opacity-80">
              Valor literal jogado fora em rotinas de Alt-Tab, cópia de dados e conferência de planilhas.
            </div>
          </div>

          {/* Error Rate */}
          <div className="bg-orange-950/20 border border-orange-900/30 rounded-2xl p-5 flex flex-col justify-center overflow-hidden">
            <div className="text-xs font-bold text-orange-500 uppercase tracking-widest mb-2 flex items-center gap-1.5 whitespace-nowrap truncate">
              <TrendingDown size={14} className="shrink-0" /> Custo Oculto (15%)
            </div>
            <div className="text-3xl xl:text-4xl font-mono font-bold text-orange-400 tracking-tighter truncate">
              <AnimatedCurrency value={errorRiskCost} />
            </div>
            <div className="text-sm text-slate-500 mt-2 leading-relaxed opacity-80">
              Impacto de juros, multas não identificadas, atrasos de baixa e fricção com clientes.
            </div>
          </div>
          {/* Annual Total */}
          <div className="bg-gradient-to-br from-red-950/50 to-slate-900 border border-red-900/40 rounded-2xl p-5 flex flex-col justify-center overflow-hidden">
            <div className="text-xs font-bold text-red-400 uppercase tracking-widest mb-2 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              Vazamento Anual
            </div>
            <div className="text-3xl xl:text-4xl font-mono font-black text-white tracking-tighter">
              <AnimatedCurrency value={annualCost} />
            </div>
            <div className="text-sm text-slate-500 mt-2 leading-relaxed opacity-80">
              12 meses de processo manual acumulados.
            </div>
          </div>
          {/* Projected Savings */}
          <div className="bg-green-950/20 border border-green-900/30 rounded-2xl p-5 flex flex-col justify-center overflow-hidden">
            <div className="text-xs font-bold text-green-500 uppercase tracking-widest mb-2 flex items-center gap-1.5 whitespace-nowrap truncate">
              <ArrowRight size={14} className="shrink-0" /> Economia Projetada (85%)
            </div>
            <div className="text-3xl xl:text-4xl font-mono font-bold text-green-400 tracking-tighter truncate">
              <AnimatedCurrency value={annualCost * 0.85} />
            </div>
            <div className="text-sm text-slate-500 mt-2 leading-relaxed opacity-80">
              Retorno estimado no primeiro ano de operação automatizada.
            </div>
          </div>
          
        </motion.div>
      </div>
    </div>
  );
}
