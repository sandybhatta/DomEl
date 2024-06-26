let btn=document.querySelector("#add");
let todo=document.querySelector("#toDo");
let room=document.querySelectorAll(".shower");
let roomIds=[];
for (let val of room){
    roomIds.push(val.id)
}
btn.addEventListener("click",(e)=>{
 let card=document.createElement("div");
 card.className="card"
 card.innerText="add task";
 card.setAttribute("contenteditable",true)
 todo.append(card);
 card.focus();


  
card.addEventListener("blur",(e)=>{
    if(e.target.innerText==""){
        e.target.remove();
    }
   })
   card.addEventListener("click",(e)=>{
    let inTxt=e.target;
    console.log(inTxt.innerText);
   if(inTxt.innerText==="add task"){
       e.target.innerText="";
   }
   })
   let select=document.createElement("select")
 for(let element of roomIds){
    let option=document.createElement("option");
    option.value=element;
    option.innerText=element;
    select.append(option)
} 
    card.prepend(select);

select.addEventListener("change", (e)=>{
    let selectdCohntainer=document.querySelector(`#${e.target.value}`)
    console.log(selectdCohntainer);
    selectdCohntainer.append(card);
})
})
