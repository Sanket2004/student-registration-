var rollV, nameV, telephoneV,emailV, genderV, semV, addressV;

function readFom() {
  rollV = document.getElementById("roll").value;
  nameV = document.getElementById("name").value;
  telephoneV = document.getElementById("telephone").value;
  emailV = document.getElementById("email").value;
  genderV = document.getElementById("gender").value;
  semV = document.getElementById("semester").value;
  addressV = document.getElementById("address").value;
  console.log(rollV, nameV, telephoneV, addressV, genderV);
}

document.getElementById("insert").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("student/" + rollV)
    .set({
      rollNo: rollV,
      name: nameV,
      telephone: telephoneV,
      email: emailV,
      gender: genderV,
      semester: semV,
      address: addressV,
    });
   alert("Data Inserted");
  document.getElementById("roll").value = "";
  document.getElementById("name").value = "";
  document.getElementById("telephone").value = "";
  document.getElementById("email").value = "";
  document.getElementById("gender").value = "";
  document.getElementById("semester").value = "";
  document.getElementById("address").value = "";
};

var before, after;

before = document.getElementById("before");
after = document.getElementById("after").style.display="none";
function ShowDiv() {
  document.getElementById("before").style.display = "none";
  document.getElementById("after").style.display = "block";
}

let container = document.querySelector(".container1");
let timeNow = new Date().getHours();
let greeting =
  timeNow >= 5 && timeNow < 12
    ? "Good Morning 🔆"
    : timeNow >= 12 && timeNow < 18
    ? "Good Afternoon :)"
    : "Good evening 🌙";
container.innerHTML = `<h1>${greeting}</h1>`;