
const sentence = "hello there from lighthouse labs";
let delay = 100;
for (const char of sentence) {
  setTimeout(() => {
     // print the char here
     process.stdout.write("\n" + char);
  }, delay) // <= 1s delay to make it noticeable. Can dial it down later.
  delay += 100;
}