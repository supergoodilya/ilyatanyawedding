import { LeafSprig, SprigDivider } from './BotanicalSVG'

const PhotoSlot = ({ label, className = '' }) => (
  <div className={`relative overflow-hidden rounded-sm ${className}`}>
    <div className="absolute inset-0 bg-gradient-to-br from-sage-100 to-cream-200" />
    <div className="absolute inset-0 opacity-15"
      style={{
        backgroundImage: 'repeating-linear-gradient(-45deg, #6B8A5E 0px, #6B8A5E 1px, transparent 1px, transparent 16px)',
      }}
    />
    <div className="relative z-10 flex flex-col items-center justify-center h-full py-8 gap-2">
      <svg viewBox="0 0 48 40" className="w-10 h-8 text-sage-300" fill="none">
        <rect x="2" y="8" width="44" height="30" rx="2" stroke="currentColor" strokeWidth="1.4" />
        <path d="M2 14 L46 14" stroke="currentColor" strokeWidth="1.4" />
        <path d="M16 8 L16 2 L32 2 L32 8" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
        <circle cx="24" cy="28" r="5" stroke="currentColor" strokeWidth="1.2" />
      </svg>
      <p className="font-lora text-sage-400 text-xs text-center px-6 leading-relaxed">
        {label}
      </p>
    </div>
  </div>
)

export default function Venue() {
  return (
    <section className="bg-cream-200 paper-texture py-14 px-6">
      <div className="text-center mb-8">
        <div className="flex items-center justify-center gap-3 mb-3">
          <LeafSprig className="w-5 h-7 text-sage-400" />
          <h2 className="font-playfair italic text-choco-600 text-2xl">Место торжества</h2>
          <LeafSprig className="w-5 h-7 text-sage-400" style={{ transform: 'scaleX(-1)' }} />
        </div>
        <SprigDivider className="w-36 h-7 text-sage-400 opacity-60 mx-auto" />
      </div>

      <div className="max-w-sm mx-auto">
        <img class="_1d1tvum" src="https://i5.photo.2gis.com/photo-gallery/9140c8ae-c695-494b-a7cf-b72124fdba03.jpg" alt="Фото"></img>
        
        {/* restaurant info card */}
        <div className="bg-cream-50 border border-cream-300 rounded-sm px-6 py-6 shadow-sm text-center">
          <p className="font-lora text-choco-300 text-xs tracking-widest2 uppercase mb-2">
            ресторан
          </p>
          <h3 className="font-playfair text-choco-600 text-xl mb-1">
            «Нефтяник»
          </h3>

          <div className="flex items-center justify-center gap-2 my-3">
            <div className="h-px flex-1 bg-cream-300" />
            <LeafSprig className="w-4 h-5 text-sage-300" />
            <div className="h-px flex-1 bg-cream-300" />
          </div>

          {/* address */}
          <div className="flex items-start justify-center gap-2 mb-3">
            <svg viewBox="0 0 24 24" className="w-4 h-4 text-sage-400 mt-0.5 flex-shrink-0" fill="none">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"
                stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
              <circle cx="12" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.5" />
            </svg>
            <p className="font-lora text-choco-400 text-sm leading-relaxed">
              ул. Челюскинцев, 12 - 1 этаж 
            </p>
          </div>

          {/* time */}
          <div className="flex items-center justify-center gap-2 mb-4">
            <svg viewBox="0 0 24 24" className="w-4 h-4 text-sage-400 flex-shrink-0" fill="none">
              <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
              <path d="M12 7 L12 12 L16 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <p className="font-lora text-choco-400 text-sm">
              Начало в <span className="font-bold text-choco-600">18:00</span>
            </p>
          </div>

          {/* map link */}
          <a
            href="https://2gis.ru/tyumen/firm/70000001025843142/65.537364%2C57.159082?m=65.537278%2C57.159036%2F19.47&immersive=on"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sage-500 hover:text-sage-600 font-lora text-xs uppercase tracking-widest2 transition-colors border-b border-sage-300 hover:border-sage-500 pb-0.5"
          >
            Открыть на карте
            <svg viewBox="0 0 16 16" className="w-3 h-3" fill="none">
              <path d="M3 8 L13 8 M9 4 L13 8 L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
