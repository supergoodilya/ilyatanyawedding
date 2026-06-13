import { useState } from 'react'
import { SprigDivider, LeafSprig } from './BotanicalSVG'

/*
 * ──────────────────────────────────────────────────────
 *  GOOGLE FORMS INTEGRATION
 *
 *  1. Создайте Google Form с вопросами:
 *     - Ваше имя (короткий ответ)
 *     - Вы придёте? (один из вариантов: Да / Нет)
 *     - Количество гостей (короткий ответ)
 *     - Пищевые ограничения / аллергии (короткий ответ)
 *     - Слова поздравления (абзац)
 *
 *  2. Скопируйте URL формы (вид: .../viewform)
 *     и замените /viewform на /formResponse — это formUrl.
 * https://docs.google.com/forms/d/e/1FAIpQLSfCxCI7T6JSyvmqAT9ruWoN8JAcW9hfNoHnsw4DWvL2Mwke9Q/formResponse?usp=publish-editor
 *
 *  3. Откройте форму → правая кнопка → «Просмотреть код страницы».
 *     Найдите поля <input name="entry.XXXXXXXXX"> — скопируйте entry IDs.
 *
 *  4. Вставьте значения в FORM_CONFIG ниже.
 * ──────────────────────────────────────────────────────
 */
const FORM_CONFIG = {
  formUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSfCxCI7T6JSyvmqAT9ruWoN8JAcW9hfNoHnsw4DWvL2Mwke9Q/formResponse',
  fields: {
    name:       'entry.1055030753',
    attendance: 'entry.1314789377',
    guests:     'entry.1973244034',
    dietary:    'entry.2075353681',
    alch:       'entry.975673530',
    message:    'entry.2111868903',
  },
}

const inputCls =
  'w-full bg-cream-50 border border-cream-300 rounded-sm px-4 py-2.5 font-lora text-sm text-choco-600 placeholder-choco-200 focus:outline-none focus:border-sage-400 transition-colors'

export default function RSVPForm() {
  const [form, setForm] = useState({
    name: '', attendance: 'yes', guests: '1', dietary: '', message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const set = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    const body = new FormData()
    body.append(FORM_CONFIG.fields.name,       form.name)
    body.append(FORM_CONFIG.fields.attendance, form.attendance === 'yes' ? 'Да' : 'Нет')
    body.append(FORM_CONFIG.fields.guests,     form.guests)
    body.append(FORM_CONFIG.fields.dietary,    form.dietary)
    body.append(FORM_CONFIG.fields.alch,       form.alch)
    body.append(FORM_CONFIG.fields.message,    form.message)

    try {
      await fetch(FORM_CONFIG.formUrl, { method: 'POST', mode: 'no-cors', body })
    } catch {
      // no-cors always raises a TypeError — data is still submitted
    }

    setLoading(false)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <section id="rsvp" className="bg-cream-100 paper-texture py-16 px-6 text-center">
        <div className="max-w-xs mx-auto">
          <LeafSprig className="w-8 h-10 text-sage-400 mx-auto mb-4" />
          <h2 className="font-playfair italic text-choco-600 text-2xl mb-3">
            Горько! 🥂
          </h2>
          <p className="font-lora text-choco-400 text-sm leading-relaxed mb-2">
            Спасибо, {form.name}! Мы получили ваш ответ.
          </p>

          {form.attendance === 'yes' ? (
            <>
              <p className="font-lora text-sage-500 text-base mt-4 mb-5">
                Ждём вас с нетерпением!
              </p>
              <p className="font-lora text-choco-300 text-xs leading-relaxed italic">
                Если обстоятельства изменятся и вы не сможете прийти — пожалуйста, сообщите об этом тому, кто отправлял вам приглашение. Нам важно знать заранее.
              </p>
            </>
          ) : (
            <p className="font-lora text-choco-300 text-sm leading-relaxed mt-4">
              Жаль, что вы не сможете быть с нами. Будем думать о вас в этот день!
            </p>
          )}
        </div>
      </section>
    )
  }

  return (
    <section id="rsvp" className="bg-cream-100 paper-texture py-14 px-6">
      {/* heading */}
      <div className="text-center mb-8">
        <div className="flex items-center justify-center gap-3 mb-2">
          <LeafSprig className="w-5 h-7 text-sage-400" />
          <h2 className="font-playfair italic text-choco-600 text-2xl">Подтверждение</h2>
          <LeafSprig className="w-5 h-7 text-sage-400" style={{ transform: 'scaleX(-1)' }} />
        </div>
        <SprigDivider className="w-36 h-7 text-sage-300 opacity-70 mx-auto mb-4" />
        <p className="font-lora text-choco-400 text-sm max-w-xs mx-auto leading-relaxed">
          Для потдверждения, пожалуйста заполните анкету или отправьте ответное сообщение тому кто отправил вам пригласительное :)
        </p>
      </div>

      <form onSubmit={handleSubmit} className="max-w-sm mx-auto space-y-5">
        {/* name */}
        <div>
          <label className="font-lora text-choco-400 text-xs uppercase tracking-widest2 block mb-1.5">
            Ваше имя/имена *
          </label>
          <input
            type="text" required
            placeholder="Иван и Мария Ивановы"
            value={form.name} onChange={set('name')}
            className={inputCls}
          />
        </div>

        {/* attendance */}
        <div>
          <label className="font-lora text-choco-400 text-xs uppercase tracking-widest2 block mb-2">
            Вы придёте? *
          </label>
          <div className="flex gap-3">
            {[
              { value: 'yes', label: 'Да, обязательно! 🎉' },
              { value: 'no',  label: 'К сожалению, нет' },
            ].map((opt) => (
              <label key={opt.value}
                className={`flex-1 flex items-center justify-center gap-2 border rounded-sm px-3 py-2.5 cursor-pointer text-sm font-lora transition-colors
                  ${form.attendance === opt.value
                    ? 'bg-sage-500 border-sage-500 text-cream-50'
                    : 'bg-cream-50 border-cream-300 text-choco-400 hover:border-sage-300'
                  }`}>
                <input
                  type="radio" name="attendance" value={opt.value}
                  checked={form.attendance === opt.value} onChange={set('attendance')}
                  className="sr-only"
                />
                {opt.label}
              </label>
            ))}
          </div>
        </div>

        {/* guests count */}
        {form.attendance === 'yes' && (
          <div>
            <label className="font-lora text-choco-400 text-xs uppercase tracking-widest2 block mb-1.5">
              Количество гостей (включая вас)
            </label>
            <input
              type="number" min="1" max="10"
              value={form.guests} onChange={set('guests')}
              className={inputCls}
            />
          </div>
        )}

        {/* dietary */}
        {form.attendance === 'yes' && (
        <div>
          <label className="font-lora text-choco-400 text-xs uppercase tracking-widest2 block mb-1.5">
            Аллергии / пищевые ограничения
          </label>
          <input
            type="text"
            placeholder="Нет / вегетарианское / без глютена..."
            value={form.dietary} onChange={set('dietary')}
            className={inputCls}
          />
        </div>)}

        {form.attendance === 'yes' && (
        <div>
          <label className="font-lora text-choco-400 text-xs uppercase tracking-widest2 block mb-1.5">
            Простые предпочтения по алкоголю
          </label>
          <input
            type="text"
            placeholder="Не пью / Шампанское / Крепкое 2 литра ..."
            value={form.alch} onChange={set('alch')}
            className={inputCls}
          />
        </div>)}


        {/* message */}
        <div>
          <label className="font-lora text-choco-400 text-xs uppercase tracking-widest2 block mb-1.5">
            Слова поздравления
          </label>
          <textarea
            rows={3}
            placeholder="Поздравляем вас с прекрасным событием..."
            value={form.message} onChange={set('message')}
            className={`${inputCls} resize-none`}
          />
        </div>

        {/* submit */}
        <button
          type="submit" disabled={loading}
          className="w-full bg-choco-500 hover:bg-choco-600 disabled:opacity-60 text-cream-50 font-lora font-bold text-sm tracking-widest2 uppercase py-3.5 rounded-sm transition-colors shadow-sm flex items-center justify-center gap-2">
          {loading ? (
            <>
              <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" strokeDasharray="40" strokeDashoffset="10" />
              </svg>
              Отправляем...
            </>
          ) : (
            'Горько! 💍'
          )}
        </button>
      </form>
    </section>
  )
}
