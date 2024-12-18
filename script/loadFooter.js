document.addEventListener("DOMContentLoaded",function(){
    fetch("footer.html")
    .then(response => response.text())
    .then(data =>{
        document.getElementById("footer-placeholder").innerHTML =data;
    })
    .catch(error => console.log("erroe loading the footer",error))
})