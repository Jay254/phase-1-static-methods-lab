class Formatter {
  //add static methods here
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-' ]+/g, '')
  }

  static titleize(string) {
    const lowercaseWords = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
  const words = string.split(' ');

  const capitalizedWords = [words[0].charAt(0).toUpperCase() + words[0].slice(1)];

  for (let i = 1; i < words.length; i++) {
    const currentWord = words[i].toLowerCase();
    if (lowercaseWords.includes(currentWord)) {
      capitalizedWords.push(currentWord);
    } else {
      capitalizedWords.push(words[i].charAt(0).toUpperCase() + words[i].slice(1));
    }
  }

  return capitalizedWords.join(' ');
  }

}