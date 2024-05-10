//defineing the api url
const apiUrl = "https://api.quotable.io/random";

//defing the constants from main html body
const quote = document.getElementById("quote");
const author = document.getElementById("author");

// main function to call the api using async and await and fetch api
async function getQuote(url) {
  //awai ing the api url
  const response = await fetch(url);
  //converting the data to json
  var data = await response.json();
  // console.log(data);

  //inserting the quote and author name in the html body
  quote.innerHTML = data.content;
  author.innerHTML = data.author;
}

//calling the function
getQuote(apiUrl);

//activating the tweet button
const tweet = () => {
  //+ ---> used to concat the things
  //, ---> used to seperate but used in the same as in the below case you can see the exact diff between them
  window.open(
    "https://twitter.com/intent/tweet?text=" +
      quote.innerHTML +
      "---by " +
      author.innerHTML,
    "Tweet Window",
    "width=600 , height=300"
  );
};
