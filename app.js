const dark = document.querySelector(".dark");
const night = document.querySelector(".night");
const light = document.querySelector(".light");
const sidebar = document.querySelector(".sidebar");
const activeListItem = document.querySelector(".list-item.active");

dark.addEventListener("click", ()=>{
    sidebar.className = "sidebar";
    activeListItem = "list-item activate"
})

night.addEventListener("click", ()=>{
    sidebar.className = "sidebar night";
    activeListItem = "list-item activate night"
})

light.addEventListener("click", ()=>{
    sidebar.className = "sidebar light";
    activeListItem = "list-item activate light"
})