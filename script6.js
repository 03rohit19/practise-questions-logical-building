console.log(x);

function findValue() {
  var x = 4;
  console.log(x);
}

findValue();
console.log(x);

// getting the value from nested objects
const get = (key, object) => {
  if (typeof object !== "object" || object === null) {
    return undefined;
  }

  if (kwy in object) {
    return object[key];
  }

  for (const objkey in object) {
    const value = get(key, object[objkey]);
    if (value !== undefined) {
      return value;
    }
    return undefined;
  }
};

// for loop
for (var i = 0; i < 3; i++) {
  // A new block scope is creaeed with new let decle\ared values
  setTimeout(() => {
    console.log(i);
  }, 1000);
}
