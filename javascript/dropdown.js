var selectField = document.getElementById("selectField");
var selectText = document.getElementById("selectField-text");
var options = document.getElementsByClassName("options");
var list = document.getElementById("dropdown-list");
var arrowIcon = document.getElementById("arrowIcon");
var selectedStudentTypeInput = document.getElementById("selectedStudentType");

selectField.onclick = function(){
  list.classList.toggle("hide");
  arrowIcon.classList.toggle("rotate");
}


for(option of options){
  option.onclick = function(){
    selectText.innerHTML = this.textContent;
    list.classList.toggle("hide");
    arrowIcon.classList.toggle("rotate");

    selectedStudentTypeInput.value = this.textContent.trim();
  }
}