const openNavBtn = document.getElementById("openNav")
openNavBtn.addEventListener("click", openNav)

function openNav() {
  document.getElementById("sideNavContainer").style.width = "100vw"
}

const closeBtn = document.getElementById("closeBtn")
closeBtn.addEventListener("click", closeNav)

window.addEventListener("click", (event) => {
  const sideBarCont = document.getElementById("sideNavContainer")
  if(event.target === sideBarCont) {
    closeNav()
  }
})

function closeNav() {
  document.getElementById("sideNavContainer").style.width = "0"
}
