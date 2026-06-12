import { BigLeaf } from './BotanicalSVG'

const PhotoSlot = ({ label, className = '' }) => (
  <div className={`relative overflow-hidden rounded-sm ${className}`}>
    <div className="absolute inset-0 bg-gradient-to-br from-sage-700 to-sage-600" />
    <div className="absolute inset-0 opacity-15"
      style={{
        backgroundImage: 'repeating-linear-gradient(-45deg, #B5C9A8 0px, #B5C9A8 1px, transparent 1px, transparent 14px)',
      }}
    />
    <div className="absolute inset-0 flex items-center justify-center opacity-20">
      <BigLeaf className="w-16 h-20 text-sage-300" />
    </div>
    <div className="relative z-10 flex flex-col items-center justify-center h-full gap-2 py-8">
      <svg viewBox="0 0 40 50" className="w-10 h-12 text-sage-300" fill="none">
        <path d="M10 5 L8 28 L20 45 L32 28 L30 5Z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
        <path d="M5 2 L35 2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
        <path d="M20 45 L20 50" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
        <path d="M14 50 L26 50" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      </svg>
      <p className="font-lora text-sage-200 text-xs text-center px-6 leading-relaxed">
        {label}
      </p>
    </div>
  </div>
)

export default function Cheers() {
  return (
    <section className="bg-sage-700 py-12 px-6 overflow-hidden relative">
      {/* repeating "Cheers!" watermark lines */}
      <div className="absolute inset-0 flex flex-col justify-center gap-1 pointer-events-none select-none overflow-hidden">
        {Array(10).fill(null).map((_, i) => (
          <p key={i}
            className="font-lato text-sage-600 text-2xl whitespace-nowrap opacity-40"
            style={{
              transform: `translateX(${i % 2 === 0 ? '-20px' : '20px'})`,
              animationDelay: `${i * 0.1}s`,
            }}>
            {Array(6).fill('Cheers! ').join('')}
          </p>
        ))}
      </div>

      {/* content */}
      <div className="relative z-10">
        <p className="font-lato text-cream-100 text-4xl text-center mb-8 drop-shadow">
          Cheers!
        </p>

        {/* photo + small photo side by side */}
        <div className="flex gap-3 max-w-xs mx-auto">
          <PhotoSlot
            label="Фото бокалов / праздника"
            className="flex-1 aspect-[3/4]"
          />
          <div className="flex flex-col gap-3 flex-1">
            <PhotoSlot
              label="Фото атмосферы"
              className="flex-1"
            />
            <PhotoSlot
              label="Фото деталей"
              className="flex-1"
            />
          </div>
        </div>

        <p className="font-playfair italic text-cream-200 text-center text-sm mt-6 opacity-80">
          Пусть этот вечер будет полон смеха и тёплых воспоминаний
        </p>
      </div>
    </section>
  )
}
