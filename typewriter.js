const sentence = "hello there from lighthouse labs\n";

let time = 50;
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, time) // <= 1s delay to make it noticeable. Can dial it down later.
  time += 50;
}
