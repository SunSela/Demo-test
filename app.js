const btn_Agree = document.querySelector(".btn_Yes");
const btn_disgree = document.querySelector(".btn_No");
const text = document.querySelector(".text");

btn_Agree.addEventListener("click", () => {
  text.innerText = "See You Room C600";
});

btn_disgree.addEventListener("mouseover", () => {
  if (btn_disgree.classList.contains("moving")) {
    btn_disgree.classList.add("moving");
  } else {
    btn_disgree.classList.remove("moving");
  }
});
