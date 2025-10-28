'use strict'

function changeFormat() {
  var elContent = document.querySelector('.main-content-homepage')
  if (elContent) {
    elContent.classList.replace('main-content-homepage', 'main-content')
    elContent = document.querySelector('.header-homepage')
    elContent.classList.replace('header-homepage', 'header-of-knowledge')
    elContent = document.querySelector('.knowledge-homepage')
    elContent.classList.replace('knowledge-homepage', 'knowledge')
  }
}

function changeMainText(items) {
  var elSideBar = document.querySelector('.knowledge')
  var strHtml = ''
  for (var i = 0; i < items.length; i++) {
    if (!items[i].example)
      strHtml += `<li><strong>${items[i].bold}</strong> - ${items[i].text}</li>`
    else
      strHtml += `<li><strong>${items[i].bold}</strong> - ${items[i].text} <br /><span>Example: </span>${items[i].example}</li>`
  }
  elSideBar.innerHTML = `<ul class="knowledge">${strHtml}</ul>`
}

function makeClickedBold(elListItem) {
  var elActive = document.querySelector('.active')
  if (!elActive) elListItem.classList.toggle('active')
  else {
    elActive.classList.remove('active')
    elListItem.classList.toggle('active')
  }
}

function makeButtonClicked(elBtn) {
  var elBtnClicked = document.querySelector('.clicked-btn')
  if (!elBtnClicked) elBtn.classList.toggle('clicked-btn')
  else {
    elBtnClicked.classList.remove('clicked-btn')
    elBtn.classList.toggle('clicked-btn')
  }
}

function changeHeader(header) {
  var elHeader = document.querySelector('.header-of-knowledge')
  elHeader.innerHTML = header
}
