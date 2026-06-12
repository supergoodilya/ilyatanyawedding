import { BigLeaf, SprigDivider } from './BotanicalSVG'

const PhotoSlot = ({ label, hint, className = '' }) => (
  <div className={`relative overflow-hidden rounded-sm shadow-md ${className}`}>
    {/* gradient bg */}
    <div className="absolute inset-0 bg-gradient-to-br from-sage-100 to-cream-200" />
    {/* diagonal pattern */}
    <div className="absolute inset-0 opacity-15"
      style={{
        backgroundImage: 'repeating-linear-gradient(-45deg, #6B8A5E 0px, #6B8A5E 1px, transparent 1px, transparent 16px)',
      }}
    />
    {/* leaf watermark */}
    <div className="absolute inset-0 flex items-center justify-center opacity-20">
      <BigLeaf className="w-20 h-24 text-sage-400" />
    </div>
    {/* person icon */}
    <div className="relative z-10 flex flex-col items-center justify-center h-full py-6">
      <svg viewBox="0 0 50 60" className="w-10 h-12 text-sage-300 mb-3" fill="none">
        <circle cx="25" cy="18" r="10" stroke="currentColor" strokeWidth="1.5" />
        <path d="M5 55 C5 38 45 38 45 55" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
      <p className="font-lora text-sage-500 text-xs text-center px-4 leading-relaxed font-bold">
        {label}
      </p>
      {hint && (
        <p className="font-lora text-sage-400 text-[10px] text-center px-4 mt-1 leading-relaxed">
          {hint}
        </p>
      )}
    </div>
  </div>
)

const shadow = '4px 8px 24px rgba(0,0,0,0.22), 0 1px 4px rgba(0,0,0,0.12)'

export default function PhotoGallery() {
  return (
    <section className="bg-cream-100 paper-texture py-12 px-5">
      <div className="font-playfair text-2xl text-choco-500 text-center mb-2">Это мы, красивые!</div>
      <div className="flex justify-center mb-10">
        <SprigDivider className="w-40 h-8 text-sage-400 opacity-60" />
      </div>

      {/* row 1: two photos, staggered vertically */}
      <div className="relative flex justify-center items-start mb-2" style={{ height: 220 }}>
        <img
          src='/we_5.jpg'
          className="absolute object-cover rounded-sm"
          style={{
            width: '52%', left: '4%', top: 0,
            transform: 'rotate(-3deg)',
            boxShadow: shadow,
          }}
        />
        <img
          src='/we_3.jpg'
          className="absolute object-cover rounded-sm"
          style={{
            width: '46%', right: '4%', top: 40,
            transform: 'rotate(2.5deg)',
            boxShadow: shadow,
          }}
        />
      </div>

      {/* row 2: wide center photo */}
      <div className="flex justify-center mt-8 mb-2">
        <img
          src='/we_1.jpg'
          className="object-cover rounded-sm"
          style={{
            width: '78%',
            transform: 'rotate(-1.5deg)',
            boxShadow: shadow,
          }}
        />
      </div>

      {/* row 3: two photos staggered, mirrors row 1 */}
      <div className="relative flex justify-center items-start mt-2" style={{ height: 270 }}>
        <img
          src='/we_4.jpg'
          className="absolute object-cover rounded-sm"
          style={{
            width: '46%', left: '4%', top: -20,
            transform: 'rotate(2deg)',
            boxShadow: shadow,
          }}
        />
        <img
          src='/we_2.jpg'
          className="absolute object-cover rounded-sm"
          style={{
            width: '52%', right: '4%', top: -40,
            transform: 'rotate(-2.5deg)',
            boxShadow: shadow,
          }}
        />
      </div>

    </section>
  )
}
