var img=document.getElementsByTagName("img")[0];

fetch("https://fakestoreapi.com/products/2") 
.then(res => res.json())
.then(res => {
    img.src=res.image;
})
.catch(err => console.error("Error fetching the product:", err));

