let button = document.getElementById("button");

button.addEventListener('click',create)

function create(){
    let input = document.createElement("input")
    let div = document.createElement('div');
    div.append(input);
    div.setAttribute('draggable', true);
    div.setAttribute('class',"job");
    document.body.append(div)
}