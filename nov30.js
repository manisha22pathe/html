// z=document.getElementById("a")
// function change(){
//     a.textContent="hello"
// }
// age=22
// if(age<18){
//     console.log("you can not vote")
// }else if(age==18){
//     console.log("voting age starts")  
// }

// else{
//     console.log("you can  vote")
// }
let a=document.getElementById("d")
function change(){


if(a.style.background=="red"){
    a.style.background="yellow"

}else if(a.style.background=="yellow"){
    a.style.background="blue"
}
else if(a.style.background=="blue"){
    a.style.background="white"
}
else{
    a.style.background="red"
}
}