const addBtn = document.querySelector(".addUser");
const btn = addBtn.innerHTML;
const btnColor = addBtn.style.backgroundColor;
const inputBx = document.getElementById("myInput");
const recorddisplay = document.getElementById("records");
const editBtn = document.getElementById("editBtn");
const deleteBtn = document.getElementById("deleteBtn");
const checkeBtn = document.getElementById("checked");

let userArray = [];
// Its function is to store the ID
let editId = null;
// this value in string
let obj = localStorage.getItem("user");
// & now Return in object form & assign in blank array
if (obj !== null) {
  userArray = JSON.parse(obj);
}

DisplayInfo();

// #ADD Button
addBtn.addEventListener("click", function () {
  let inputValue = inputBx.value;

  if (inputBx.value === "") {
    //Display an alert if the input is empty
    alert("Please enter a value");
    return; // Exit the function without further processing
  }

  if (editId !== null) {
    userArray.splice(editId, 1, { name: inputValue });
    editId = null;
  } else {
    userArray.push({ name: inputValue, isCompleted: false });
    console.log(userArray);
  }

  SaveInfo(userArray);
  inputBx.value = "";
  addBtn.textContent = btn;
  addBtn.style.backgroundColor = btnColor;
});

function SaveInfo(userArray) {
  // Object Convert to String form
  let strArray = JSON.stringify(userArray);
  // .set item () method always takes string and not object, so userArray has to be converted to string first.
  localStorage.setItem("user", strArray);
  DisplayInfo();
}

function DisplayInfo() {
  let statement = "";
  userArray.forEach((items, i) => {
    statement += `<ul><li> <i id="index">${i + 1}.</i> ${items.name} <i id="checked" class="fa-regular fa-square-check" onclick="CheckedInfo(${i})"> <div class=${items.isCompleted ? `isChecked` : ""}></div> </i> <i id="editBtn" class="fa fa-edit" onclick="EditInfo(${i})"></i> <i id="deleteBtn" class="fa fa-trash" onclick="DeleteInfo(${i})"></i></li></ul>`;});
  recorddisplay.innerHTML = statement;
}

function EditInfo(id) {
  editId = id;
  inputBx.value = userArray[id].name;
  addBtn.textContent = "Updated";
  addBtn.style.backgroundColor = "green";
}

function DeleteInfo(id) {
  userArray.splice(id, 1);
  SaveInfo(userArray);
}

function CheckedInfo(id) {
  let UpdateUserArray = [...userArray];
  let selectitem = UpdateUserArray[id];
  if (selectitem.isCompleted) {
    selectitem.isCompleted = false;
  } else {
    selectitem.isCompleted = true;
  }
  userArray = UpdateUserArray;
  console.log(userArray);
  SaveInfo(userArray);
}
