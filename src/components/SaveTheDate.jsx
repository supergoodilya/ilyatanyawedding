import { WreathHalf, SprigDivider } from './BotanicalSVG'

export default function SaveTheDate() {
  const days = [
    { weekday: 'Четверг', date: '6', month: 'августа', highlight: false },
    { weekday: 'Пятница', date: '7', month: 'августа', highlight: true  },
    { weekday: 'Суббота', date: '8', month: 'августа', highlight: false },
  ]

  return (
    <section className="bg-cream-50 paper-texture py-14 px-6">
      {/* date row */}
      <div className="flex justify-center items-center gap-0 mb-6">
        {days.map((day, i) => (
          <div key={i} className="flex-1 flex flex-col items-center relative">
            {/* vertical separator */}
            {i > 0 && (
              <div className="absolute left-0 top-4 h-16 w-px bg-cream-300" />
            )}

            <span className="font-lora text-choco-400 text-[10px] tracking-widest2 uppercase mb-1">
              {day.weekday}
            </span>
            <span className="font-lora text-choco-300 text-[10px] tracking-widest2 uppercase">
              {day.month}
            </span>

            {/* date number */}
            <div className="relative mt-2">
              {day.highlight && (
                <svg viewBox="0 0 70 70" className="absolute -inset-5 w-24 h-24 text-sage-400" fill="none">
                  <circle cx="25" cy="45" r="22" stroke="currentColor" strokeWidth="1.5"
                    strokeDasharray="4 3" opacity=".7" />
                  <circle cx="25" cy="45" r="24" stroke="currentColor" strokeWidth="1"
                    opacity=".3" />
                </svg>
              )}
              <span className={`font-playfair font-bold relative z-10 block text-center
                ${day.highlight
                  ? 'text-6xl text-sage-800'
                  : 'text-2xl text-choco-400'
                }`}>
                {day.date}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* "save our date!" script */}
      <p className="font-dancing text-choco-400 text-center text-3xl mt-4 mb-10">
        save our date!
      </p>

      {/* botanical divider */}
      <div className="flex justify-center mb-8">
        <SprigDivider className="w-44 h-8 text-sage-300 opacity-80" />
      </div>

      {/* wreath + event details */}
      <div className="relative max-w-xs mx-auto">
        <div className="flex justify-center items-start gap-0">
          <WreathHalf className="w-14 h-32 text-sage-400 opacity-70 flex-shrink-0" />

          <div className="text-center py-4 px-2">
            <p className="font-lora text-choco-300 text-xs tracking-widest2 uppercase mb-3">
              Ресторан «Нефтяник»
            </p>
            <p className="font-playfair text-choco-500 text-base leading-relaxed mb-2">
              Празднование торжества<br />
            </p>
            <p className="font-lora text-choco-400 text-sm mb-1">
              <span className="font-bold text-4xl">18:00</span>
            </p>

          </div>

          <WreathHalf flip className="w-14 h-32 text-sage-400 opacity-70 flex-shrink-0" />
        </div>
        
      </div>
    </section>
  )
}
