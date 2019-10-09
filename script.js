let button = document.getElementById("button");
let board = document.querySelectorAll(".board");

button.addEventListener('click',create)

function create(){
    let input = document.createElement("input")
    let div = document.createElement('div');
    div.append(input);
    div.setAttribute('draggable', true);
    div.setAttribute('class',"job");
    div.setAttribute('id',"abc")
    document.body.append(div)
    div.addEventListener('dragstart', function(evt){
        evt.dataTransfer.setData("text", evt.target.id);
        console.log(evt)
        console.log("dragging.....");
    })
}


for(const emp of board){
    emp.addEventListener("dragover", dragOver)
    emp.addEventListener("drop", dragDrop)
}

function dragOver(e){
    e.preventDefault();
    console.log("over")
}

function dragDrop(evt){
    evt.preventDefault();
    let data = evt.dataTransfer.getData("text");
    console.log(evt.dataTransfer.getData("text"))
    console.log("dropped")
    evt.target.appendChild(document.getElementById(data));
}