import { SprigDivider, LeafSprig } from './BotanicalSVG'

export default function InvitationLetter() {
  return (
    <section className="bg-cream-100 paper-texture py-12 px-6">
      <div className="flex justify-center mb-8">
        <SprigDivider className="w-48 h-8 text-sage-400 opacity-70" />
      </div>

      <div className="max-w-sm mx-auto relative">
        {/* ── Letter card (sits above the envelope) ── */}
        <div className="relative z-10 mx-4 bg-cream-50 rounded-sm shadow-md px-7 pt-7 pb-10
                        border border-cream-300">
          {/* decorative top line */}
          <div className="flex items-center gap-2 mb-5">
            <div className="h-px flex-1 bg-cream-300" />
            <LeafSprig className="w-4 h-5 text-sage-300" />
            <div className="h-px flex-1 bg-cream-300" />
          </div>

          <p className="font-playfair italic text-choco-400 text-center text-lg leading-relaxed mb-4">
            Случилось невероятное!
          </p>
          <p className="font-lora text-choco-500 text-sm leading-relaxed text-center mb-4">
            Наша безграничная любовь нашла дорогу к сердцам всех
            близких и дорогих нам людей.
          </p>
          <p className="font-lora text-choco-500 text-sm leading-relaxed text-center mb-6">
            Приглашаем вас отметить этот особенный день —&nbsp;
            <span className="font-playfair italic text-choco-600">
              день нашей свадьбы!
            </span>
          </p>

          <div className="flex items-center gap-2 mb-5">
            <div className="h-px flex-1 bg-cream-300" />
            <LeafSprig className="w-4 h-5 text-sage-300" />
            <div className="h-px flex-1 bg-cream-300" />
          </div>

          <p className="font-playfair text-choco-400 text-center text-xl">
            Илья & Таня
          </p>
        </div>

        {/* ── Envelope body (sits behind and below the letter) ── */}
        <div className="relative -mt-12 z-0">
          <svg viewBox="0 0 280 130" fill="none" xmlns="http://www.w3.org/2000/svg"
            className="w-full drop-shadow-lg">
            {/* body */}
            <rect x="0" y="0" width="280" height="130" rx="4" fill="#7A5230" />
            {/* left fold */}
            <path d="M0 0 L0 130 L140 75Z" fill="#6B4423" opacity=".5" />
            {/* right fold */}
            <path d="M280 0 L280 130 L140 75Z" fill="#6B4423" opacity=".35" />
            {/* bottom flap V */}
            <path d="M0 130 L140 75 L280 130Z" fill="#5C3D1E" />
            {/* top flap (open, pointing down into envelope) */}
            <path d="M0 0 L140 52 L280 0Z" fill="#5C3D1E" />
            <path d="M0 0 L140 52 L280 0" stroke="#4A3018" strokeWidth=".8" fill="none" />
            {/* names on flap */}
            <text x="140" y="118" textAnchor="middle"
              fontFamily="Dancing Script, cursive" fontSize="13" fill="#E8D5BE" opacity=".85">
            </text>
          </svg>
        </div>
      </div>
    </section>
  )
}
