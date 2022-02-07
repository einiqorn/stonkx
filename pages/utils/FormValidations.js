export const minNameLength = 2
export const maxNameLength = 50
export const minMessageLength = 50
export const maxMessageLength = 10000
const maxEmailLength = 600

export function messageLengthOkay(message) {
  try {
    return (
      minMessageLength <= message.length && maxMessageLength >= message.length
    )
  } catch {
    return false
  }
}

export function nameLengthOkay(name) {
  try {
    return minNameLength <= name.length && maxNameLength >= name.length
  } catch {
    return false
  }
}

export function validateEmail(email) {
  try {
    if (maxEmailLength < email.length) {
      return false
    }
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      )
  } catch {
    return false
  }
}
