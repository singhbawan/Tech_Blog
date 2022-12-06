
var formEl1 = document.getElementById('form');
formEl1.addEventListener('submit', submitEventForm);

function submitEventForm(event) {

    event.preventDefault()
    
    var title = document.getElementById("title").value
    var description = document.getElementById("description").value
    

   

    var data = {
        title: title,
        description: description,
       
    }
    fetch("/api/posts/newpost", {
        credentials: "include",
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            "Accept": "application/json"
        },
        body: JSON.stringify(data)
    }).then(() => {
        window.location.href = "/dashboard"
    })
}