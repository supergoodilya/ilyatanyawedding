import { SprigDivider, LeafSprig } from './BotanicalSVG'

const wishes = [
  {
    title: 'Подарки',
    text: 'Чтобы наши руки были свободны для объятий, будем рады лёгким подаркам в конвертах!',
  },
  {
    title: 'Цветы',
    text: 'Если хотите преподнести цветы — пусть это будет один самый красивый цветок. Так у нас получится один роскошный букет!',
  },
  {
    title: 'Дети',
    text: 'Мы не против детей, но рекомендуем отдаться полностью празднику — отдохните от всех забот!',
  },
]

export default function Wishes() {
  return (
    <section className="bg-cream-50 paper-texture py-14 px-8">

      {/* heading */}
      <div className="text-center mb-10">
        <div className="flex items-center justify-center gap-3 mb-3">
          <LeafSprig className="w-5 h-7 text-sage-400" />
          <h2 className="font-playfair italic text-choco-600 text-2xl">Пожелания</h2>
          <LeafSprig className="w-5 h-7 text-sage-400" style={{ transform: 'scaleX(-1)' }} />
        </div>
        <SprigDivider className="w-36 h-7 text-sage-300 opacity-70 mx-auto" />
      </div>

      {/* wishes */}
      <div className="max-w-xs mx-auto">
        {wishes.map((wish, i) => (
          <div key={i}>
            <div className="text-center">
              {/* botanical icon */}
              <div className="flex justify-center mb-3">
                <LeafSprig className="w-6 h-8 text-sage-400 opacity-80" />
              </div>

              {/* title */}
              <p className="font-playfair italic text-choco-400 text-xs tracking-widest uppercase mb-2">
                {wish.title}
              </p>

              {/* text */}
              <p className="font-lora text-choco-500 text-sm leading-relaxed">
                {wish.text}
              </p>
            </div>

            {/* divider between items */}
            {i < wishes.length - 1 && (
              <div className="flex items-center justify-center gap-3 my-7">
                <div className="h-px bg-sage-200 flex-1" />
                <LeafSprig className="w-4 h-5 text-sage-300" />
                <div className="h-px bg-sage-200 flex-1" />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* bottom note */}
      <p className="font-playfair italic text-sage-500 text-center text-lg mt-10">
        Ваше присутствие — лучший подарок!
      </p>

    </section>
  )
}
