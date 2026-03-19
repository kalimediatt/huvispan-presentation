import { motion } from 'framer-motion';
import { AlertTriangle, Quote, UserX, Brain, TrendingUp, Scale } from 'lucide-react';

const RISKS = [
  { icon: Brain, title: "Conhecimento Concentrado", desc: "Se a Sabrina sair de férias ou da empresa, a conciliação para. Ninguém mais domina o processo completo.", quote: "Hoje sou eu. Tudo que acontece no financeiro, eu faço a conciliação, eu olho os movimentos.", quotee: "— Sabrina, Analista Financeira" },
  { icon: UserX, title: "O Pesadelo do N:1", desc: "Múltiplos PIX picados para uma única nota. Nomes diferentes (Luciano, Roberto, Igreja). Tudo manual.", quote: "Vários PIX para uma nota só. Vai ter uma nota de 10 mil, só que ele foi pagando mil reais, 500 reais... de tudo.", quotee: "— Sabrina, sobre pagamentos parcelados" },
  { icon: TrendingUp, title: "Escala Trava Crescimento", desc: "Dobrar o faturamento significa dobrar o time de conciliação? A operação manual não escala.", quote: "A gente vai precisar utilizar o capital humano das pessoas para onde precisa, de fato.", quotee: "— Eduardo, Diretor Financeiro" },
  { icon: Scale, title: "Erro Inevitável em Volume", desc: "100 lançamentos/dia processados visualmente. Quanto maior o volume, maior a margem de erro humano.", quote: "Confiança de que a ferramenta está cumprindo com 100% de acuracidade. Acho que essa é o que eu posso falar.", quotee: "— Juliano, sobre a exigência #1" },
];

export default function Slide5Riscos() {
  return (
    <div className="slide-container w-full h-full flex flex-col justify-center max-w-6xl mx-auto">
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <h2 className="text-5xl md:text-6xl font-black tracking-tighter flex items-center gap-4">
          <span className="bg-gradient-to-r from-slate-50 to-orange-400 bg-clip-text text-transparent">
            O Ponto de Ruptura
          </span>
          <div className="bg-orange-950/40 p-2 rounded-lg border border-orange-900/50">
            <AlertTriangle className="text-orange-500" size={36} />
          </div>
        </h2>
        <p className="mt-4 text-xl text-slate-400 max-w-2xl font-light">
          Riscos reais que crescem proporcionalmente ao faturamento.
        </p>
      </motion.div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.15, delayChildren: 0.3 } } }}
        className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10"
      >
        {RISKS.map((risk, i) => {
          const Icon = risk.icon;
          return (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, scale: 0.95, y: 10 },
                visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5 } },
              }}
              className="bg-slate-900/40 border border-slate-800/60 p-5 rounded-2xl flex flex-col hover:border-orange-500/30 transition-colors group relative overflow-hidden"
            >
              <div className="absolute -right-12 -top-12 opacity-5 group-hover:opacity-10 transition-opacity">
                <Icon size={140} />
              </div>

              <div className="flex items-center gap-3 mb-3 z-10">
                <div className="bg-orange-950/30 p-2 rounded-lg text-orange-400 group-hover:scale-110 transition-transform">
                  <Icon size={22} />
                </div>
                <h3 className="text-base font-bold text-slate-200">{risk.title}</h3>
              </div>

              <p className="text-sm text-slate-400 leading-relaxed mb-4 flex-grow z-10">
                {risk.desc}
              </p>

              <div className="bg-slate-950/50 rounded-lg p-3 border border-slate-800/80 mt-auto relative z-10">
                <Quote className="absolute text-slate-700/50 -top-2 -left-2" size={20} />
                <p className="text-xs italic text-slate-300 relative z-10 pl-2 leading-relaxed">
                  "{risk.quote}"
                </p>
                <p className="text-[10px] text-slate-600 mt-1 pl-2">{risk.quotee}</p>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
