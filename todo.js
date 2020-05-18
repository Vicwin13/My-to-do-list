let writingArea = document.querySelector("#text");
let submit = document.querySelector(".submit");
var ul = document.querySelector("ul");


function wordLength(){ 
    return writingArea.value.length;
}



 function listen() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(writingArea.value));
    ul.appendChild (li);
	writingArea.value = "";
	
	var dBtn = document.createElement("button");
	dBtn.appendChild(document.createTextNode("X"));
	li.appendChild(dBtn);
	dBtn.addEventListener("click", deleteListItems);
	
function deleteListItems (){
	li.classList.add("delete");
	}
	
}


function addListClick(){
	if (wordLength() > 0 ){
		listen();
	}
}
function addListPress(event){
	 if (wordLength() > 0 && event.which ===13){
			listen();
	 }
}

submit.addEventListener("click",addListClick);
writingArea.addEventListener("keypress", addListPress);






