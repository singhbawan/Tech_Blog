function getUrl() {
    if (window.location.href.includes("join-us")) {
        return "https://join-us-1.herokuapp.com"
    } else {
        return "http://localhost:3001"
    }
}
export default getUrl;