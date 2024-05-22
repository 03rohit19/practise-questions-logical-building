async function fetchingUserData() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    console.log(data);
    userData(data);
  } catch (error) {
    console.log("error fetching data", error);
  }
}

function userData(data) {
  const devDetails = document.querySelector(".card-details");
  devDetails.innerHTML = "";
  data.forEach(function (user) {
    const cardInfo = document.createElement("div");
    cardInfo.className = "card-info";
    cardInfo.innerHTML = `
        <h2>${user.name}</h2>
        <p><strong>Username:</strong> ${user.username}</p>
        <p><strong>Email:</strong> ${user.email}</p>
        <p><strong>Address:</strong> ${user.address.street}, ${user.address.city}</p>
        <p><strong>Phone:</strong> ${user.phone}</p>
        <p><strong>Company:</strong> ${user.company.name}</p>
      `;
    devDetails.appendChild(cardInfo);
  });
}

document
  .querySelector(".load-details")
  .addEventListener("click", fetchingUserData);
