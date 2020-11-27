/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants (s) {
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  let consonants = '';

  for (var i = 0; i < s.length; i++) {
    if (vowels.includes(s[i])) {
      console.log(s[i]);
    } else {
      consonants += s[i] + '\n';
    }
  }
  console.log(consonants.trim());
}
