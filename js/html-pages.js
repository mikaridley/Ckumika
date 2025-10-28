'use strict'

function openHtml() {
  var header = 'HTML'
  var elSideBar = document.querySelector('.side-bar')
  const topics = [
    { name: 'Formats and Basics', func: 'openHtmlFormats(this)' },
    { name: 'Links and Conections', func: 'openHtmlLinks(this)' },
    { name: 'Atribute Selectors', func: 'openHtmlAtributes(this)' },
    { name: 'Events', func: 'openHtmlEvents(this)' },
    { name: 'Sound', func: 'openHtmlSound(this)' },
    { name: 'Table and List', func: 'openHtmTable(this)' },
  ]
  var strHtml = ''
  for (var i = 0; i < topics.length; i++) {
    strHtml += `<li onclick="${topics[i].func}">${topics[i].name}</li>`
  }
  elSideBar.innerHTML = `<nav><h3>${header}</h3><ul>${strHtml}</ul></nav>`
}

function openHtmlFormats(elListItem) {
  changeFormat()
  makeClickedBold(elListItem)
  changeHeader('Formats and Basics')
  const items = [
    {
      bold: 'HTML (HyperText Markup Language)',
      text: 'defines the structure and content of a webpage',
    },
    {
      bold: "'!' + ENTR",
      text: 'start your file with it to make a default format',
    },
    {
      bold: 'Class names',
      text: 'are usually written in lowercase with hyphens',
      example: 'class="main-header"',
    },
    {
      bold: '&lt;p&gt;',
      text: 'paragraph',
    },
    {
      bold: '&lt;a&gt;',
      text: 'link',
    },
    {
      bold: '&lt;div&gt;',
      text: 'block container',
    },
    {
      bold: '&lt;section&gt; &lt;header&gt; &lt;footer&gt; &lt;main&gt; &lt;aside&gt; &lt;article&gt;',
      text: 'semantic divs like',
    },
    {
      bold: '&lt;span&gt;',
      text: 'inline container for styling specific words',
    },
    {
      bold: '&lt;img&gt;',
      text: 'image',
    },
    {
      bold: '&lt;strong&gt;',
      text: 'bold text',
    },
    {
      bold: '&lt;p&gt;lorem100&lt;/p&gt;',
      text: 'typing this in VS Code and pressing Enter writes 100 random words automatically.',
    },
    {
      bold: 'To hide an element:',
      text: '&lt;div hidden&gt;This is hidden&lt;/div&gt;',
    },
    {
      bold: '&lt;hr&gt;',
      text: 'creates a horizontal line',
    },
    {
      bold: '&lt;br&gt;',
      text: 'go to a new line',
    },
    {
      bold: '&amp;nbsp;',
      text: 'tab space',
    },
    {
      bold: '"https://unsplash.it/width/height/?number"',
      text: 'provides random images from Unsplash with specified dimensions',
      example: 'https://unsplash.it/100/150/?1',
    },
  ]

  changeMainText(items)
}

function openHtmlLinks(elListItem) {
  changeFormat()
  makeClickedBold(elListItem)
  changeHeader('Links and Conections')
  const items = [
    {
      bold: 'To open a link in a new tab, use',
      text: '&lt;a href="https://google.com" target="_blank"&gt;Google&lt;/a&gt;',
    },
    {
      bold: 'To link an email',
      text: '&lt;a href="mailto:abc@gmail.com"&gt;abc@gmail.com&lt;/a&gt;',
    },
    {
      bold: 'CSS link (inside &lt;head&gt;)',
      text: '&lt;link rel="stylesheet" href="css/home-page.css"&gt;',
    },
    {
      bold: 'JavaScript link (usually before &lt;/body&gt;)',
      text: '&lt;script src="../js/home-page.js"&gt;&lt;/script&gt;',
    },
    {
      bold: 'Images',
      text: '&lt;img src="../img/icon.png" alt="Icon" /&gt;',
    },
    {
      bold: 'To add a favicon (icon for the tab):',
      text: '&lt;link rel="icon" type="image/x-icon" href="../img/icon.png"&gt;',
    },
  ]

  changeMainText(items)
}

function openHtmlAtributes(elListItem) {
  changeFormat()
  makeClickedBold(elListItem)
  changeHeader('Atribute Selectors')
  const items = [
    {
      bold: 'Get Attributes',
      text: 'Gets all the selected attributes of an element',
      example: "el.getAttribute(''class'')/(''alt'')",
    },
    { bold: 'ID', text: '#id', example: "el.document.querySelector('#id')" },
    {
      bold: 'class',
      text: '.class, we can give en element more than one class, seperated by spaces',
      example: "el.document.querySelector('.class')",
    },
    {
      bold: 'alt',
      text: "[alt='name'], shows the alt text if the image cant load and helps with accessibility",
      example: "el.document.querySelector('[alt=''name'']')",
    },
    {
      bold: 'title',
      text: "[title='name'], when you hover over the element, a small tooltip with that title will appear",
      example: "el.document.querySelector('[title=''name'']')",
    },
    {
      bold: 'data-name',
      text: 'The data- part is required, and then you can choose any name you want',
      example: "el.document.querySelector('[data-name=''card1'']')",
    },
    {
      bold: 'dataset',
      text: 'gets the data set of an element, its an object like and called DOMStringMap',
      example: 'el.dataset.card',
    },
    {
      bold: 'href=" "',
      text: 'sets the URL a link points to, only for &lt;a&gt;',
      example: 'el.dataset.card',
    },
  ]

  changeMainText(items)
}

function openHtmlEvents(elListItem) {
  changeFormat()
  makeClickedBold(elListItem)
  changeHeader('Events')
  const items = [
    {
      bold: 'onClick="function(this)"',
      text: 'sends the element to a JS function when clicked',
    },
    {
      bold: 'onClick="function(event)"',
      text: 'sends the event object that contains information about the click',
    },
    {
      bold: 'onclick=" "',
      text: 'if a click occurs, run the function',
      example: "onclick=''(sayHello)''",
    },
    {
      bold: 'ondbclick=" "',
      text: 'if a double click occurs, run the function',
      example: "oncdblick=''(ChangeColor)''",
    },
    {
      bold: 'onload="onInit()"',
      text: 'To activate a function automatically when the page loads',
      example: '&lt;body onload="onInit()"&gt;',
    },
    {
      bold: 'onkeyup=" "',
      text: 'is an event that triggers when a key is released after being pressed',
    },
    {
      bold: 'onmouseenter=" "',
      text: 'runs a function when the mouse pointer enters an element',
    },
    {
      bold: 'onmouseleave=" "',
      text: 'runs a function when the mouse pointer leaves an element',
    },
  ]

  changeMainText(items)
}

function openHtmlSound(elListItem) {
  changeFormat()
  makeClickedBold(elListItem)
  changeHeader('Sound')
  const items = [
    {
      bold: 'Set sound',
      text: 'var sound=new Audio("sound.mp3")',
    },
    {
      bold: 'Play it',
      text: 'sound.play()',
    },
  ]

  changeMainText(items)
}

function openHtmTable(elListItem) {
  changeFormat()
  makeClickedBold(elListItem)
  changeHeader('Table and List')
  const items = [
    {
      bold: '&lt;table&gt;',
      text: '&lt;tr&gt; - row <br> &lt;td&gt; - collum <br> &lt;th&gt; - collum header',
    },
    {
      bold: 'colspan="3"/rowspan="3"',
      text: 'an atribute you give to a &lt;td&gt that makes the cell cover 3 columns or rows',
    },
    {
      bold: '&lt;thead&gt; &lt;tbody&gt; &lt;tfeet&gt;',
      text: 'defines the table header, the main content and the footer of a table',
    },
    {
      bold: '&lt;ul&gt; / &lt;ol&gt; => &lt;li&gt;',
      text: 'unordered/ordered list and list items',
    },
  ]

  changeMainText(items)
}
