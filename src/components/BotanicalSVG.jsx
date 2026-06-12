/* Botanical SVG decorations — beige/sage/choco palette */

export const EucalyptusLeft = ({ className = 'w-20 h-44 text-sage-400' }) => (
  <svg viewBox="0 0 55 180" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* main stem */}
    <path
      d="M28 175 Q24 148 22 120 Q19 92 21 65 Q23 40 27 12"
      stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"
    />
    {/* leaf pairs – left side */}
    <ellipse cx="10" cy="155" rx="12" ry="6" fill="currentColor" opacity=".80"
      transform="rotate(30 10 155)" />
    <ellipse cx="9"  cy="128" rx="11" ry="5" fill="currentColor" opacity=".75"
      transform="rotate(28 9 128)" />
    <ellipse cx="10" cy="102" rx="11" ry="5" fill="currentColor" opacity=".80"
      transform="rotate(25 10 102)" />
    <ellipse cx="11" cy="76"  rx="10" ry="5" fill="currentColor" opacity=".75"
      transform="rotate(22 11 76)" />
    <ellipse cx="13" cy="52"  rx="9"  ry="4" fill="currentColor" opacity=".78"
      transform="rotate(18 13 52)" />
    <ellipse cx="16" cy="30"  rx="8"  ry="4" fill="currentColor" opacity=".72"
      transform="rotate(14 16 30)" />
    {/* leaf pairs – right side */}
    <ellipse cx="38" cy="150" rx="12" ry="6" fill="currentColor" opacity=".72"
      transform="rotate(-32 38 150)" />
    <ellipse cx="37" cy="123" rx="11" ry="5" fill="currentColor" opacity=".68"
      transform="rotate(-28 37 123)" />
    <ellipse cx="37" cy="97"  rx="11" ry="5" fill="currentColor" opacity=".73"
      transform="rotate(-25 37 97)" />
    <ellipse cx="37" cy="72"  rx="10" ry="5" fill="currentColor" opacity=".68"
      transform="rotate(-22 37 72)" />
    <ellipse cx="36" cy="48"  rx="9"  ry="4" fill="currentColor" opacity=".72"
      transform="rotate(-18 36 48)" />
    <ellipse cx="34" cy="27"  rx="8"  ry="4" fill="currentColor" opacity=".65"
      transform="rotate(-14 34 27)" />
  </svg>
)

export const EucalyptusRight = ({ className = 'w-20 h-44 text-sage-400' }) => (
  <svg viewBox="0 0 55 180" fill="none" xmlns="http://www.w3.org/2000/svg"
    className={className} style={{ transform: 'scaleX(-1)' }}>
    <path
      d="M28 175 Q24 148 22 120 Q19 92 21 65 Q23 40 27 12"
      stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"
    />
    <ellipse cx="10" cy="155" rx="12" ry="6" fill="currentColor" opacity=".80" transform="rotate(30 10 155)" />
    <ellipse cx="9"  cy="128" rx="11" ry="5" fill="currentColor" opacity=".75" transform="rotate(28 9 128)" />
    <ellipse cx="10" cy="102" rx="11" ry="5" fill="currentColor" opacity=".80" transform="rotate(25 10 102)" />
    <ellipse cx="11" cy="76"  rx="10" ry="5" fill="currentColor" opacity=".75" transform="rotate(22 11 76)" />
    <ellipse cx="13" cy="52"  rx="9"  ry="4" fill="currentColor" opacity=".78" transform="rotate(18 13 52)" />
    <ellipse cx="16" cy="30"  rx="8"  ry="4" fill="currentColor" opacity=".72" transform="rotate(14 16 30)" />
    <ellipse cx="38" cy="150" rx="12" ry="6" fill="currentColor" opacity=".72" transform="rotate(-32 38 150)" />
    <ellipse cx="37" cy="123" rx="11" ry="5" fill="currentColor" opacity=".68" transform="rotate(-28 37 123)" />
    <ellipse cx="37" cy="97"  rx="11" ry="5" fill="currentColor" opacity=".73" transform="rotate(-25 37 97)" />
    <ellipse cx="37" cy="72"  rx="10" ry="5" fill="currentColor" opacity=".68" transform="rotate(-22 37 72)" />
    <ellipse cx="36" cy="48"  rx="9"  ry="4" fill="currentColor" opacity=".72" transform="rotate(-18 36 48)" />
    <ellipse cx="34" cy="27"  rx="8"  ry="4" fill="currentColor" opacity=".65" transform="rotate(-14 34 27)" />
  </svg>
)

/* Horizontal eucalyptus sprig – for dividers */
export const SprigDivider = ({ className = 'w-48 h-10 text-sage-400' }) => (
  <svg viewBox="0 0 200 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M5 32 Q50 20 100 14 Q150 8 195 12"
      stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    {[
      { cx: 25,  cy: 28, rx: 10, ry: 5, r: -25 },
      { cx: 24,  cy: 34, rx: 8,  ry: 4, r:  12 },
      { cx: 50,  cy: 21, rx: 10, ry: 5, r: -35 },
      { cx: 50,  cy: 27, rx: 8,  ry: 4, r:   5 },
      { cx: 75,  cy: 16, rx: 9,  ry: 4, r: -42 },
      { cx: 75,  cy: 22, rx: 7,  ry: 4, r:   0 },
      { cx: 100, cy: 12, rx: 9,  ry: 4, r: -48 },
      { cx: 100, cy: 18, rx: 7,  ry: 4, r:  -5 },
      { cx: 125, cy: 11, rx: 8,  ry: 4, r: -50 },
      { cx: 150, cy: 10, rx: 8,  ry: 4, r: -55 },
      { cx: 173, cy: 11, rx: 7,  ry: 4, r: -52 },
    ].map((l, i) => (
      <ellipse key={i} cx={l.cx} cy={l.cy} rx={l.rx} ry={l.ry}
        fill="currentColor" opacity=".75"
        transform={`rotate(${l.r} ${l.cx} ${l.cy})`} />
    ))}
  </svg>
)

/* Small 3-leaf sprig for inline decoration */
export const LeafSprig = ({ className = 'w-8 h-10 text-sage-400' }) => (
  <svg viewBox="0 0 36 46" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M18 44 Q17 33 18 18" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    <ellipse cx="18" cy="10" rx="6"  ry="11" fill="currentColor" opacity=".85" />
    <ellipse cx="7"  cy="22" rx="5"  ry="9"  fill="currentColor" opacity=".75"
      transform="rotate(30 7 22)" />
    <ellipse cx="29" cy="22" rx="5"  ry="9"  fill="currentColor" opacity=".75"
      transform="rotate(-30 29 22)" />
  </svg>
)

/* Corner sprig – points toward upper-right, for hero corners */
export const CornerSprigLeft = ({ className = 'w-28 h-28 text-sage-400' }) => (
  <svg viewBox="0 0 110 110" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M5 105 Q20 75 40 55 Q60 35 95 15"
      stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    {[
      { cx: 15,  cy: 92, rx: 10, ry: 5, r: -50 },
      { cx: 26,  cy: 78, rx: 10, ry: 5, r: -55 },
      { cx: 40,  cy: 62, rx: 9,  ry: 5, r: -60 },
      { cx: 55,  cy: 48, rx: 9,  ry: 4, r: -62 },
      { cx: 68,  cy: 35, rx: 8,  ry: 4, r: -65 },
      { cx: 82,  cy: 24, rx: 8,  ry: 4, r: -68 },
    ].map((l, i) => (
      <ellipse key={i} cx={l.cx} cy={l.cy} rx={l.rx} ry={l.ry}
        fill="currentColor" opacity=".78"
        transform={`rotate(${l.r} ${l.cx} ${l.cy})`} />
    ))}
  </svg>
)

export const CornerSprigRight = ({ className = 'w-28 h-28 text-sage-400' }) => (
  <svg viewBox="0 0 110 110" fill="none" xmlns="http://www.w3.org/2000/svg"
    className={className} style={{ transform: 'scaleX(-1)' }}>
    <path d="M5 105 Q20 75 40 55 Q60 35 95 15"
      stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    {[
      { cx: 15,  cy: 92, rx: 10, ry: 5, r: -50 },
      { cx: 26,  cy: 78, rx: 10, ry: 5, r: -55 },
      { cx: 40,  cy: 62, rx: 9,  ry: 5, r: -60 },
      { cx: 55,  cy: 48, rx: 9,  ry: 4, r: -62 },
      { cx: 68,  cy: 35, rx: 8,  ry: 4, r: -65 },
      { cx: 82,  cy: 24, rx: 8,  ry: 4, r: -68 },
    ].map((l, i) => (
      <ellipse key={i} cx={l.cx} cy={l.cy} rx={l.rx} ry={l.ry}
        fill="currentColor" opacity=".78"
        transform={`rotate(${l.r} ${l.cx} ${l.cy})`} />
    ))}
  </svg>
)

/* Wreath arc – left half */
export const WreathHalf = ({ className = 'w-24 h-48 text-sage-400', flip = false }) => (
  <svg viewBox="0 0 60 180" fill="none" xmlns="http://www.w3.org/2000/svg"
    className={className} style={flip ? { transform: 'scaleX(-1)' } : {}}>
    <path d="M50 175 Q20 135 15 90 Q10 45 42 10"
      stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    {[
      { cx: 42, cy: 150, r: 60  },
      { cx: 30, cy: 125, r: 70  },
      { cx: 20, cy: 100, r: 80  },
      { cx: 16, cy: 75,  r: 85  },
      { cx: 20, cy: 50,  r: 75  },
      { cx: 30, cy: 28,  r: 65  },
    ].map((l, i) => (
      <ellipse key={i} cx={l.cx} cy={l.cy} rx="10" ry="5"
        fill="currentColor" opacity=".75"
        transform={`rotate(${l.r} ${l.cx} ${l.cy})`} />
    ))}
  </svg>
)

/* Single large decorative leaf */
export const BigLeaf = ({ className = 'w-16 h-20 text-sage-300' }) => (
  <svg viewBox="0 0 60 80" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path
      d="M30 75 C12 60 5 40 10 20 C15 5 25 0 30 2 C35 0 45 5 50 20 C55 40 48 60 30 75Z"
      fill="currentColor" opacity=".6"
    />
    <path d="M30 75 L30 2" stroke="currentColor" strokeWidth=".8" opacity=".4" />
    <path d="M30 55 Q15 50 12 38" stroke="currentColor" strokeWidth=".6" opacity=".3" fill="none" />
    <path d="M30 55 Q45 50 48 38" stroke="currentColor" strokeWidth=".6" opacity=".3" fill="none" />
    <path d="M30 38 Q16 33 15 22" stroke="currentColor" strokeWidth=".6" opacity=".3" fill="none" />
    <path d="M30 38 Q44 33 45 22" stroke="currentColor" strokeWidth=".6" opacity=".3" fill="none" />
  </svg>
)
