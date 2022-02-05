function FrenchFlag() {
  return (
    <li>
      <svg xmlns="http://www.w3.org/2000/svg" width="27" height="18">
        <rect width="27" height="18" fill="#ED2939" />
        <rect width="18" height="18" fill="#fff" />
        <rect width="9" height="18" fill="#002395" />
      </svg>
    </li>
  )
}

function EnglishFlag() {
  return (
    <li>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 60 30"
        width="36"
        height="18"
      >
        <clipPath id="s">
          <path d="M0,0 v30 h60 v-30 z" />
        </clipPath>
        <clipPath id="t">
          <path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z" />
        </clipPath>
        <g clipPath="url(#s)">
          <path d="M0,0 v30 h60 v-30 z" fill="#012169" />
          <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6" />
          <path
            d="M0,0 L60,30 M60,0 L0,30"
            clipPath="url(#t)"
            stroke="#C8102E"
            strokeWidth="4"
          />
          <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10" />
          <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6" />
        </g>
      </svg>
    </li>
  )
}

export default function LangSelection({ lang, setLang }) {
  const changeLanguage = () => {
    setLang(lang === 'fr' ? 'en' : 'fr')
  }
  return (
    <ul className="flex flex-wrap items-center justify-end grow hover:cursor-pointer">
      <button type="button" onClick={changeLanguage} aria-label="Lang">
        {lang === 'fr' ? <EnglishFlag /> : <FrenchFlag />}
      </button>
    </ul>
  )
}
