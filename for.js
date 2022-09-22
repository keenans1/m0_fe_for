// As you complete each challenge, RUN THE CODE to ensure it works. You can do this by
// running `node <filepath>`. If you are in this directory, you'd run `node for.js`.

// Challenge 1
// Use a for statement to log to the console all even numbers between 25 and 75.

for (var i = 25; i < 76; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// Challenge 2
// Use a for statement to log to the console a complete sentence stating the weather using the Array below:

var weather_options = ["sunny", "snowy", "freezing", "partly cloudy", "drizzly"];
var sentence = "";

for (var i = 0; i < weather_options.length; i++) {
  sentence = sentence + " " + weather_options[i] ;
}

console.log(sentence);

// Challenge 3
// Use a for statement to log to the console only the words that are exactly 3 characters in length

var words = ["car", "bike", "bus", "van", "scooter", "truck", "rv"];

for (var i = 0; i < words.length; i++) {
  if (words[i].length === 3) {
    console.log(words[i]);
  }
}
