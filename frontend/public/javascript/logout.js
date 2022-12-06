var signoutEl = document.getElementById("signout")
signoutEl.addEventListener("click", signout);


function signout() {
   
    
    fetch("/auth/users/logout", {
        credentials: "include",
        method: "POST"
    }).then(() => {
        window.location.href = "/"
    })
}