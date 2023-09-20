let btnall = document.getElementById("all");
let btnrdm = document.getElementById("rdm");
btnall.addEventListener("click", allnicknames);
btnrdm.addEventListener("click", randomnicknames);

let nicknames = ["the willy muncher", "the plonker", "the great", "the sucka", "the shidder", "the goblin"];

function allnicknames() {
  let firstname = document.getElementById("firstname").value;
  let lastname = document.getElementById("lastname").value;
  document.getElementById("txt").innerHTML = "";
  // displaying all nicknames
  for (let i = 0; i < nicknames.length; i++) {
    document.getElementById("txt").innerHTML += `${i}: ${firstname} "${nicknames[i]}" ${lastname} <hr>`;
  }
}

function randomnicknames() {
  let firstname = document.getElementById("firstname").value;
  let lastname = document.getElementById("lastname").value;
  let randomNum = Math.floor(Math.random() * nicknames.length);
  // generating nickname
  document.getElementById("txt").innerHTML = `${firstname} "${nicknames[randomNum]}" ${lastname} <hr>`;
}
