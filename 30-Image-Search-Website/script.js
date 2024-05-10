const searchForm = document.getElementById("search-form");
const searchBox = document.getElementById("search-box");
const searchResults = document.getElementById("search-results");
const showMoreBtn = document.getElementById("show-more-btn");

const accessKey = "YOUR_API_KEY_HERE";

let keyword = "";
let page = 1;

const searchImages = async () => {
  keyword = searchBox.value;
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;

  const response = await fetch(url);
  const data = await response.json();
  //   console.log(data)

  if(page === 1){
    searchResults.innerHTML = ''
  }

  const results = data.results;
  results.map((results) => {
    const image = document.createElement("img");
    image.src = results.urls.small;
    const imageLink = document.createElement("a");
    imageLink.href = results.links.html;
    imageLink.target = "_blank";

    imageLink.appendChild(image);
    searchResults.appendChild(imageLink);
  });
  
//   showMoreBtn.style.display = "block";
};

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  page = 1;
  searchImages();
});

// showMoreBtn.addEventListener("click", () => {
//   page++;
//   searchImages()
// });
