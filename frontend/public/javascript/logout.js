var signoutEl = document.getElementById("signout")
signoutEl.addEventListener("click", signout);
import getUrl from "./config.js"

function signout() {
    var url = getUrl()
    console.log("i was clicked")
    fetch(url + "/auth/users/logout", {
        credentials: "include",
        method: "POST"
    }).then(() => {
        window.location.href = "/"
    })
}