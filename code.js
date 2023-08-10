const skills_bottom = document.getElementsByClassName("skills_bottom")[0];
const nav_btn = document.getElementsByClassName("nav-mobile")[0];
const nav_list = document.getElementsByClassName("nav-right")[0];
const nav_items = document.querySelectorAll(".nav-right-items");

nav_items.forEach((btn) => {
  btn.addEventListener("click", () => {
    nav_list.classList.toggle("active");
  });
});

nav_btn.addEventListener("click", () => {
  nav_list.classList.toggle("active");
});

const skills_api = [
  ["asset 19.png", "Python"],
  ["asset 2.png", "React JS"],
  ["asset 15.png", "Javascript"],
  ["asset 13.png", "HTML5"],
  ["asset 14.png", "CSS"],
  ["asset 10.png", "Tailwind CSS"],
  ["asset 11.png", "Bootstrap"],
  ["asset 5.png", "Redux"],
  ["asset 30.png", "Github"],
  ["asset 26.png", "Netlify"],
];

skills_api.map((e) => {
  const skill_div = document.createElement("div");

  skill_div.innerHTML = ` <div class="skill_card">
    <img class="skill_img" src="./Asset/${e[0]}" alt="${e[1]}">
    <h4 class="skill_title">${e[1]}</h4>
  </div>`;

  skills_bottom.appendChild(skill_div);
  console.log(e[0]);
});
