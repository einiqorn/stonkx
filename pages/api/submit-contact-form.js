import {
  messageLengthOkay,
  nameLengthOkay,
  validateEmail,
} from '../../utils/FormValidations'

const { verify } = require('hcaptcha')
const nodemailer = require('nodemailer')

async function sendEmail(data) {
  const date = new Date()
  const message = `From: ${data.name} <${data.email}>\nSent: ${date}\n\nMessage:\n${data.message}`
  const transporter = await nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: +process.env.EMAIL_PORT,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  })
  await transporter.sendMail({
    from: process.env.EMAIL_FROM,
    to: process.env.EMAIL_TO,
    subject: `TopStonk message from ${data.name}`,
    text: message,
  })
}

function validateData(data) {
  return (
    nameLengthOkay(data.name) &&
    messageLengthOkay(data.message) &&
    validateEmail(data.email)
  )
}

async function hcaptchaValid(data) {
  const hcaptchaVerification = await verify(
    process.env.HCAPTCHA_SECRET,
    data.token,
  )
  return hcaptchaVerification.success
}

async function handlePostRequest(req, res) {
  const data = req.body
  if (validateData(data)) {
    if (await hcaptchaValid(data)) {
      sendEmail(data)
      res.status(200).send({ success: true, message: 'Message sent.' })
    } else {
      res.status(400).send({
        success: false,
        error: 'hCaptcha',
        message: 'Failed hCaptcha validation.',
      })
    }
  } else {
    res.status(400).send({
      success: false,
      error: 'fieldError',
      message: 'One or more fields contained invalid data.',
    })
  }
}

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      await handlePostRequest(req, res)
    } catch {
      res.status(500).send({
        success: false,
        error: 'serverError',
        message: 'Something fucked up.',
      })
    }
  } else {
    res.status(400).send({
      success: false,
      error: 'httpMethodError',
      message: 'Endoint processes POST requests only.',
    })
  }
}
