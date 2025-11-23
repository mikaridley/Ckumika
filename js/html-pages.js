'use strict'

function openHtml() {
  var header = 'HTML'
  var elSideBar = document.querySelector('.side-bar')
  const topics = [
    { name: 'Formats and Basics', func: 'openHtmlFormats(this)' },
    { name: 'Links and Conections', func: 'openHtmlLinks(this)' },
    { name: 'Atribute Selectors', func: 'openHtmlAtributes(this)' },
    { name: 'Events', func: 'openHtmlEvents(this)' },
    { name: 'Sound & Video', func: 'openHtmlSound(this)' },
    { name: 'Table and List', func: 'openHtmTable(this)' },
    { name: 'Input', func: 'openHtmInput(this)' },
    { name: 'Tags', func: 'openHtmTags(this)' },
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
      bold: '&amp;lt; &amp;gt;',
      text: '&lt; &gt;',
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
      text: '&lt;script src="js/home-page.js"&gt;&lt;/script&gt;',
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
      bold: 'onClick="function(this.value)"',
      text: "sends the element's value to a JS function when clicked",
    },
    {
      bold: 'onClick="function(event)"',
      text: 'sends the event object that contains information about the click',
    },
    {
      bold: 'event.stopPropagation()',
      text: 'stops the event from bubbling up to parent elements',
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
    {
      bold: 'onchange=" "',
      text: 'runs JS when the value of an input or select element changes',
    },
    {
      bold: 'onsubmit=" "',
      text: 'runs the function when a form is submitted',
    },
    {
      bold: '&lt;form method="dialog";',
      text: 'it closes the dialog when a button inside the form is clicked',
    },
    {
      bold: 'onerror="this.src="img/..""',
      text: 'if an image fails to load, this sets a fallback image automatically',
    },
  ]

  changeMainText(items)
}

function openHtmlSound(elListItem) {
  changeFormat()
  makeClickedBold(elListItem)
  changeHeader('Sound & Video')
  const items = [
    {
      bold: 'var sound=new Audio("sound.mp3")',
      text: 'set sound',
    },
    {
      bold: 'sound.play()',
      text: 'play it',
    },
    {
      bold: `&lt;audio controls / autoplay&gt;<br>
      &lt;source src="audio/win.mp3"/&gt;<br>
      &lt;source src="audio/win2.mp3"/&gt;<br>
      Your browser doesnt support html5 audio<br>
      &lt;/audio&gt;
      `,
      text: 'it plays an audio file with playback controls and autoplay, using multiple source options for compatibility',
    },
    {
      bold: `&lt;video loop controls&gt; `,
      text: 'just like an audio',
    },
    {
      bold: `id="myVideo" || myVideo.paused `,
      text: 'you can give a video an id and then control it in JavaScript',
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
    {
      bold: 'ul&gt;li*3',
      text: 'shortcut to create a <ul> element with 3 <li> items inside',
    },
  ]

  changeMainText(items)
}

function openHtmInput(elListItem) {
  changeFormat()
  makeClickedBold(elListItem)
  changeHeader('Input')
  const items = [
    {
      bold: 'name="book-add"',
      text: 'used to identify the input so we can access its value in JS',
    },
    {
      bold: 'type="text"',
      text: 'defines an input field where the user can enter plain text',
    },
    {
      bold: 'type="number"',
      text: 'only accept numeric values, often showing arrows to increase or decrease the number',
    },
    {
      bold: 'type="range" min="0" max="100" value="0" step="2"',
      text: 'creates a slider input where the user can pick a number between 0 and 100, starting at 0',
    },
    {
      bold: 'type="checkbox" || el.checked=true/false',
      text: 'creates a box that the user can check or uncheck to select an option',
    },
    {
      bold: "type=''password'' || elConfirmPass.setCostumValidity('pass do not match') / ('')",
      text: 'it makes the input hide typed characters. sets a custom validation message for the input; passing a non-empty string shows the message, and passing nothing clears it',
    },
    {
      bold: 'type="search"',
      text: 'field meant for search queries, often showing a clear (“×”) button',
    },
    {
      bold: 'type="color"',
      text: 'creates an input that lets the user pick a color using a color picker',
    },
    {
      bold: 'type="tel"',
      text: 'input for phone numbers, often showing a numeric keypad on mobile devices',
    },
    {
      bold: 'type="email"',
      text: 'input for email addresses and validates that the entered text follows the email format',
    },
    {
      bold: 'type="date" value="1999-05-07"',
      text: 'creates a date picker input and sets the default selected date',
    },
    {
      bold: 'type="file" accept=".png" multiple',
      text: 'creates a file input that only allows .png files and lets the user select multiple files at once',
    },
    {
      bold: "type=''radio'' value=''yes'' || elChecked = document.querySelector('input:checked')",
      text: 'creates a radio button, letting the user select only one option from a group. It selects the first checked input on the page',
    },
    {
      bold: 'placeholder="insert a price"',
      text: 'shows temporary hint text inside an input field to guide the user',
    },
    {
      bold: 'required',
      text: 'makes the input field mandatory, so the form won’t submit if it’s empty',
    },
    {
      bold: 'minlength="3"',
      text: 'it requires the input to have at least 3 characters before the form can be submitted',
    },
    {
      bold: 'autocomplet="off"',
      text: 'it tells the browser not to suggest or auto-fill previously entered values for that input',
    },
    {
      bold: 'pattern=" "',
      text: 'it sets a validation pattern using a regular expression (regex) that the input value must match',
    },
    {
      bold: 'list="contactlist"<br>&lt;datalist id="contactlist"&gt;<br>&lt;option value="mh@gmail.com" label="puki"',
      text: 'provides a list of predefined options for an input when the user types, letting them pick from the datalist suggestions',
    },
    {
      bold: 'input[required]:invalid{ } :valid{ }',
      text: 'styles a required input differently depending on whether its current value is valid or invalid',
    },
    {
      bold: `const formData = new FormData(ev.target)<br>
      const data = Object.fromEntries(formData.entries())`,
      text: 'it takes all the form’s input values and converts them into an object',
    },
  ]

  changeMainText(items)
}

function openHtmTags(elListItem) {
  changeFormat()
  makeClickedBold(elListItem)
  changeHeader('Tags')
  const items = [
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
      bold: '&lt;section&gt; &lt;header&gt; &lt;footer&gt; &lt;main&gt; &lt;aside&gt; &lt;article&gt; &lt;time&gt;',
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
      bold: '&lt;small&gt;',
      text: 'it makes the text smaller and usually used for side notes or secondary information',
    },
    {
      bold: '&lt;select&gt;&lt;options value="all"&gt;',
      text: 'creates a dropdown menu with selectable items',
    },
    {
      bold: '&lt;form&gt;',
      text: 'groups inputs so the user can submit data, including by pressing Enter',
    },
    {
      bold: '&lt;button type="button"',
      text: 'a button that does not submit the form when clicked',
    },
    {
      bold: '&lt;label&gt;',
      text: 'defines a text label for an input, making it easier to understand and clickable',
    },
    {
      bold: '&lt;labe for="firstname"<br>&lt;input id="firstname" ',
      text: 'links the label to the input so clicking the label focuses the input',
    },
    {
      bold: '&lt;fieldset&gt;',
      text: 'groups related form elements together, usually with a visible border',
    },
    {
      bold: '&lt;legend&gt;',
      text: 'provides a caption or title for a fieldset group in a form',
    },
    {
      bold: '&lt;dialog&gt;',
      text: 'defines a popup or modal window that can be shown or hidden on the page',
      example: 'el.showModal() || el.close()',
    },
    {
      bold: '&lt;form method="dialog"',
      text: 'a form inside a dialog that closes the dialog when submitted',
    },
  ]

  changeMainText(items)
}
