const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});
const signInForm = document.querySelector(".sign-in-form");

signInForm.addEventListener("submit", (e) => {
  e.preventDefault(); // Ngăn chặn hành vi submit mặc định của form
  const username = document.querySelector("#username");
  const password = document.querySelector("#password");
  // Kiểm tra username và password
  if (username === null && password === null) {
    window.location.href = "../index.html"; // Chuyển đến trang index.html
  } else {
    alert("Invalid username or password. Please try again.");
  }
});
