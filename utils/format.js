function capitalize(str) {
  str = replaceDashWithSpace(str).toLowerCase()
  const words = str.split(' ')

  // If only one word we don't want to loop,
  // just return the string formatted
  if (words.length < 2) return str.charAt(0).toUpperCase() + str.slice(1)

  // else, loop and uppercase them
  return words
    .map((word) => word.charAt(0).toUpperCase() + word.substring(1))
    .join(' ')
}

function replaceDashWithSpace(str) {
  return str.includes('-') ? str.replace('-', ' ') : str
}

export { capitalize }
