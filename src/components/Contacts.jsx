import { SprigDivider, LeafSprig } from './BotanicalSVG'

const TelegramIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L7.19 13.664l-2.963-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.961.895z" />
  </svg>
)

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
)

export default function Contacts() {
  return (
    <section className="bg-sage-600 paper-texture py-14 px-6">
      {/* heading */}
      <div className="text-center mb-8">
        <div className="flex items-center justify-center gap-3 mb-3">
          <LeafSprig className="w-5 h-7 text-sage-200 opacity-70" />
          <h2 className="font-playfair italic text-cream-50 text-2xl">Контакты</h2>
          <LeafSprig className="w-5 h-7 text-sage-200 opacity-70" style={{ transform: 'scaleX(-1)' }} />
        </div>
        <SprigDivider className="w-36 h-7 text-sage-300 opacity-50 mx-auto" />
      </div>

      {/* coordinator card */}
      <div className="max-w-xs mx-auto bg-sage-700/40 border border-sage-500 rounded-sm px-6 py-7 text-center">
        <p className="font-lora text-cream-200 text-sm leading-relaxed mb-5">
          По всем вопросам вы можете обращаться к нашему свадебному организатору:
        </p>

        <div className="w-16 h-16 rounded-full bg-sage-500 border-2 border-sage-300 mx-auto mb-3 flex items-center justify-center overflow-hidden">
          {/* coordinator photo placeholder */}
          <svg viewBox="0 0 40 48" className="w-10 h-10 text-sage-300" fill="none">
            <circle cx="20" cy="14" r="8" stroke="currentColor" strokeWidth="1.4" />
            <path d="M4 44 C4 31 36 31 36 44" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
          </svg>
        </div>

        <p className="font-playfair text-cream-100 text-xl mb-4">Юлия</p>

        <div className="flex justify-center gap-4">
          <a href="https://t.me/your_organizer" target="_blank" rel="noopener noreferrer"
            className="text-cream-200 hover:text-cream-50 transition-colors">
            <TelegramIcon />
          </a>
          <a href="https://wa.me/79991234567" target="_blank" rel="noopener noreferrer"
            className="text-cream-200 hover:text-cream-50 transition-colors">
            <WhatsAppIcon />
          </a>
        </div>

        <p className="font-lora text-sage-200 text-xs mt-4 opacity-70">
          Замените ссылки на реальные контакты
        </p>
      </div>
    </section>
  )
}
