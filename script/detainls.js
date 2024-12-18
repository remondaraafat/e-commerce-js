//fetch one product
var id=2
var img=document.getElementsByTagName("img")[0];
var title=document.getElementById("name");
var brand=document.getElementById("brand");
var price=document.getElementById("price");
var description=document.getElementById("description");

var proData;
fetch("https://fakestoreapi.com/products/"+id) 
.then(res => res.json())
.then(res => {
    proData=res;
    img.src=res.image;
    title.innerText=res.title;
    brand.innerText=res.brand;
    price.innerText=res.price+" $";
    description.innerText=res.description;
})
.catch(err => console.error("Error fetching the product:", err));

//plus and minus 
   var number=document.getElementById("number");
   if(number.value==""){
    number.value=0;
    console.log(number.value)
   }
   function plusFun(){
    number.value=Number(number.value)+1;
   }
   function minusFun(){
    if(Number(number.value)>0){
        number.value=Number(number.value)-1;
    }
   }

//add to cart
function addToCart(){
    var quantity;
    if(Number(number.value)>0 ){
        quantity=number.value;
        if (localStorage.getItem(id) !== null) {
            alert("Oops! This product is already in your cart. 😊");
        }
        else{
            var pro={
                proId:proData.id,
                proTitle:proData.title,
                proImg:proData.image,
                proPrice:proData.price,
                proQuantity:quantity,
            }
            
            localStorage.setItem(id,JSON.stringify(pro))
            console.log(JSON.parse(localStorage.getItem(id)).proId);
        }
       }
    else{
        alert("enter a valid quantity");
    }
    
    }
//localStorage.clear();
// JSON.parse(localStorage.getItem(id))

//scroll to top of the page
function fun(){
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
   }