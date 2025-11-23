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
    { name: 'CRUD', func: 'openCrud(this)' },
    { name: 'React', func: 'openReact(this)' },
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
    {
      bold: 'Ctrl + space',
      text: 'Showing possible variables, functions, or code snippets you can use at the cursor position.',
    },
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
      bold: "localStorage.removeItem('name')",
      text: 'removes the item',
    },
    {
      bold: 'localStorage.clear()',
      text: 'clears the whole storage',
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

function openCrud(elListItem) {
  changeFormat()
  makeClickedBold(elListItem)
  changeHeader('CRUD')
  const items = [
    {
      bold: 'query',
      text: 'Get all items (Read all).',
    },
    {
      bold: 'get',
      text: 'Get one item by ID (Read one).',
    },
    {
      bold: 'get',
      text: 'Add a new item (Create).',
    },
    {
      bold: 'put',
      text: 'Update an existing item (Update).',
    },
    {
      bold: 'remove',
      text: 'Delete an item (Delete).',
    },
  ]

  changeMainText(items)
}

function openReact(elListItem) {
  changeFormat()
  makeClickedBold(elListItem)
  changeHeader('React')
  const items = [
    {
      bold: 'Babel',
      text: 'Babel lets you write new JS features while keeping compatibility with old browsers.',
    },
    {
      bold: '&lt;React.Fragment&gt;',
      text: 'A way to group multiple JSX elements without adding a div.',
    },
    {
      bold: 'key=".."',
      text: 'The key prop helps React identify which items in a list have changed, been added, or removed, so it can efficiently update the UI.',
    },
    {
      bold: 'onClick={funcName}',
      text: 'React automatically passes the click event object as the first argument.',
    },
    {
      bold: 'function SomeComponent(props){...}',
      text: 'Each component always recieves a props object.',
    },
    {
      bold: '&lt;SomeComponent name="Eldan" user={{age:28}} /&gt;',
      text: 'How to pass props to the component.',
    },
    {
      bold: 'const {useState, useEffect, useRef} = React',
      text: 'Import the hooks.',
    },
    {
      bold: 'HOOK #1 const [count, setCount] = useState(0)',
      text: 'It creates a count state starting at 0 and a setCount function to change it.',
    },
    {
      bold: 'setCount(prevCount => prevCount + 1)',
      text: 'It updates the state based on the previous value, guaranteeing the new count is always accurate even if React batches updates.',
    },
    {
      bold: 'HOOK #2 const spanRef = useRef()<br>&lt;span ref = {spanRef}',
      text: 'It gives you a pointer to the span DOM element, will return an object with current value.',
    },
    {
      bold: 'const intervalIdRef = useRef()',
      text: 'Creates a mutable object that survives re-renders, so it keeps its value even if the component updates.',
    },
    {
      bold: 'HOOK #3 useEffect(()=>{...},[])',
      text: 'Runs the code inside once, after the component renders.',
    },
    {
      bold: 'useEffect(()=>{...},[count])',
      text: 'Runs the effect whenever count changes.',
    },
    {
      bold: 'useEffect(()=>{ return()=>{...}},[])',
      text: 'Runs cleanup when the component unmounts.',
    },
  ]

  changeMainText(items)
}
