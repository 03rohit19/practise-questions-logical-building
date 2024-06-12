// index.mjs

const userData = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log(data);

    const cardDiv = document.querySelector("#cards-div");
    data.map((user) => {
      // Create a new user card div
      const userCard = document.createElement("div");
      userCard.classList.add("user-card");

      // Create and set user name element
      const userName = document.createElement("h3");
      userName.innerText = user.name;
      userCard.appendChild(userName);

      // Create and set user address element
      const userAddress = document.createElement("p");
      userAddress.innerText = `${user.address.street}, ${user.address.city}`;
      userCard.appendChild(userAddress);

      // Create and set company name element
      const companyName = document.createElement("p");
      companyName.innerText = user.company.name;
      userCard.appendChild(companyName);

      // Append the user card to the cardDiv
      cardDiv.appendChild(userCard);
    });

    // Update the total number of users
    document.querySelector("#heading").innerText += data.length;
  } catch (error) {
    console.log(error);
  }
};

userData();

// Dark mode toggle functionality
const darkModeBtn = document.querySelector("#dark-mode-btn");
darkModeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  if (document.body.classList.contains("dark-mode")) {
    darkModeBtn.innerText = "Light mode";
  } else {
    darkModeBtn.innerText = "Dark mode";
  }
});
