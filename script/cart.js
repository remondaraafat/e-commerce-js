//create row
let table=document.getElementsByTagName("tbody")[0];

//get cart elements from local storage
 for(let i=0; i<localStorage.length;i++){
    
     const key=localStorage.key(i);
     const value=JSON.parse(localStorage.getItem(key));
    console.log(value);
     let row=document.createElement("tr");
    
        let c1=document.createElement("td");
        let img1=document.createElement("img");
        img1.src=value.proImg;
        img1.classList.add("img");
        c1.appendChild(img1);
        row.appendChild(c1);
        table.appendChild(row)

        let c2=document.createElement("td");
        c2.innerText=value.proTitle;
        row.appendChild(c2);
        table.appendChild(row)

        let c3=document.createElement("td");
        c3.innerText=value.proPrice+" $";
        row.appendChild(c3);
        table.appendChild(row)

        let c4=document.createElement("td");

        let input=document.createElement("input");
        input.classList.add("number");
        input.value=value.proQuantity;

        let minus=document.createElement("button");
        minus.setAttribute("id","minus");
        minus.innerHTML='<i class="fa-solid fa-minus btn-icon"></i>';
        minus.addEventListener("click", function(){
            if(value.proQuantity>0){
                value.proQuantity--;
                input.value=value.proQuantity;
            }
            if(value.proQuantity===0){
                row.remove();
                localStorage.removeItem(value.proId);
            }
            
        })

        let plus=document.createElement("button");
        plus.setAttribute("id","plus");
        plus.innerHTML='<i class="fa-solid fa-plus btn-icon"></i>';
       plus.addEventListener("click", function(){
        value.proQuantity++;
        input.value=value.proQuantity;
    })

        c4.appendChild(minus);
        c4.appendChild(input);
        c4.appendChild(plus);
        row.appendChild(c4);
        table.appendChild(row)

 }
//plus and minus
let number=document.getElementById("number");
if(number.value==""){
 number.value=0;
}
function plusFun(){
 number.value=Number(number.value)+1;
}
function minusFun(){
 if(Number(number.value)>0){
     number.value=Number(number.value)-1;
 }
}
//scroll to top of the page
function fun(){
    console.log("correct");
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Smooth scroll effect
    });
   }