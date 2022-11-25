import getUrl from "./config.js";
let login = document.getElementById("loginform");
let loginerr = document.getElementById("loginerr");
login.addEventListener("submit", submitLogin);

function submitLogin(event) {
  event.preventDefault();

//   console.log("hello event form");
  var url = getUrl();

  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var data = {
    user_name: email,
    password: password,
  };
  fetch(url + "/auth/users/login", {
    credentials: "include",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (response.status === 200) {
        window.location.href = "/dashboard";
      } else if (response.status === 400) {
        response.json()
        .then((data) => loginerr.innerText = data.message)
      }
    });
}
