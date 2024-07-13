let ul = document.querySelector(".container_item");
let input = document.getElementById("input");
let Additem = () => {
  localStorageSave();
  if (input.value == "") {
    alert("Please Enter Task");
  } else {
    let item = input.value;

    ul.innerHTML += `
   <div>
      <li>${item} </li>
      <span></span>
      
    </div>
        `;
    input.value = "";
  }
  localStorageSave();
};

/////////////
document.getElementById("enter").addEventListener("click", () => {
  Additem();
});
//////////////////
ul.addEventListener("click", (element) => {
  if (element.target.tagName === "LI") {
    element.target.classList.toggle("select");
    localStorageSave();
  } else if (element.target.tagName === "SPAN") {
    element.target.parentElement.remove();
    localStorageSave();
  }
});

let theme = document.getElementsByTagName("p")[0]
let body = document.body;
theme.addEventListener(
  "click", () => {
    
   theme.classList.toggle("colorTheme")
    body.classList.toggle("theme")
 
  }
  
)
///////////////////
let localStorageSave = () => {
  localStorage.setItem("item", ul.innerHTML);
 
};
let localStorageGet = () => {
  if (ul.innerHTML !== null) {
    ul.innerHTML += localStorage.getItem("item");
  }

};
if (localStorage.getItem("item") !== null){
localStorageGet();}

////////////////////
