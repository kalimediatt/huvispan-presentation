export default function SlidePlaceholder({ number }: { number: number }) {
  return (
    <div className="slide-container">
      <h1 className="text-4xl sm:text-5xl font-black text-white text-gradient-blue tracking-tighter">
        Slide {number}
      </h1>
      <p className="mt-4 text-slate-400">Em construção...</p>
    </div>
  );
}
