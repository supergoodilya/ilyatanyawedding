import { LeafSprig, SprigDivider } from './BotanicalSVG'

// ---- Цвета дресс-кода: замените hex-значения на свои ----
const colors = [
  { hex: '#C8B89A', name: 'бежевый' },
  { hex: '#808C42', name: 'оливковый' },
  { hex: '#073E1F', name: 'изумрудный' },
  { hex: '#7B5C3E', name: 'коричневый' },
  { hex: '#4A3728', name: 'шоколад' },
]
// ---------------------------------------------------------

export default function DressCode() {
  return (
    <section className="bg-cream-200 paper-texture py-14 px-6">
      <div className="max-w-sm mx-auto">

        {/* heading */}
        <div className="text-center mb-6">
          <div className="flex items-center justify-center gap-3 mb-2">
            <LeafSprig className="w-5 h-7 text-sage-400" />
            <h2 className="font-playfair italic text-choco-600 text-2xl">Дресс-код</h2>
            <LeafSprig className="w-5 h-7 text-sage-400" style={{ transform: 'scaleX(-1)' }} />
          </div>
          <SprigDivider className="w-36 h-7 text-sage-300 opacity-70 mx-auto" />
        </div>

        {/* text */}
        <p className="font-lora text-choco-500 text-sm leading-relaxed text-center mb-8">
          Бежевые, зелёные и коричневые оттенки — палитра нашего дня.
          Если привычнее классика — белый верх, чёрный низ тоже прекрасен.
        </p>

        {/* color swatches — staggered cascade */}
        <div className="flex justify-center items-end" style={{ gap: 0 }}>
          {colors.map((c, i) => {
            const offsets = [-14, -7, 0, 7, 14]
            const sizes   = [56, 64, 72, 64, 56]
            return (
              <div
                key={i}
                className="flex flex-col items-center"
                style={{
                  marginLeft: i === 0 ? 0 : '-14px',
                  zIndex: i < 2 ? i + 1 : colors.length - i + 1,
                  transform: `translateY(${offsets[i]}px)`,
                }}
              >
                <div
                  className="rounded-full border-2 border-white shadow-md"
                  style={{
                    width:  sizes[i],
                    height: sizes[i],
                    backgroundColor: c.hex,
                    boxShadow: '0 4px 12px rgba(0,0,0,0.18)',
                  }}
                />
                <span
                  className="font-lora text-choco-400 mt-2 text-center leading-tight"
                  style={{ fontSize: '9px', maxWidth: sizes[i] }}
                >
                  {c.name}
                </span>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
