const faqs = document.querySelectorAll('.duvida');
faqs.forEach(faq => {
  faq.addEventListener('click', () => {
    faq.classList.toggle('active')
    
  })
})