//menu button with custom props

function menu(...props) {
  const content = document.getElementById('content')
  const btn = document.createElement('div')
  btn.classList.add('menu')
  btn.innerText = 'Menu'
  content.appendChild(btn)

  const menuContent = document.createElement('div')
  menuContent.classList.add('menuContent')
  menuContent.style.display = 'none'

  props.forEach(element => {
    let menuBtn = document.createElement('div')
    menuBtn.classList.add('menubtn')
    menuBtn.innerText = element
    menuContent.appendChild(menuBtn)
  })
  content.appendChild(menuContent)

  btn.addEventListener('click', function () {
    if (menuContent.style.display === 'none') {
      menuContent.style.display = 'flex'
    } else menuContent.style.display = 'none'
  })
}

menu('Contact us', 'about us', 'shipping')
