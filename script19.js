<<<<<<< HEAD
const input = document.querySelector("#inputText");
const upperCaseOutput = document.querySelector("#uppercase span");
const lowerCaseOutput = document.querySelector("#lowercase span");
const camelCaseOutput = document.querySelector("#camelcase span");
const pascalCaseOutput = document.querySelector("#pascalcase span");
const snakeCaseOutput = document.querySelector("#snakecase span");
const kebabCaseOutput = document.querySelector("#kebabcase span");
const trimOutput = document.querySelector("#trim span");

input.addEventListener("input", (e) => {
  const text = input.value;
  lowerCaseOutput.innerText = text.toLowerCase();
  upperCaseOutput.innerText = text.toUpperCase();
  camelCaseOutput.innerText = toCamelCase(text);
  pascalCaseOutput.innerText = toPascalCase(text);
  snakeCaseOutput.innerText = toSnakeCase(text);
  kebabCaseOutput.innerText = toKebabCase(text);
  trimOutput.innerText = text.trim();
});

function toCamelCase(text) {
  const lowerCaseString = text.toLowerCase();
  const wordArray = lowerCaseString.split(" ");
  const camelCaseArray = wordArray.map((word, i) => {
    if (i === 0) return word;
    return word.charAt(0).toUpperCase() + word.slice(1);
  });
  return camelCaseArray.join(" ");
}

function toPascalCase(text) {
  const wordArray = text.split(" ");
  const pascalCaseArray = wordArray.map((word, i) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  });
  return pascalCaseArray.join(" ");
}

function toSnakeCase(text) {
  return text.toLowerCase().replace(/\s+/g, "_");
}

function toKebabCase(text) {
  return text.toLowerCase().replace(/\s+/g, "-");
}
=======
const input = document.querySelector("#inputText");
const upperCaseOutput = document.querySelector("#uppercase span");
const lowerCaseOutput = document.querySelector("#lowercase span");
const camelCaseOutput = document.querySelector("#camelcase span");
const pascalCaseOutput = document.querySelector("#pascalcase span");
const snakeCaseOutput = document.querySelector("#snakecase span");
const kebabCaseOutput = document.querySelector("#kebabcase span");
const trimOutput = document.querySelector("#trim span");

input.addEventListener("input", (e) => {
  const text = input.value;
  lowerCaseOutput.innerText = text.toLowerCase();
  upperCaseOutput.innerText = text.toUpperCase();
  camelCaseOutput.innerText = toCamelCase(text);
  pascalCaseOutput.innerText = toPascalCase(text);
  snakeCaseOutput.innerText = toSnakeCase(text);
  kebabCaseOutput.innerText = toKebabCase(text);
  trimOutput.innerText = text.trim();
});

function toCamelCase(text) {
  const lowerCaseString = text.toLowerCase();
  const wordArray = lowerCaseString.split(" ");
  const camelCaseArray = wordArray.map((word, i) => {
    if (i === 0) return word;
    return word.charAt(0).toUpperCase() + word.slice(1);
  });
  return camelCaseArray.join(" ");
}

function toPascalCase(text) {
  const wordArray = text.split(" ");
  const pascalCaseArray = wordArray.map((word, i) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  });
  return pascalCaseArray.join(" ");
}

function toSnakeCase(text) {
  return text.toLowerCase().replace(/\s+/g, "_");
}

function toKebabCase(text) {
  return text.toLowerCase().replace(/\s+/g, "-");
}
>>>>>>> origin/main
