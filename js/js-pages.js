'use strict'

function openJs() {
  var header = 'Java Script'
  var elSideBar = document.querySelector('.side-bar')
  const topics = [
    { name: 'Formats and Basics', func: 'openJsFormats(this)' },
    { name: 'Strings', func: 'openJsStrings(this)' },
    { name: 'Numbers', func: 'openJsNumbers(this)' },
    { name: 'Math', func: 'openJsMath(this)' },
    { name: 'Time and Timers', func: 'openJsTime(this)' },
    { name: 'Conditions', func: 'openJsConditions(this)' },
    { name: 'Loops', func: 'openJsLoops(this)' },
    { name: 'Arrays', func: 'openJsArrays(this)' },
    { name: 'Objects', func: 'openJsObjects(this)' },
    { name: 'Matrix', func: 'openJsMatrix(this)' },
    { name: 'Functions', func: 'openJsFunctions(this)' },
    { name: 'Connecting JS with HTML & CSS', func: 'openJsConnecting(this)' },
  ]
  var strHtml = ''
  for (var i = 0; i < topics.length; i++) {
    strHtml += `<li class="list-item" onclick="${topics[i].func}">${topics[i].name}</li>`
  }
  elSideBar.innerHTML = `<nav><h3>${header}</h3><ul>${strHtml}</ul></nav>`
}

function openJsFormats(elListItem) {
  changeFormat()
  makeClickedBold(elListItem)
  changeHeader('Java Script')
  const items = [
    {
      bold: 'var',
      text: 'declares a variable. Its name should start with lowercase letters',
      example: 'num, maxNum',
    },
    {
      bold: 'Functions',
      text: 'should have names that describe actions (verbs)',
      example: 'getMax, sayHello',
    },
    {
      bold: 'const',
      text: 'declares a constant. You can perform actions on it, but you can’t reassign it. Its name should usually be uppercase',
      example: 'NUMBERS',
    },
    {
      bold: 'array',
      text: 'should have names that describe plural',
      example: 'nums, students',
    },
    {
      bold: "'use strict'",
      text: 'should be written at the top of your JS file. It makes the code stricter and will throw an error if you forget to declare a variable',
    },
    {
      bold: 'Main types',
      text: 'Number, String, Boolean, Undefined, Object, Array, Function',
    },
  ]
  changeMainText(items)
}

function openJsStrings(elListItem) {
  changeFormat()
  makeClickedBold(elListItem)
  changeHeader('Strings')
  const items = [
    {
      bold: 'Strings are immutable',
      text: 'can’t change directly, only make copies',
    },
    { bold: '\\n', text: 'new line inside string' },
    { bold: '\\t', text: 'tab space inside string' },
    { bold: "\\'", text: 'single quote inside string' },
    { bold: "parseInt('123a')", text: '123, converted to a number' },
    { bold: 'str.length', text: 'counts all characters including spaces' },
    { bold: 'str.charAt(0)', text: 'returns the character at index 0' },
    {
      bold: 'Str.fromCharCode(122)',
      text: "returns 'z', each character has a unique code",
    },
    {
      bold: 'str.toUpperCase() / .toLowerCase()',
      text: 'converts to uppercase/lowercase',
    },
    { bold: "str.indexOf('k')", text: "index of 'k', or -1 if not found" },
    {
      bold: 'str.substring(0, 2)',
      text: 'returns characters from index 0 to 2',
    },
    {
      bold: 'str.substring(2)',
      text: 'returns characters from index 2 to the end',
    },
    { bold: 'str.trim()', text: 'removes spaces from start&end' },
    { bold: "str.replace('home', 'had')", text: 'replaces first match' },
    { bold: "str.replace(/home/g, 'had')", text: 'replaces all matched' },
    { bold: 'str.repeat(10)', text: 'repeats string 10 times' },
    {
      bold: "names.split(',')",
      text: "turns string separated by ',' into an array",
    },
    { bold: 'Template strings:', text: '`Hello ${name}`' },
    {
      bold: 'Padding a string:',
      text: 'str.padStart(times,with-what)',
      example: "str.padStart(2,'0')",
    },
  ]
  changeMainText(items)
}

function openJsNumbers(elListItem) {
  changeFormat()
  makeClickedBold(elListItem)
  changeHeader('Numbers')
  const items = [
    { bold: '+prompt()', text: 'converts the prompt input into a number' },
    { bold: 'a++', text: 'prints old value, then increases' },
    { bold: '++a', text: 'increases first, then prints' },
    { bold: 'Infinity and -Infinity', text: 'largest/smallest numbers' },
    {
      bold: 'NaN',
      text: '“Not a Number”, appears when you try to calculate with non-numeric data',
    },
    { bold: 'isNaN(value)', text: 'checks if something is not a number' },
    { bold: 'NaN !== NaN', text: 'always true' },
    {
      bold: '10_000_000',
      text: 'underscore can replace commas for readability',
    },
  ]

  changeMainText(items)
}

function openJsMath(elListItem) {
  changeFormat()
  makeClickedBold(elListItem)
  changeHeader('Math')
  const items = [
    { bold: 'Math.sqrt(4)', text: 'square root' },
    { bold: 'Math.PI', text: '3.14159' },
    { bold: 'Math.random()', text: 'random number 0–1' },
    { bold: 'Math.pow(2, 10)', text: '2¹⁰' },
    { bold: 'Math.round(7.51)', text: '8' },
    { bold: 'Math.max(7,9,2)', text: '9' },
    { bold: 'Math.abs(-7)', text: 'absolute value' },
    { bold: 'Math.ceil(5.4)', text: 'round the number up' },
    {
      bold: 'Math.floor(8.7)',
      text: 'round the number down',
    },
  ]

  changeMainText(items)
}

function openJsTime(elListItem) {
  changeFormat()
  makeClickedBold(elListItem)
  changeHeader('Time and Timers')
  const items = [
    {
      bold: 'timeoutID = setTimeout(someFunc, 2000)',
      text: "runs the function once after 2 seconds, we can put a 'return' inside it, and the function won't execute",
    },
    {
      bold: 'setTimeout(someFunc(), 2000)',
      text: 'runs the function immediately, and then the result of that function after 2 seconds (this is usually a mistake)',
    },
    {
      bold: 'clearTimeout(timeoutID)',
      text: 'stops the timeout using its ID',
    },
    {
      bold: 'intervalID = setInterval(someFunc, 1000)',
      text: 'runs the function repeatedly every second. You can define the function inline: setInterval(() => { console.log("tick") }, 1000)',
    },
    {
      bold: 'clearInterval(intervalID)',
      text: 'stops the interval using its ID',
    },
    { bold: 'Date.now()', text: 'milliseconds since 1970' },
    {
      bold: 'new Date().getTime() / .getHours() / .getFullYear() / .getDate()',
      text: 'returns parts of the current date',
    },
    {
      bold: '31 seconds',
      text: 'the recommended amount of second to put in timer interval',
    },
  ]

  changeMainText(items)
}

function openJsConditions(elListItem) {
  changeFormat()
  makeClickedBold(elListItem)
  changeHeader('Conditions')
  const items = [
    {
      bold: 'Single-line ifs don’t need {}',
      text: 'if (x > 5) console.log("yes")',
    },
    {
      bold: 'Short if',
      text: 'result = (10 > 5) ? 10 : 5',
    },
    {
      bold: '==',
      text: 'compares only value',
    },
    {
      bold: '===',
      text: 'compares value and type',
    },
    {
      bold: 'Switch',
      text: `switch (num){
<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;case 100:<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;console.log("it's 100")<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;break<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;case 101:<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;console.log("it's 101")<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;break<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;default:<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;console.log("it's none") }`,
    },
  ]

  changeMainText(items)
}

function openJsLoops(elListItem) {
  changeFormat()
  makeClickedBold(elListItem)
  changeHeader('Loops')
  const items = [
    {
      bold: 'for (var i = 0; i &lt; nums.length; i++) { ... }',
      text: 'loops through array elements',
    },
    {
      bold: 'while (num > 10) { ... }',
      text: 'be careful not to make it infinite',
    },
    {
      bold: 'break',
      text: 'exits a loop early',
    },
    {
      bold: 'continue',
      text: 'skips to the next iteration',
    },
  ]

  changeMainText(items)
}

function openJsArrays(elListItem) {
  changeFormat()
  makeClickedBold(elListItem)
  changeHeader('Arrays')
  const items = [
    {
      bold: 'Arrays are mutable',
      text: 'they can change, even if stored in a const',
    },
    {
      bold: 'Arrays',
      text: 'start from index 0',
    },
    {
      bold: 'Comparing arrays',
      text: 'directly checks memory address, not content',
    },
    {
      bold: 'nums.length',
      text: 'returns the number of elements',
    },
    {
      bold: 'nums[index]',
      text: 'access specific elements',
    },
    {
      bold: "pets.indexOf('Badi')",
      text: 'returns the index of the element',
    },
    {
      bold: "pets.push('Badi')",
      text: 'adds to the end',
    },
    {
      bold: "pets.unshift('Badi')",
      text: 'adds to the beginning',
    },
    {
      bold: 'pets.pop()',
      text: 'removes the last element',
    },
    {
      bold: 'pets.shift()',
      text: 'removes the first element',
    },
    {
      bold: 'pets.splice(start, deleteCount, itemToAdd)',
      text: 'removes or replaces items',
    },
    {
      bold: "names.join(',')",
      text: 'joins array elements into a string',
    },
    {
      bold: 'names.reverse()',
      text: 'reverses the array',
    },
    {
      bold: 'nums.slice(1,3)',
      text: 'copies part of an array (non-destructive)',
    },
    {
      bold: 'nums.slice(1)',
      text: 'copies from index 1 to the end',
    },
    {
      bold: 'nums.slice()',
      text: 'makes a full copy of the array',
    },
    {
      bold: "nums.includes('Badi')",
      text: 'returns true or false',
    },
    {
      bold: 'Array.isArray(nums)',
      text: 'checks if it’s an array',
    },
    {
      bold: 'Math.max(...[1,20,4,3])',
      text: 'finds the max in an array using spread syntax',
    },
    {
      bold: 'board[0][1] = board[4][5] = icon',
      text: 'this sets the same icon in two different positions on the board at once',
    },
  ]

  changeMainText(items)
}

function openJsObjects(elListItem) {
  changeFormat()
  makeClickedBold(elListItem)
  changeHeader('Objects')
  const items = [
    {
      bold: 'Objects are',
      text: 'Objects are mutable',
    },
    {
      bold: '[object Object]',
      text: 'is what you get when concatenating an object with a string',
    },
    {
      bold: 'Object',
      text: "var pet ={ name: 'Badi', age: 4, isAwake: false }",
    },
    {
      bold: "pet['name'] or pet.name",
      text: 'access value',
    },
    {
      bold: "pet['name'] = 'Rich'",
      text: 'change value',
    },
    {
      bold: "pet['color'] = 'brown'",
      text: 'creates a new key and value',
    },
    {
      bold: 'for (var key in player)',
      text: 'player[key] accesses each value',
    },
    {
      bold: 'Object.keys(player) and Object.values(player)',
      text: 'return arrays of keys/values',
    },
  ]

  changeMainText(items)
}

function openJsMatrix(elListItem) {
  changeFormat()
  makeClickedBold(elListItem)
  changeHeader('Matrix')
  const items = [
    {
      bold: 'Each array',
      text: 'represents a memory location',
    },
    {
      bold: 'console.table(data)',
      text: 'displays arrays in a table',
    },
    {
      bold: 'Shortcut {i:i, j:j}',
      text: '{i, j}',
    },
    {
      bold: 'Main diagonal',
      text: 'mat[row][row]',
    },
    {
      bold: 'Secondary diagonal',
      text: 'mat[row][mat.length - i - 1]',
    },
  ]

  changeMainText(items)
}

function openJsFunctions(elListItem) {
  changeFormat()
  makeClickedBold(elListItem)
  changeHeader('Functions')
  const items = [
    {
      bold: 'Undefined',
      text: 'is what you get if a function returns nothing',
    },
    {
      bold: 'default values',
      text: 'can be given to parameters',
      example: 'function sayHello(name = "Eldan", times = 2) { ... }',
    },
    {
      bold: 'Functions',
      text: 'can be stored in variables',
      example:
        'var func = sayHello;<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;func();',
    },
  ]

  changeMainText(items)
}

function openJsConnecting(elListItem) {
  changeFormat()
  makeClickedBold(elListItem)
  changeHeader('Connection JS with HTML & CSS')
  const items = [
    {
      bold: "document.querySelector('ball')",
      text: 'selects an element from the HTML',
    },
    {
      bold: "document.querySelectorAll('button')",
      text: 'it’s a way to get all the selected elements into an array-like structure called a NodeList',
    },
    {
      bold: 'ball.innerText = "I\'m a ball"',
      text: 'changes the text inside the element',
    },
    {
      bold: 'ball.innerHtml',
      text: 'gets or sets the HTML content inside an element ',
    },
    {
      bold: "card.classList.add('flipped') / .remove('flipped') / .contains('flipped')",
      text: 'add, remove, or check a CSS class',
    },
    {
      bold: "card.classList.toggle('hidden')",
      text: "adds the class 'hidden' if it’s not present, or removes it if it is",
    },
    {
      bold: 'ball.style.backgroundColor = "black"',
      text: 'changes the element’s CSS',
    },
    {
      bold: 'elImg.src',
      text: 'we can get the src of an image element',
    },
    {
      bold: 'document.querySelector(.restart).hidden=true/false',
      text: 'an easy way to hide and unhide an element',
    },
    {
      bold: 'style="color:black"',
      text: 'a quick way to style an element from JavaScript without creating a CSS class',
    },
  ]

  changeMainText(items)
}
