const arrayOfQuotes = [
    { quote: "The best way to predict the future is to invent it.",
      author: "Alan Kay" },
    { quote: "Life is 10% what happens to us and 90% how we react to it.",
      author: "Charles R. Swindoll" },
    { quote: "Your time is limited, so don’t waste it living someone else’s life.", 
      author: "Steve Jobs" },
    { quote: "Be yourself; everyone else is already taken.",
      author: "Oscar Wilde" },
    { quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
      author: "Winston Churchill" }
  ];

function generateQuote(){
    const random = Number.parseInt(Math.random()*arrayOfQuotes.length + 1);
    document.querySelector('#quoteOutput').textContent = `\"${arrayOfQuotes[random].quote}\"`;
    document.querySelector('#authorOutput').textContent = `--${arrayOfQuotes[random].author}`;
    
}   