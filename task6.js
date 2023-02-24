function greet (phrase) {
    let morsePhrase = ""
    phrase = phrase.toLowerCase()
    const morse = {'a': '.—', 'b': '—...', 'c': '—.—.', 
                'd': '—..', 'e': '.', 'f': '..—.',
                'g': '——.', 'h': '....', 'i': '..',
                'j': '.———', 'k': '—.—', 'l': '.—..',
                'm': '——', 'n': '—.', 'o': '———', 'p': '.——.',
                'q': '——.—', 'r': '.—.', 's': '...', 't': '—',
                'u': '..—', 'v': '...—', 'w': '.——', 'x': '—..—',
                'y': '—.——', 'z': '——..', ' ': '  ', '.': '.', ',': ',','!': '!', "?":'?'}
    for(let i = 0; i < phrase.length; i++){
        if (phrase[i] in morse) {
            morsePhrase += morse[phrase[i]]
        }
  }
  return morsePhrase
}
let text = prompt('Напишите фразу', "Hello world");

alert(greet(text)); // Тебе 100 лет!