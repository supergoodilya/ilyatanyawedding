import { CornerSprigLeft, CornerSprigRight, LeafSprig } from './BotanicalSVG'

const PhotoPlaceholder = ({ label, className = '' }) => (
  <div className={`relative bg-sage-100 flex flex-col items-center justify-center overflow-hidden ${className}`}>
    {/* subtle diagonal stripes */}
    <div className="absolute inset-0 opacity-20"
      style={{
        backgroundImage: 'repeating-linear-gradient(-45deg, #8AA87A 0px, #8AA87A 1px, transparent 1px, transparent 12px)',
      }}
    />
    <svg viewBox="0 0 60 60" className="w-10 h-10 text-sage-300 relative z-10" fill="none">
      <circle cx="30" cy="22" r="9" stroke="currentColor" strokeWidth="1.5" />
      <path d="M10 48 C10 35 50 35 50 48" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
    <p className="font-lora text-sage-400 text-xs mt-2 px-3 text-center relative z-10 leading-relaxed">
      {label}
    </p>
  </div>
)

export default function Hero() {
  return (
    <section className="relative bg-cream-50 paper-texture overflow-hidden pt-8 pb-12 px-6">
      {/* corner botanicals */}
      <CornerSprigLeft className="absolute top-0 left-0 w-28 h-28 text-sage-400 opacity-80" />
      <CornerSprigRight className="absolute top-0 right-0 w-28 h-28 text-sage-400 opacity-80" />

      {/* heading */}
      <div className="text-center mt-12 mb-6">
        <p className="font-lora text-choco-300 tracking-widest2 text-xs uppercase mb-1">
          история одной любви
        </p>
        <h1 className="font-playfair italic text-choco-600 text-3xl leading-snug">
          Любовь — это...
        </h1>
      </div>

      {/* photo + watermark text */}
      <div className="relative flex justify-center items-center py-6">
        {/* "You I Love" — fills full width behind photo */}
        <div className="absolute inset-0 flex flex-col justify-center gap-1 pointer-events-none select-none overflow-hidden">
          {Array(16).fill(null).map((_, i) => (
            <p key={i}
              className="font-dancing text-sage-400 text-xl opacity-40"
              style={{
                transform: `rotate(-20deg) translateX(${i % 2 === 0 ? '-10px' : '-50px'})`,
                whiteSpace: 'nowrap',
                lineHeight: '2.4rem',
              }}>
              {Array(8).fill('You I Love ').join('')}
            </p>
          ))}
        </div>

        {/* main photo — tilted, with deep shadow */}
        <img
          src='src/assets/main_up.jpg'
          className="relative z-10 rounded-sm"
          style={{
            width: '62%',
            transform: 'rotate(-3deg)',
            boxShadow: '6px 10px 32px rgba(0,0,0,0.35), 0 2px 8px rgba(0,0,0,0.18)',
          }}
        />
      </div>

      {/* names + tagline */}
      <div className="text-center mt-8">
        <div className="flex items-center justify-center gap-3 mb-2">
          <LeafSprig className="w-6 h-8 text-sage-400" />
          <h2 className="font-playfair text-choco-500 text-4xl">
            Илья & Таня 
          </h2>
          <LeafSprig className="w-6 h-8 text-sage-400" style={{ transform: 'scaleX(-1)' }} />
        </div>
        <p className="font-playfair italic text-choco-300 text-base tracking-wide">
          ...совместные мечты
        </p>
      </div>
    </section>
  )
}
