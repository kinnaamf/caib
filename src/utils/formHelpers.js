export function validateEmail(email) {
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return pattern.test(email.trim())
}

export function validateName(name) {
  const pattern = /^[a-zA-Zа-яА-ЯёЁ\s-]+$/
  const trimmed = name.trim()
  if (!pattern.test(trimmed)) return false
  const words = trimmed.split(/\s+/)
  return words.length === 2
}

export function validatePhone(phone) {
  const cleaned = phone.replace(/[^\d+]/g, '')
  const pattern = /^\+373[67]\d{7}$/
  return pattern.test(cleaned)
}


