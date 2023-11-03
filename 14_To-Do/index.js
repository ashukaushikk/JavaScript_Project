const addBtn = document.querySelector(".addUser");
const btn = addBtn.innerHTML;
const btnColor = addBtn.style.backgroundColor;
let inputBx = document.getElementById("myInput");
const recorddisplay = document.getElementById("records");
const editBtn = document.getElementById("editBtn");
const deleteBtn = document.getElementById("deleteBtn");

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
  if (editId !== null) {
    userArray.splice(editId, 1, { name: inputValue });
    editId = null;
  } else {
    userArray.push({ name: inputValue });
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
    statement += `<ul>
    <li> <i id="index">${i + 1}.</i> ${
      items.name
    } <i id="editBtn" class="fa fa-edit" onclick="EditInfo(${i})"></i> <i id="deleteBtn" class="fa fa-trash" onclick="DeleteInfo(${i})"></i></li>
    </ul>`;
  });
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
