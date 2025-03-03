function toggleFAQ(element) {
  let answer = element.querySelector('.faq-answer')
  let icon = element.querySelector('.faq-question span')

  if (answer.classList.contains('show')) {
    answer.classList.remove('show')

    answer.style.display = 'none'
    icon.textContent = '+'
  } else {
    answer.style.display = 'block'
    
    setTimeout(() => answer.classList.add('show'), 10)
    icon.textContent = '-'
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const burgerMenu = document.getElementById('burger-menu')

  const sideMenu = document.getElementById('side-menu').querySelector('.menu-container')

  const closeMenu = document.getElementById('close-menu')

  const menuLinks = sideMenu.querySelectorAll('a')


  burgerMenu.addEventListener('click', () => {
    sideMenu.classList.toggle('open')
  })

  closeMenu.addEventListener('click', () => {
    sideMenu.classList.remove('open')
  })

  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      sideMenu.classList.remove('open')
    })
  })
})