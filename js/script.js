// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called

var randomNumber;
var quoteObject;
var printedText;
var quotes = [
    {
        quote: "Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away.",
        source: "Antoine de Saint-Exupéry",
        tag: "writer"
    },
    {
        quote: "I took a speed reading course and read ‘War and Peace’ in twenty minutes. It involves Russia.",
        source: "Woody Allen",
        tag: "director"
    },
    {
        quote: "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
        source: "Marilyn Monroe",
        tag: "actress"
    },
    {
        quote: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
        source: "Albert Einstein",
        tag: "sciencist"
    },
    {
        quote: "I like lassagne!",
        source: "Garfield",
        tag: "cat"
    }
];

function getRandomQuote() {
    randomNumber = Math.floor(Math.random() * quotes.length); //selects a random quote object from the quotes array
    return quotes[randomNumber];//returns the randomly selected quote object
}
;
function changeBackgroundColor() {
    var red = Math.floor(Math.random() * 255);
    var green = Math.floor(Math.random() * 255);
    var blue = Math.floor(Math.random() * 255);
    var i = document.getElementsByTagName("body")[0];
    i.style.backgroundColor  = 'rgb(' + red + ',' + green + ',' + blue + ')';
    console.log("Colors of Background: " + red + ", " + green + ", " + blue);
}
;

function printQuote() {
    quoteObject = getRandomQuote(); //calls the getRandomQuote function and stores the returned quote object in a variable
    printedText = "<p class=\"quote\">" + quoteObject.quote + "</p><p class=\"source\"> " + quoteObject.source + "-" + quoteObject.tag + "</p>"; //html text
    document.getElementById('quote-box').innerHTML = printedText; //print onto page
    changeBackgroundColor();
}
;
document.getElementById('loadQuote').addEventListener("click", printQuote, false);