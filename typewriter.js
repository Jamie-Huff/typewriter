const sentence = "hello there from lighthouse labs.";
let time = 50 
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char)
  }, time)
  time += 50
  if (char === sentence[sentence.length - 1]) {
    setTimeout(() => {
      process.stdout.write("\n")
    }, 50 * sentence.length)
  }
}
