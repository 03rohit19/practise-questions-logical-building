const boxes = document.querySelectorAll(".box");

// Function to change color of all boxes to green
function changeColor() {
  boxes.forEach((box) => (box.style.backgroundColor = "green"));
}

// Adding click event listeners to each box and changing their color to yellow on click
function addClickListeners() {
  boxes.forEach((box) => {
    box.addEventListener("click", function () {
      console.log("box clicked: " + box.id);
      box.style.backgroundColor = "yellow";
    });
  });
}

// Attach the changeColor function to the document click event
document.addEventListener("click", changeColor);

// Add event listeners to the boxes
addClickListeners();
// document.addEventListener("click", function () {
//   const boxes = document.querySelectorAll(".box");
//   boxes.forEach(function (box) {
//     box.addEventListener("click", function () {
//       console.log("box clicked: " + box.id);
//       box.style.backgroundColor = "yellow";
//     });
//   });
// });
function stringToObject(keys, value) {
  const keysArray = keys.split(",");
  let obj = {};
  let currentObj = obj;

  for (let i = 0; i < keysArray.length; i++) {
    const key = keysArray[i].trim();
    currentObj[key] = i === keysArray.length - 1 ? value : {};
    currentObj = currentObj[key];
  }

  return obj;
}

// Example usage
const result = stringToObject("a, b, c", "hello");
console.log(result);

///
const explorer = {
  id: 1,
  name: "root",
  isFolder: true,
  items: [
    {
      id: 2,
      name: "public",
      isFolder: true,
      items: [
        {
          id: 3,
          name: "public-nested-1",
          isFolder: true,
          items: [
            {
              id: 4,
              name: "index.html",
              isFolder: false,
              items: [],
            },
            {
              id: 5,
              name: "hello.html",
              isFolder: false,
              items: [],
            },
          ],
        },
      ],
    },
    {
      id: 6,
      name: "public-nested-file",
      isFolder: false,
      items: [],
    },
    {
      id: 7,
      name: "src",
      isFolder: true,
      items: [
        {
          id: 8,
          name: "app.js",
          isFolder: false,
          items: [],
        },
        {
          id: 9,
          name: "index.js",
          isFolder: false,
          items: [],
        },
        {
          id: 10,
          name: "style.css",
          isFolder: false,
          items: [],
        },
      ],
    },
    {
      id: 11,
      name: "package.json",
      isFolder: false,
      items: [],
    },
  ],
};

export default explorer;
