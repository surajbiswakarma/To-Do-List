let inputs = document.getElementById("inp");
let text = document.querySelector(".text");

function add(){
   if(inputs.value == ""){
    alert("please enetr task");
   }else{
    let textEle = document.createElement("ul");
    textEle.innerHTML = `${inputs.value} <i class="fa-solid fa-trash"></i>`;
    text.appendChild(textEle);
    inputs.value = "";

    textEle.querySelector("i").addEventListener("click", remove);
    function remove(){
        textEle.remove();
    }
   }
}