let observer = new IntersectionObserver((entries, observer) => {
  entries
    .filter((e) => e.isIntersecting)
    .forEach((entry) => {
      entry.target.classList.add("scrolled")
      observer.unobserve(entry.target)
    })
})

document.querySelectorAll("section").forEach((e) => {
  observer.observe(e)
})
