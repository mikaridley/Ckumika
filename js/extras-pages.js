'use strict'

function openExtras() {
  var header = 'Extras'
  var elSideBar = document.querySelector('.side-bar')
  const topics = [
    { name: 'Shortcuts', func: 'openShortcutsPage(this)' },
    { name: 'Console', func: 'openConsole(this)' },
    { name: 'MVC', func: 'openMvc(this)' },
    { name: 'Local storage', func: 'openlocalStorage(this)' },
    { name: 'Query Params', func: 'openQueryParams(this)' },
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

function openMvc(elListItem) {
  changeFormat()
  makeClickedBold(elListItem)
  changeHeader('MVC')
  const items = [
    {
      bold: 'MVC',
      text: 'Model → handles the data and business logic<br>View → displays the data to the user<br>Controller → manages user input and updates the Model and View',
    },
    {
      bold: 'onFunction',
      text: 'Function that we call from the HTML, we will put on at the start',
    },
    {
      bold: '___-service',
      text: 'thats how we would call a JS file that controls the Model part',
    },
    {
      bold: '___-controller',
      text: 'thats how we would call a JS file that controls the Controller part',
    },
    {
      bold: '_functionName',
      text: 'we sohuld put _ before private functions',
    },
  ]

  changeMainText(items)
}

function openlocalStorage(elListItem) {
  changeFormat()
  makeClickedBold(elListItem)
  changeHeader('Local Storage')
  const items = [
    {
      bold: "localStorage.setItem('name','eldan')",
      text: "saves the value 'eldan' under the key 'name' in the browser’s local storage",
    },
    {
      bold: "localStorage.getItem('name')",
      text: "retrieves the value stored under the key 'name' from the browser’s local storage",
    },
    {
      bold: "JSON,stringify({...}) || JSON.parse('{...}')",
      text: 'converts an object into a JSON string back into an object',
    },
  ]

  changeMainText(items)
}

function openQueryParams(elListItem) {
  changeFormat()
  makeClickedBold(elListItem)
  changeHeader('Query Params')
  const items = [
    {
      bold: 'diplinking',
      text: 'a link that opens a specific page or content inside a website or app',
    },
    {
      bold: 'queryParams = new URLSearchParams()',
      text: 'creates a new object to build or read URL query parameters easily',
    },
    {
      bold: 'const queryParams = `?title=${filterBy.title}&maxPrice=${filterBy.maxPrice}`<br> const newUrl = window.location.protocol + "//" + window.location.host + window.location.pathname + queryParams<br>window.history.pushState({ path: newUrl }, "", newUrl)',
      text: 'builds a URL and updates the browser’s address bar without reloading the page',
    },
    {
      bold: 'const queryParams = new URLSearchParams(window.location.search)',
      text: 'creates an object to read the current page’s URL query parameters easily',
    },
    {
      bold: "queryParams.get('parameter') || ''",
      text: 'gets the parameter from the URL, or returns an empty string if it doesn’t exist',
    },
  ]

  changeMainText(items)
}
