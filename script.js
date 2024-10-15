const h1=document.getElementsByClassName("header");
const add=document.getElementById("addBox");
const remove=document.getElementById("removeBox");
const show=document.getElementById("showBoxCount");
const container=document.getElementsByClassName("container")[0];
const showh1=document.getElementById("showhead");
let count=0;
showh1.addEventListener("click",()=>{
    alert(h1[0].innerText);
})
add.addEventListener("click",()=>{
    const div=document.createElement("div");
    div.setAttribute("class","box-style");
    div.textContent="New Box";
    div.setAttribute("id",`box`)
    container.appendChild(div);
    count=count+1;
    
});

remove.addEventListener("click",()=>{
    const removeDiv=document.getElementById("box");
    removeDiv.remove();
    count=count-1;
});


show.addEventListener("click",()=>{
    alert(`There are ${count} boxes`);
});


const link=document.getElementById("href");
link.addEventListener("click",()=>{
    const link1=document.getElementById("link");
    link1.style.display="block";
})






