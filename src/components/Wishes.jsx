import { SprigDivider, LeafSprig } from './BotanicalSVG'

const wishes = [
  {
    icon: '1.',
    text: 'Чтобы наши руки были свободны для объятий, будем рады лёгким подаркам в конвертах!',
  },
  {
    icon: '2.',
    text: 'Если вы хотите преподнести нам цветы, пусть это будет один самый красивый цветок — так у нас получится один роскошный букет!',
  },
  {
    icon: '3.',
    text: 'Мы не против детей, но рекомендуем отдаться полностью празднику :), отдохните от всех забот!',
  },
]

export default function Wishes() {
  return (
    <section className="bg-cream-50 paper-texture py-14 px-6">
      {/* heading */}
      <div className="text-center mb-8">
        <div className="flex items-center justify-center gap-3 mb-3">
          <LeafSprig className="w-5 h-7 text-sage-400" />
          <h2 className="font-playfair italic text-choco-600 text-2xl">Пожелания</h2>
          <LeafSprig className="w-5 h-7 text-sage-400" style={{ transform: 'scaleX(-1)' }} />
        </div>
        <SprigDivider className="w-36 h-7 text-sage-300 opacity-70 mx-auto" />
      </div>

      {/* wish cards */}
      <div className="max-w-sm mx-auto space-y-4">
        {wishes.map((wish, i) => (
          <div key={i}
            className="flex gap-4 items-start bg-cream-100 border border-cream-300 rounded-sm px-5 py-4 shadow-sm">
            {/* number badge */}
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-sage-600 flex items-center justify-center">
              <span className="font-playfair text-cream-50 text-sm font-bold">{wish.icon}</span>
            </div>
            {/* text */}
            <p className="font-lora text-choco-500 text-sm leading-relaxed pt-0.5">
              {wish.text}
            </p>
          </div>
        ))}
      </div>

      {/* bottom note */}
      <p className="font-playfair text-sage-500 text-center text-xl mt-8">
        Ваше присутствие — лучший подарок!
      </p>
    </section>
  )
}
