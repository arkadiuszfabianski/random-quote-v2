// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

var quotes = [
    {quote: "The coldest  winter I ever spent was a summer in San Fransisco.", source: "Mark Twain"},
    {quote: "You can do anyting, but not everything.", source: "Woody Allen"},
    {quote: "Those who dare to fail miserably can achive greatly.", source: "John F. Kennedy"},
    {quote: "The true sign of intelligence is not knowledge but imagination.", source: "Albert Einstein"}
];

function getRandomQuote(){
    var randomNumber = Math.floor(Math.random()*4); //selects a random quote object from the quotes array
    console.log("Random Number is:" + randomNumber);
    return quotes[randomNumber];//returns the randomly selected quote object
};

function printQuote(){
    var quoteObject = getRandomQuote(); //calls the getRandomQuote function and stores the returned quote object in a variable
    console.log("Quote: " +quoteObject.quote + ", Author: " + quoteObject.source);
    var printedText = "<p class=\"quote\">" + quoteObject.quote + "</p><p class=\"source\"> " + quoteObject.source + "</p>"; //html text
    console.log(printedText);
    document.getElementById('quote-box').innerHTML = printedText; //print onto page
};