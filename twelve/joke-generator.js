// Define the list of jokes to choose from.
var jokes = [
    "A computer is only as stupid as the programmer.",
    "There are <code>10</code> kinds of people in the world: Those who understand binary and those who don't.",
    "BREAKING NEWS: Developer goes broke after using up his cache",
    "An SQL query walks into a bar... He walks over to two tables and says,\"Can I join you?\"",
    "BREAKING NEWS from SILICON VALLEY: Functional programmer drops out; refuses to take classes",
    "Java developers wear glasses because they don't C#",
    "Developer asks compiler out: recives syntax error but is hoping for a runtime exception",
    "<code>sudo make me a sandwich</code>",
    "<samp>Name Error: marquee.just write up a joke() does not exist.</samp>"
];

// Get a random item from the list, using Math.floor to make sure we get an integer.
var randomIndex = Math.floor(Math.random() * jokes.length);

// Spit the joke out into the location of the script tag.
document.open();
document.write(jokes[randomIndex]);
