let searchableArray = [
  "Alabama",
  "Alaska",
  "Arizona",
  "Arkansas",
  "California",
  "Colorado",
  "Connecticut",
  "Delaware",
  "Florida",
  "Georgia",
  "Hawaii",
  "Idaho",
  "Illinois",
  "Indiana",
  "Iowa",
  "Kansas",
  "Kentucky",
  "Louisiana",
  "Maine",
  "Maryland",
  "Massachusetts",
  "Michigan",
  "Minnesota",
  "Mississippi",
  "Missouri",
  "Montana",
  "Nebraska",
  "Nevada",
  "New Hampshire",
  "New Jersey",
  "New Mexico",
  "New York",
  "North Carolina",
  "North Dakota",
  "Ohio",
  "Oklahoma",
  "Oregon",
  "Pennsylvania",
  "Rhode Island",
  "South Carolina",
  "South Dakota",
  "Tennessee",
  "Texas",
  "Utah",
  "Vermont",
  "Virginia",
  "Washington",
  "West Virginia",
  "Wisconsin",
  "Wyoming",
];

const inputBox = document.getElementById("input-box");

const resultsWrapper = document.querySelector(".results");

inputBox.addEventListener("keyup", () => {
  let results = [];
  let input = inputBox.value;

  if (input.length) {
    results = searchableArray.filter((keyword) => {
      return keyword.toLowerCase().includes(input.toLowerCase());
    });
    console.log(results);
  }
  displayResults(results);
  if (!results.length) {
    resultsWrapper.innerHTML = "";
  }
});

function displayResults(results) {
  const content = results.map((list) => {
    return `<li onclick=selectInput(this)>${list}</li>`;
  });

  resultsWrapper.innerHTML = `<ul>${content.join("")}</ul>`;
}

function selectInput(list) {
  inputBox.value = list.innerHTML;
  resultsWrapper.innerHTML = "";
}
