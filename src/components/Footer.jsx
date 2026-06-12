import { EucalyptusLeft, EucalyptusRight, LeafSprig } from './BotanicalSVG'

export default function Footer() {
  return (
    <footer className="bg-cream-50 paper-texture py-14 px-6 text-center relative overflow-hidden">
      {/* botanical frame */}
      <div className="flex justify-between items-end mb-6 pointer-events-none">
        <EucalyptusLeft className="w-16 h-36 text-sage-400 opacity-70" />
        <EucalyptusRight className="w-16 h-36 text-sage-400 opacity-70" />
      </div>

      {/* with love */}
      <div className="-mt-8">
        <p className="font-playfair text-choco-300 text-sm tracking-widest2 uppercase mb-1">
          with
        </p>
        <p className="font-dancing text-choco-500 text-5xl leading-none mb-2">
          Love
        </p>
        <div className="flex items-center justify-center gap-2 mb-2">
          <div className="h-px w-10 bg-cream-300" />
          <LeafSprig className="w-5 h-6 text-sage-400" />
          <div className="h-px w-10 bg-cream-300" />
        </div>
        <h3 className="font-playfair text-choco-600 text-3xl mb-6">
          Илья & Таня
        </h3>
        <p className="font-lora text-choco-300 text-xs tracking-widest2 uppercase">
          7 августа · ресторан «Нефтяник» · Челюскинцев, 12
        </p>
      </div>

      {/* bottom botanical */}
      <div className="flex justify-center mt-8 gap-3 opacity-50">
        {Array(5).fill(null).map((_, i) => (
          <LeafSprig key={i} className="w-4 h-5 text-sage-500" />
        ))}
      </div>

      <p className="font-lora text-choco-200 text-[10px] tracking-widest2 uppercase mt-6">
        Мы вас ждём ✦
      </p>
    </footer>
  )
}
