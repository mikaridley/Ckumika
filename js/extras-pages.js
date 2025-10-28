'use strict'

function openExtras() {
  var header = 'Extras'
  var elSideBar = document.querySelector('.side-bar')
  const topics = [
    { name: 'Shortcuts', func: 'openShortcutsPage(this)' },
    { name: 'Console', func: 'openConsole(this)' },
  ]
  var strHtml = ''
  for (var i = 0; i < topics.length; i++) {
    strHtml += `<li onclick="${topics[i].func}">${topics[i].name}</li>`
  }
  elSideBar.innerHTML = `<nav><h3>${header}</h3><ul>${strHtml}</ul></nav>`
}

function openShortcutsPage(elListItem) {
  changeFormat()
  makeClickedBold(elListItem)
  changeHeader('Shortcuts')
  const items = [
    { bold: 'Alt + Shift + F', text: 'auto-format file' },
    { bold: 'Ctrl + /', text: 'comment / uncomment line' },
    { bold: 'Ctrl + K + 0', text: 'collapse all tags' },
    { bold: 'Ctrl + K + J', text: 'expand all tags' },
    { bold: 'F2', text: 'rename a variable' },
    { bold: 'Ctrl + B', text: 'copy current line down' },
    {
      bold: 'Alt + Shift + ↓',
      text: 'Select next occurrence of a word or variable',
    },
    { bold: 'Ctrl + D', text: 'select next occurrence of word' },
    { bold: 'WinKey + .', text: 'emojis gallery' },
  ]

  changeMainText(items)
}

function openConsole(elListItem) {
  changeFormat()
  makeClickedBold(elListItem)
  changeHeader('Console')
  const items = [
    {
      bold: 'Console.log',
      text: "outputs information to the browser's console",
    },
    {
      bold: 'Console.table',
      text: 'displays array or object data in a table format in the console',
    },
    {
      bold: 'Console.dir',
      text: 'displays a JavaScript object as an interactive list of its properties in the console',
    },
    {
      bold: '$0',
      text: 'in the browser console refers to the currently selected element in the Elements panel of developer tools',
    },
    {
      bold: "$('h1')",
      text: "selects the first 'h1' elements on the page",
    },
    {
      bold: "$$('h1')",
      text: "selects all 'h1' elements on the page",
    },
  ]

  changeMainText(items)
}
