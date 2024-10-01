//js interview questions
//qns 1) Write a program to convert a string to title case (capitalize the first letter of each word).

function titleCase(string) {
  // split the string by spaces
  let words = string.split(" ");
  console.log(words); //output : ["weather" , "is" , "beautiful" , "today" ]

  // Iterate through each word
  for (let i = 0; i < words.length; i++) {
    // capitalize the first letter combine it with the rest of the word using slice
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }
  console.log(words);

  // Join the words back into a single string
  let result = words.join(" ");
  console.log(result);
}

let string = "weather is beautiful today";
titleCase(string);

// 2-Write a function that checks if a given string is an anagram of another string (contains the same characters in a different order).use javascript

function areAnagrams(str1, str2) {
  // convert to lowercase or uppercase
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  if (str1.length !== str2.length) {
    return false;
  }

  const sortedStr1 = str1.split(",").sort();
  console.log(sortedStr1);
}
