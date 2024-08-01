
let form=document.querySelector("form");
let p = document.getElementById("para");
let n=document.getElementById("name");
document.addEventListener("DOMContentLoaded", () => {

  form.addEventListener("submit", (event) => {
    event.preventDefault();
let name=n.value;
    p.innerHTML = `<b>Message submitted ${name},Thank you!  </b> <i class="fa-solid fa-heart"></i> `;
  });
});