import { useEffect, useRef, useState } from 'react'

import Router, { useRouter } from 'next/router'

import HCaptcha from '@hcaptcha/react-hcaptcha'

import {
  nameLengthOkay,
  minNameLength,
  maxNameLength,
  minMessageLength,
  maxMessageLength,
  validateEmail,
  messageLengthOkay,
} from '../utils/FormValidations'

function Spinner({ message }) {
  return (
    <>
      <svg
        className="w-5 h-5 mr-3 -ml-1 text-white animate-spin"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        />
      </svg>
      {message}
    </>
  )
}

export default function ContactForm() {
  const router = useRouter()
  const onSendRedirectTo = '/'
  const { locale } = router
  const [canSubmit, setCanSubmit] = useState(false)
  const [validCaptcha, setValidCaptcha] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [messageLength, setMessageLength] = useState(0)
  const [data, setData] = useState({
    name: null,
    email: null,
    message: null,
    token: null,
    ekey: null,
  })
  const captchaRef = useRef(null)
  const texts = {
    validationMessages: {
      valid: {
        en: 'Good to go!',
        fr: "C'est parti !",
      },
      error: {
        message: {
          en: `Please enter between ${minMessageLength} and ${maxMessageLength} characters`,
          fr: `Veuillez entrer entre ${minMessageLength} et ${maxMessageLength} caractères`,
        },
        email: {
          en: 'Please enter a valid email address.',
          fr: "Désolé, le format de l'e-mail semble incorrect.",
        },
        name: {
          en: `Please enter between ${minNameLength} and ${maxNameLength} characters`,
          fr: `Veuillez entrer entre ${minNameLength} et ${maxNameLength} caractères`,
        },
      },
    },
    labels: {
      message: {
        en: 'Message',
        fr: 'Message',
      },
      email: {
        en: 'Email',
        fr: 'E-mail',
      },
      name: {
        en: 'Name',
        fr: 'Prénom',
      },
    },
    button: {
      submit: {
        noCaptcha: {
          en: 'Please complete captcha',
          fr: 'Veuillez compléter le hCaptcha',
        },
        invalid: {
          en: 'Please check validation messages',
          fr: 'Vérifiez les messages de validation',
        },
        formValid: {
          en: 'Fire away!',
          fr: 'Envoyer mon message !',
        },
        sending: {
          en: 'Processing...',
          fr: 'Traitement en cours...',
        },
      },
    },
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitting(true)
    if (canSubmit) {
      fetch('/api/submit-contact-form', {
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
      })
        .then((res) => {
          res.json().then((r) => {
            captchaRef.current.resetCaptcha()
            setValidCaptcha(false)
            setSubmitting(false)
            if (r.success) {
              Router.push(onSendRedirectTo)
            }
          })
        })
        .catch(() => {
          captchaRef.current.resetCaptcha()
          setValidCaptcha(false)
          setSubmitting(false)
        })
    }
  }

  const validationMessage = (field, message) => {
    return (
      <p className={`text-xs ${field ? 'text-green-600' : 'text-red-600'}`}>
        {field
          ? `✅ ${texts.validationMessages.valid[locale]}`
          : `❌ ${message}`}
      </p>
    )
  }

  const updateData = (e) => {
    const { id } = e.target
    let value = e.target.value.trim()
    if (id === 'email') {
      const validated = validateEmail(value)
      if (!validated) {
        value = null
      }
    } else if (id === 'name') {
      if (!nameLengthOkay(value)) {
        value = null
      }
    } else if (id === 'message') {
      setMessageLength(value.length)
      if (!messageLengthOkay(value)) {
        value = null
      }
    }
    setData({
      ...data,
      [id]: value,
    })
  }

  const handleVerificationSuccess = (token, ekey) => {
    setData({
      ...data,
      token,
      ekey,
    })
    setValidCaptcha(true)
  }

  useEffect(() => {
    setCanSubmit(validCaptcha && data.email && data.name && data.message)
  }, [validCaptcha, data.email, data.name, data.message])

  return (
    <section className="w-full p-6">
      <form
        className="flex flex-col items-center justify-between w-full max-w-3xl mx-auto"
        onSubmit={handleSubmit}
      >
        {/* Name */}
        <label htmlFor="name" className="w-full form-label">
          <p>{texts.labels.name[locale]}:</p>
          {validCaptcha
            ? validationMessage(
                data.name,
                texts.validationMessages.error.name[locale],
              )
            : ''}

          {/* Field */}
          <input
            type="text"
            id="name"
            onChange={(e) => {
              updateData(e)
            }}
            className={`${
              validCaptcha ? `${data.name ? '' : 'focus:border-red-600'}` : ''
            } w-full form-input`}
          />
        </label>

        {/* Email */}
        <label htmlFor="email" className="w-full form-label">
          <p>{texts.labels.email[locale]}:</p>
          {validCaptcha
            ? validationMessage(
                data.email,
                texts.validationMessages.error.email[locale],
              )
            : ''}

          {/* Field */}
          <input
            type="email"
            id="email"
            onChange={(e) => {
              updateData(e)
            }}
            className={`${
              validCaptcha ? `${data.email ? '' : 'focus:border-red-600'}` : ''
            } w-full form-input`}
          />
        </label>

        {/* Message */}
        <label htmlFor="message" className="w-full form-label">
          <p>{texts.labels.message[locale]}:</p>
          {validCaptcha
            ? validationMessage(
                data.message,
                texts.validationMessages.error.message[locale],
              )
            : ''}
          {/* Field */}
          <textarea
            id="message"
            onChange={(e) => {
              updateData(e)
            }}
            className={`${
              validCaptcha
                ? `${data.message ? '' : 'focus:border-red-600'}`
                : ''
            } w-full form-input h-60 overflow-hidden disable-resize disable-resize`}
          />
          <p className="w-full text-xs text-right">chars: {messageLength}</p>
        </label>

        {/* HCaptcha */}
        <div className="mb-6">
          <HCaptcha
            sitekey="7445956e-e262-4cca-b4cb-90c4cdffe368"
            onVerify={(token, ekey) => handleVerificationSuccess(token, ekey)}
            languageOverride={locale}
            ref={captchaRef}
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={!canSubmit || submitting}
          className={`btn w-full text-white group ${
            validCaptcha && !submitting
              ? `${
                  canSubmit
                    ? 'bg-blue-600 hover:bg-blue-700'
                    : 'bg-red-900 hover:cursor-not-allowed'
                }`
              : 'bg-slate-400 hover:cursor-not-allowed'
          }`}
        >
          {submitting ? (
            <Spinner message={texts.button.submit.sending[locale]} />
          ) : (
            `${
              validCaptcha
                ? `${
                    canSubmit
                      ? texts.button.submit.formValid[locale]
                      : texts.button.submit.invalid[locale]
                  }`
                : texts.button.submit.noCaptcha[locale]
            }`
          )}
        </button>
      </form>
    </section>
  )
}
