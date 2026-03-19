import { useState, useEffect, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Maximize } from 'lucide-react';

// ACT I — O PROBLEMA (Slides 1-5)
import Slide1Capa from './slides/Slide1Capa';
import Slide2Entregas from './slides/Slide2Entregas';       // "O que Encontramos"
import Slide3Diagnostico from './slides/Slide3Diagnostico'; // "O Dia-a-Dia Real"
import Slide4Calculadora from './slides/Slide4Calculadora'; // Calculadora de Prejuízo
import Slide5Riscos from './slides/Slide5Riscos';           // "O Ponto de Ruptura"

// ACT II — A EPIFANIA (Slides 6-9)
import Slide7Middleware from './slides/Slide7Niveis';        // Middleware 3-colunas
import Slide8AntesDepois from './slides/Slide8AntesDepois';  // "A Transformação"
import Slide9Pipeline from './slides/Slide9Fluxo';           // Pipeline Animado

// ACT III — A PROVA (Slides 10-12)
import Slide10Dashboard from './slides/Slide12Dashboard';    // Dashboard Real
import Slide11Timeline from './slides/Slide10Cronograma';    // 60 Dias MVP
import Slide12Protections from './slides/Slide11Trincheiras';// 3 Camadas de Proteção

// ACT IV — O CONVITE (Slides 13-15)
import Slide13Garantia from './slides/SlideGarantia';        // Garantia (quote Juliano)
import Slide14ValueStack from './slides/Slide13Garantia';    // Value Stack (Hormozi)
import Slide15Final from './slides/Slide14Final';            // CTA

const SLIDES = [
  // ACT I
  Slide1Capa,
  Slide2Entregas,
  Slide3Diagnostico,
  Slide4Calculadora,
  Slide5Riscos,
  // ACT II
  Slide7Middleware,
  Slide8AntesDepois,
  Slide9Pipeline,
  // ACT III
  Slide10Dashboard,
  Slide11Timeline,
  Slide12Protections,
  // ACT IV
  Slide13Garantia,
  Slide14ValueStack,
  Slide15Final,
];

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => Math.min(prev + 1, SLIDES.length - 1));
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  }, []);

  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch((err) => {
        console.log(`Error attempting to enable fullscreen: ${err.message}`);
      });
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
        setIsFullscreen(false);
      }
    }
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;

      if (e.key === 'ArrowRight') {
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
      } else if (e.key === ' ' || e.key === 'Spacebar') {
        // Disable space on calculator slide (index 3)
        if (currentSlide !== 3) {
          e.preventDefault();
          nextSlide();
        }
      } else if (e.key === 'f' || e.key === 'F') {
        toggleFullscreen();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide, currentSlide, toggleFullscreen]);

  const CurrentSlideComponent = SLIDES[currentSlide];
  const progress = ((currentSlide + 1) / SLIDES.length) * 100;

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-slate-950 text-slate-50 font-sans selection:bg-blue-500/30">

      {/* Background */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40 bg-grid-dots" />
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-blue-600/10 blur-[100px] rounded-full pointer-events-none z-0" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-cyan-600/10 blur-[100px] rounded-full pointer-events-none z-0" />

      {/* Progress Bar */}
      <div className="absolute top-0 left-0 h-[2px] w-full bg-slate-800 z-50">
        <motion.div
          className="h-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        />
      </div>

      {/* Main Slide */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 1.01 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.05}
          onDragEnd={(_, info) => {
            if (info.offset.x < -50) {
              nextSlide();
            } else if (info.offset.x > 50) {
              prevSlide();
            }
          }}
          className="absolute inset-0 w-full h-full flex items-center justify-center p-4 md:p-8 lg:p-16 z-10 overflow-hidden"
        >
          <CurrentSlideComponent />
        </motion.div>
      </AnimatePresence>

      {/* Navigation */}
      <div className="fixed bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-4 md:gap-6 opacity-100 md:opacity-0 md:hover:opacity-100 transition-opacity duration-300 z-50 bg-slate-900/60 backdrop-blur-md px-4 py-2 md:px-6 md:py-3 rounded-full border border-slate-700/50 shadow-2xl">
        <button
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className="text-slate-400 hover:text-white transition-colors disabled:opacity-30 cursor-pointer"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={toggleFullscreen}
          className="text-slate-400 hover:text-white transition-colors cursor-pointer"
          title="Toggle Fullscreen (F)"
        >
          <Maximize size={20} />
        </button>
        <button
          onClick={nextSlide}
          disabled={currentSlide === SLIDES.length - 1}
          className="text-slate-400 hover:text-white transition-colors disabled:opacity-30 cursor-pointer"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Slide Counter */}
      <div className="fixed bottom-6 right-8 text-xs font-mono text-slate-500 font-semibold z-50 tracking-widest hidden md:block">
        {String(currentSlide + 1).padStart(2, '0')} / {String(SLIDES.length).padStart(2, '0')}
      </div>
    </div>
  );
}
