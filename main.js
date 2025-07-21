let list = document.querySelectorAll("ul li");
let div = document.querySelector(".exp");

// store the data what you change in the local storage
if (window.localStorage.getItem("color")) {
  div.style.backgroundColor = window.localStorage.color;

  list.forEach((a) => {
    a.classList.remove("active"); // foreach items li remove active
  });

  document
    .querySelector(`[data-color="${window.localStorage.color}"]`) // add the current color as active
    .classList.add("active");
}

list.forEach((e) => {
  // event click
  e.addEventListener("click", (li) => {
    // console.log(li.currentTarget.dataset.color);
    list.forEach((a) => {
      a.classList.remove("active"); // foreach items li remove active
    });
    li.currentTarget.classList.add("active"); // when click on currentTarget add to this active

    window.localStorage.setItem("color", li.currentTarget.dataset.color); // add to local storage
    div.style.backgroundColor = li.currentTarget.dataset.color; // color the div as same as the li color
  });
});
