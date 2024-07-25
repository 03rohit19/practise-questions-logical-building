// password strength check
const passwordInput = document.getElementById("password");
const strengthIndicator = document.getElementById("strengthIndicator");

passwordInput.addEventListener("input", () => {
  const password = passwordInput.value;
  let strength = "Very weak";

  if (password.length >= 4 && password.length <= 7) {
    strength = "Weak";
  } else if (password.length >= 8 && password.length <= 11) {
    strength = "Medium";
  } else if (password.length >= 12 && password.length <= 15) {
    strength = "Strong";
  } else if (password.length > 15) {
    strength = "Very Strong";
  }

  strengthIndicator.textContent = strength;
});
