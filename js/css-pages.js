'use strict'

function openCss() {
  var header = 'CSS'
  var elSideBar = document.querySelector('.side-bar')
  const topics = [
    { name: 'Formats and Basics', func: 'openCssFormats(this)' },
    { name: 'Common Properties', func: 'openCssProperties(this)' },
    { name: 'File types', func: 'openCssFile(this)' },
    { name: 'Fonts', func: 'openCssFonts(this)' },
    { name: 'Image', func: 'openCssImage(this)' },
    { name: 'Selectors', func: 'openCssSelectors(this)' },
    { name: 'Box Element', func: 'openCssBox(this)' },
    { name: 'Inline Element', func: 'openCssInline(this)' },
    { name: 'Default Values', func: 'openCssDefaultValues(this)' },
    { name: 'Sizing', func: 'openCssSizing(this)' },
    { name: 'Variables', func: 'openCssVariables(this)' },
    { name: 'Classes', func: 'openCssClasses(this)' },
    { name: 'Colors', func: 'openCssColors(this)' },
    { name: 'Flex', func: 'openCssFlex(this)' },
    { name: 'Media Query', func: 'openCssMedia(this)' },
    { name: 'Grid', func: 'openCssGrid(this)' },
    { name: 'Position', func: 'openCssPosition(this)' },
    { name: 'Column & Float', func: 'openCssColumn(this)' },
    { name: 'Pseudo Elements', func: 'openCssPseudo(this)' },
    { name: 'Scroll', func: 'openCssScroll(this)' },
    { name: 'Animation', func: 'openCssAnimation(this)' },
  ]
  var strHtml = ''
  for (var i = 0; i < topics.length; i++) {
    strHtml += `<li onclick="${topics[i].func}">${topics[i].name}</li>`
  }
  elSideBar.innerHTML = `<nav><h3>${header}</h3><ul>${strHtml}</ul></nav>`
}

//to copy---------------------------------
// changeFormat()
// makeClickedBold(elListItem)
// changeHeader('Common Properties')
// const items = [
//   { bold: 'color:', text: 'text color' },
// ]
// changeMainText(items)

function openCssFormats(elListItem) {
  changeFormat()
  makeClickedBold(elListItem)
  changeHeader('Formats and Basics')
  const items = [
    {
      bold: 'CSS (Cascading Style Sheets)',
      text: 'Is used to control the appearance and layout of HTML elements. You can style elements by their tag, class, or id.',
    },
    {
      bold: `basics: base.css || layout.css || helpers.css<br>
      components: main-header.css || main-nav.css ...<br>
      setup: vars.css || typography.css (fonts) || mq.css<br>
      styles.css - here you import all the files - @import url('...');`,
      text: 'Folder division.',
    },
  ]

  changeMainText(items)
}

function openCssProperties(elListItem) {
  changeFormat()
  makeClickedBold(elListItem)
  changeHeader('Common Properties')
  const items = [
    { bold: 'color:', text: 'Text color.' },
    { bold: 'background-color: ', text: 'Background color.' },
    { bold: 'margin: / padding: ', text: 'Outer / inner spacing.' },
    { bold: 'border', text: 'Outline' },
    { bold: 'font-size:, font-weight:, font-family:', text: 'Text style.' },
    {
      bold: 'text-transform:uppercase/lowercase',
      text: 'Uppercase/lowercase.',
    },
    {
      bold: 'text-align:justify/center',
      text: 'aligns text stretched across the line or centered',
    },
    { bold: 'display:', text: 'Layout behavior.' },
    { bold: 'width:, height:', text: 'Element size.' },
    {
      bold: 'transition:1s;| transition-color: 1s;',
      text: 'any change in a CSS numeric property will smoothly animate over 1 second',
    },
    {
      bold: 'pointer-events: none;',
      text: 'It makes an element ignore all mouse or pointer interactions, useful when you want clicks to pass through it to elements underneath.',
    },
  ]

  changeMainText(items)
}

function openCssFile(elListItem) {
  changeFormat()
  makeClickedBold(elListItem)
  changeHeader('File Types')
  const items = [
    {
      bold: 'jpeg',
      text: 'good for photos. It makes files smaller by lowering quality a bit each time you save.',
    },
    {
      bold: 'png',
      text: 'keeps full quality and can have a transparent background — perfect for logos or icons.',
    },
    {
      bold: 'gif',
      text: 'Can move (simple animations) but has few colours, so it’s not good for detailed images.',
    },
    {
      bold: 'svg',
      text: 'made from shapes and lines instead of pixels, so it never gets blurry when you zoom in — great for web graphics.',
    },
  ]

  changeMainText(items)
}

function openCssFonts(elListItem) {
  changeFormat()
  makeClickedBold(elListItem)
  changeHeader('Fonts')
  const items = [
    {
      bold: 'serif',
      text: 'Fonts with small decorative lines at the ends of letters. They look traditional and formal.',
    },
    {
      bold: 'sans-serif',
      text: 'Fonts without those little lines. They look clean and modern. They are good for small letters.',
    },
    {
      bold: 'monospace',
      text: 'Every character takes the same amount of space. Used mostly for code or text that needs alignment.',
    },
    {
      bold: `@font-face{<br>
      &nbsp; font-family: fontName;<br>
      &nbsp; src: url('...');<br>
      &nbsp; font-wight: 700; }`,
      text: 'Defines a custom font.',
    },
    {
      bold: 'font-family: fontName, serif;',
      text: 'It sets the main font to fontName and uses serif as a fallback if that font isn’t available.',
    },
    {
      bold: `fa:before{<br>
      &nbsp; font-family: fa; }<br><br>
      .fa.facebook::before{<br>
      &nbsp; content:"&#92;unicode";`,
      text: 'It sets the main font to fontName and uses serif as a fallback if that font isn’t available.',
    },
  ]
  changeMainText(items)
}

function openCssImage(elListItem) {
  changeFormat()
  makeClickedBold(elListItem)
  changeHeader('Image')
  const items = [
    {
      bold: 'object-fit: fill / contain / cover;',
      text: 'Controls how an image or video fills its container: fill stretches it, contain fits it entirely without cropping, and cover fills the container while cropping if needed.',
    },
    {
      bold: 'object-position: top / botoom ..;',
      text: 'Sets where the content (like an image or video) is placed inside its container.',
    },
    {
      bold: "background-image: url('...');",
      text: 'Sets an image as the background of an element using a URL.',
    },
    {
      bold: 'background-size: fill / contain / cover;',
      text: 'Controls how a background image fits its container.',
    },
    {
      bold: 'background-position: top / botoom ..;',
      text: 'Sets where the image background is placed inside its container.',
    },
  ]
  changeMainText(items)
}

function openCssSelectors(elListItem) {
  changeFormat()
  makeClickedBold(elListItem)
  changeHeader('Selectors')
  const items = [
    {
      bold: '*{ }',
      text: 'universal selector, reset or global rules',
    },
    {
      bold: ':root{ }',
      text: 'root selector, define CSS variables or global settings',
    },
    { bold: 'a{ }/p{ }/div{ }', text: 'element selectors' },
    { bold: '.hidden{ }', text: 'class selector' },
    {
      bold: '#id{ }',
      text: 'id selector',
    },
    {
      bold: '[title="example"]{ }',
      text: 'title selector',
    },
    {
      bold: '[alt="icon"]{ }',
      text: 'alt selector',
    },
    {
      bold: '__:hover{ }',
      text: 'each selector can get a hover style as well',
    },
    {
      bold: '__:active{ }',
      text: 'applies styles to an element only while it is being clicked or activated by the user',
    },
  ]

  changeMainText(items)
}

function openCssBox(elListItem) {
  changeFormat()
  makeClickedBold(elListItem)
  changeHeader('Box Element')
  const items = [
    {
      bold: 'Block-level elements',
      text: 'are elements that start on a new line and take up the full width available',
    },
    {
      bold: 'Box Element by order',
      text: 'content, padding (inner space), border (outline), and margin (outer space)',
    },
    {
      bold: 'margin/padding/border:',
      text: '1 - all | 2 - top&bottom sides | 3 -top sides bottom | 4- top right bottom left<br> as well border-top:.., margin-right:...',
    },
    {
      bold: 'margin-block:',
      text: 'sets the top and bottom margin of an element',
    },
    {
      bold: 'padding and border',
      text: 'increase the box element size as long as the box size is on the contect box',
    },
    {
      bold: 'padding-block-start/end',
      text: 'consider to the writing direction',
    },
    {
      bold: 'border: width style color<br>border-width<br>border-style<br>border-color',
      text: '1 - all | 2 - top&bottom sides | 3 -top sides bottom | 4- top right bottom left',
    },
    {
      bold: 'box-shadow: x, y, blur-radius, spread-radius, color, inset;',
      text: 'Adds a shadow around an element’s box, and using inset makes the shadow appear inside the element instead of outside.',
    },
    {
      bold: 'min-height:',
      text: 'Better than height: in order to prevent overflow.',
    },
    {
      bold: '*{ box-sizing:border-box; }',
      text: 'Make the block element include the border and padding in its default size.',
    },
  ]

  changeMainText(items)
}

function openCssInline(elListItem) {
  changeFormat()
  makeClickedBold(elListItem)
  changeHeader('Inline Element')
  const items = [
    {
      bold: 'Inline elements',
      text: 'are elements that do not start on a new line and only take up as much width as their content',
    },
    {
      bold: "It's size",
      text: 'is determined by the elements inside it',
    },
    {
      bold: "It's margin",
      text: 'will be only on the right and left',
    },
    {
      bold: 'line-height: 1.4;',
      text: 'line height relative to the font height',
    },
    {
      bold: 'Writing direction',
      text: 'direction: rlt/ltr;<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;writing-mode: vertical-rl/lr;',
    },
    {
      bold: 'padding-inline-start/end',
      text: 'consider to the writing direction',
    },
  ]

  changeMainText(items)
}

function openCssDefaultValues(elListItem) {
  changeFormat()
  makeClickedBold(elListItem)
  changeHeader('Default Values')
  const items = [
    {
      bold: 'Body',
      text: 'has by default 8px margin',
    },
    {
      bold: "Body's size",
      text: 'is defined by its elemets',
    },
    {
      bold: 'root font size',
      text: 'has by default 16px',
    },
    {
      bold: 'Block element',
      text: 'its height is defined by its inner content',
    },
  ]

  changeMainText(items)
}

function openCssSizing(elListItem) {
  changeFormat()
  makeClickedBold(elListItem)
  changeHeader('Sizing')
  const items = [
    {
      bold: 'width: 70%;<br>max-width: 500px;<br>Or: width:min(500px, 70%);',
      text: "Percentage of the parent's width and not bigger then max-width.",
    },
    {
      bold: 'font-size: max(18px, .75em);',
      text: 'Be 75% of your parent, but not less than 18px.',
    },
    {
      bold: 'max-width: 500px;',
      text: "It's a percentage of the parent's width.",
    },
    {
      bold: 'body:{ min-height(100vh) }',
      text: 'The body becomes the whole page.',
    },
    {
      bold: 'overflow: clip<br>overflow: scroll<br>overflow-x/y:',
      text: 'Hides/scroll the overflow content for one axis or both.',
    },
    {
      bold: "min-height: calc(100vh -some element's height - some pixels that i want)",
      text: 'We can make calculation to the height.',
      example: 'min-height: calc(100vh -10vh - 60px);',
    },
    {
      bold: 'vh/ vw',
      text: 'Measurement units, viewport height/width, its the amount in percentage compared to the screen height/width.',
    },
    {
      bold: 'ch',
      text: "Measurement units, represents the width of the '0' (zero) character in the element's current font.",
    },
    {
      bold: 'em',
      text: 'Is a relative unit based on the parent element’s font size and is mostly used for vertical spacing. It’s best not to nest em inside another em, because the sizes multiply.',
    },
    {
      bold: 'rem',
      text: 'Is a relative unit based on the root (html) font size, staying consistent regardless of nesting.',
    },
    {
      bold: 'value in em = desired px / parent fontSize px',
      text: 'How to calculate em.',
    },
    {
      bold: 'fr',
      text: 'Relative units used to size elements proportionally to their container.',
    },
  ]

  changeMainText(items)
}

function openCssVariables(elListItem) {
  changeFormat()
  makeClickedBold(elListItem)
  changeHeader('Variables')
  const items = [
    {
      bold: '--name:',
      text: 'use: border-width: var(--border-width)',
      example: '--border-width: 20px; | --clr1:#fff',
    },
  ]

  changeMainText(items)
}

function openCssClasses(elListItem) {
  changeFormat()
  makeClickedBold(elListItem)
  changeHeader('Classes')
  const items = [
    {
      bold: '.cell.orange:{ }',
      text: 'elements with both of the classes',
    },
    {
      bold: '.cell .orange:{ }',
      text: '.orange element with .cell parent',
    },
    {
      bold: '.cell, .orange:{ }',
      text: 'or .orange element or .cell element',
    },
    {
      bold: '.cell>.orange:{ }',
      text: '.orange which is first child of a .cell',
    },
    {
      bold: '.cell:first/last-child:{ }',
      text: 'first/last child of a .cell class',
    },
    {
      bold: '.cell:nth-child(7):{ }',
      text: '7th child of a .cell',
    },
    {
      bold: '.cell:nth-child(odd/even):{ }',
      text: 'each odd/even child of a .cell',
    },
    {
      bold: '.cell:nth-child(3n):{ }',
      text: 'each third child of a .cell',
    },
    {
      bold: '.cell:nth-child(3n+1):{ }',
      text: 'each third child of a .cell starting from the first one',
    },
    {
      bold: '.cell:nth-last-child(3)/(3n):{ }',
      text: 'each third child of a .cell from the end',
    },
    {
      bold: '.cell:nth-child(n+3):nth-last-child(n+3):{ }',
      text: 'starts from the third element up to the third before the last',
    },
    {
      bold: ':only-child',
      text: 'elements who are the only child in the family',
    },
    {
      bold: '.grid-container>*{ }',
      text: 'selects all direct children of the specified class',
    },
  ]

  changeMainText(items)
}

function openCssColors(elListItem) {
  changeFormat()
  makeClickedBold(elListItem)
  changeHeader('Colors')
  const items = [
    {
      bold: 'rgb(0,0,0) red-green-blue',
      text: 'defines a color using red, green, and blue values, each value can range from 0 to 255',
    },
    {
      bold: 'rgd(0,0,0,0.3) => rgb(0 0 0 / 0.3)',
      text: 'defines a color in red, green, blue, and transparency format',
    },
    {
      bold: '#ff1155 => #f15',
      text: "is a hexadecimal color, it's made of three pairs of hex digits",
    },
    {
      bold: 'hsl(hue, saturation, lightness),',
      text: 'defines a color using three components',
    },
  ]

  changeMainText(items)
}

function openCssFlex(elListItem) {
  changeFormat()
  makeClickedBold(elListItem)
  changeHeader('Flex')
  const items = [
    {
      bold: 'display:flex',
      text: 'makes an element a flex container, allowing its child elements to be easily arranged and aligned in a flexible layout',
    },
    {
      bold: 'justify-content:start/center/end',
      text: 'aligns items on the main axis — to the start, center, or end',
    },
    {
      bold: 'justify-content:spave-evenly/space-between/space-around',
      text: 'distributes space between items — evenly, between, or around them',
    },
    {
      bold: 'align-items:start/center/end',
      text: 'aligns flex items along the cross axis — top, middle, or bottom',
    },
    {
      bold: 'align-self:start/center/end',
      text: 'aligns a single flex item on the cross axis',
    },
    {
      bold: 'flex-direction:column/column-reverse/row(default)/row-reverse',
      text: 'sets the main axis direction',
    },
    {
      bold: 'gap/column-gap/row-gap:size',
      text: 'set the space between flex or grid items',
    },
    {
      bold: 'flex-shrink:1 (the default)',
      text: 'allows a flex item to shrink smaller than its content when there isn’t enough space',
    },
    {
      bold: 'flex-shrink:0',
      text: 'prevents a flex item from shrinking smaller than its content when space is limited',
    },
    {
      bold: 'flex-grow:0 (the default)',
      text: 'prevents a flex item from growing to fill extra space in the container',
    },
    {
      bold: 'flex-grow:1 ',
      text: 'each child takes up a portion of the available space relative to its flex-grow number',
    },
    {
      bold: 'flex-wrap: wrap',
      text: 'allows flex items to move onto multiple lines if they don’t fit in one row or column',
    },
    {
      bold: 'align-content',
      text: 'controls the spacing between rows on the cross axis when a flex container has multiple lines',
    },
    {
      bold: 'flex-basis: size',
      text: 'sets a flex item’s minimum size before any growing or shrinking',
    },
    {
      bold: 'flex-basis:0<br>flex-grow:1',
      text: 'makes a flex item start at zero size and expand equally to fill available space',
    },
  ]

  changeMainText(items)
}

function openCssMedia(elListItem) {
  changeFormat()
  makeClickedBold(elListItem)
  changeHeader('Media Query')
  const items = [
    {
      bold: '@media',
      text: 'applies CSS conditionally based on screen size, device type, or other features',
    },
    {
      bold: '@media screen and (man-width:9992px) => @media(width<992px)',
      text: 'applies styles only on screens narrower than 992px',
    },
  ]

  changeMainText(items)
}

function openCssGrid(elListItem) {
  changeFormat()
  makeClickedBold(elListItem)
  changeHeader('Grid')
  const items = [
    {
      bold: 'In grid',
      text: 'If an element doesn’t have a set size, it will take up the entire available space.',
    },
    {
      bold: 'display: grid;',
      text: 'Turns a container into a grid layout, letting you place items in rows and columns.',
    },
    {
      bold: 'grid-template-columns/rows: col1 col2 col3...',
      text: 'Defines the width of each column in a grid layout.',
      example: 'grid-template-columns: 100px 10rem 1em',
    },
    {
      bold: 'grid-template-columns: repeat(4,100px);',
      text: 'Repeat 100px four times.',
    },
    {
      bold: 'grid-template-area:<br>"header header"<br>"aside main"<br>"ad main"<br>"footer footer"',
      text: "It defines the layout areas of a grid, where '.' represents empty cells, and each element needs grid-area: name to be placed in its section.",
    },
    {
      bold: 'grid-column/row-start/end: 2;',
      text: 'Sets where a grid item begins or ends on the grid lines. negative numbers count lines from the end.',
    },
    {
      bold: 'grid-column:2/5 grid-row:2/span 5;',
      text: 'Sets where a grid item starts and ends: you can specify exact line numbers or a start line plus how many tracks it should span.',
    },
    {
      bold: 'grid-area: 2/2/4/4;',
      text: 'Kit starts at row line 2 and column line 2, and ends at row line 4 and column line 4.',
    },
    {
      bold: 'align-content: center;',
      text: 'Center the grid vertically within its container.',
    },
    {
      bold: 'justify-content: center;',
      text: 'Center the grid horizontally within its container.',
    },
    {
      bold: 'width: max-content;',
      text: 'Sets the element’s width to fit its content without wrapping, expanding as much as the content needs.',
    },
    {
      bold: 'align-items: center;',
      text: 'Vertically centers the content inside each grid cell.',
    },
    {
      bold: 'justify-items: center;',
      text: 'Horizontally aligns the content inside each grid cell.',
    },
    {
      bold: 'place-items: center;',
      text: 'It centers content both vertically and horizontally within each grid cell.',
    },
    {
      bold: 'align-self: center / justify-self: center => place-self: center;',
      text: 'Vertically / horizontally centers a single grid item within its own cell.',
    },
    {
      bold: 'grid-auto-flow: column / row;',
      text: 'Places new grid items by filling column/rows first.',
    },
    {
      bold: 'grid-auto-columns: 80px; ',
      text: 'Sets the width of any automatically created grid columns to 80 pixels.',
    },
    {
      bold: 'grid-auto-flow: dense',
      text: 'Fills gaps left by earlier items to avoid empty spaces.',
    },
    {
      bold: 'grid-template-columns: repeat( auto-full, minmax(80px, 1fr) )',
      text: 'Creates as many columns as fit, each at least 80px wide and growing to fill available space.',
    },
    {
      bold: 'auto / 1fr',
      text: 'auto lets the column or row size itself based on its content. 1fr divides the remaining space equally.',
    },
    {
      bold: 'grid-template-columns: subgrid;',
      text: 'It makes a nested grid inherit its parent’s column structure.',
    },
  ]

  changeMainText(items)
}

function openCssPosition(elListItem) {
  changeFormat()
  makeClickedBold(elListItem)
  changeHeader('Position')
  const items = [
    {
      bold: 'top: bottom: left: right:',
      text: 'those properties only work when the element has a positioned value',
    },
    {
      bold: 'inset:0',
      text: 'top: 0; right: 0; bottom: 0; left: 0;',
    },
    {
      bold: 'position: relative',
      text: 'moves an element relative to its original position without removing it from the document flow',
    },
    {
      bold: 'position: absolute',
      text: 'moves an element relative to its nearest positioned ancestor and removes it from the normal document flow',
    },
    {
      bold: 'position: fixed',
      text: 'moves an element relative to the viewport, keeping it in the same place even when the page is scrolled',
    },
    {
      bold: 'position: sticky',
      text: 'keeps an element fixed while scrolling, but only until the end of its container',
    },
    {
      bold: 'position: static',
      text: 'the default positioning, it stays in the normal document flow and ignores top, bottom, left, and right',
    },
    {
      bold: 'z-index:number',
      text: 'higher numbers appear on top of lower ones, elements get 0 as default',
    },
    {
      bold: 'top:50%<br>left:50%<br>translate: -50% -50%',
      text: 'moves an element in the center of its container both vertically and horizontally',
    },
    {
      bold: 'inset: 0;<br>margin: auto;',
      text: 'centres the element',
    },
  ]

  changeMainText(items)
}

function openCssColumn(elListItem) {
  changeFormat()
  makeClickedBold(elListItem)
  changeHeader('Column & Float')
  const items = [
    {
      bold: 'column-count: 4, 200px;',
      text: 'creates up to 4 columns, each at least 200px wide, filling the container',
    },
    {
      bold: 'column-gap: 5px;',
      text: 'sets a 5-pixel space between columns',
    },
    {
      bold: 'break-inside: avoid;',
      text: 'you apply it to the element you don’t want to split across columns or pages',
    },
    {
      bold: 'column-span: all;',
      text: 'makes an element stretch across all columns instead of staying in just one',
    },
    {
      bold: 'float: left;',
      text: 'moves an element to the left or right, letting surrounding text wrap around it',
    },
    {
      bold: 'clear: left;',
      text: 'prevents an element from sitting next to any floated elements on the left side, forcing it to move below them',
    },
    {
      bold: 'shape-outside: circle() / ellips()',
      text: 'makes text wrap around an element in a circular / elliptical shape',
    },
  ]

  changeMainText(items)
}

function openCssPseudo(elListItem) {
  changeFormat()
  makeClickedBold(elListItem)
  changeHeader('Pseudo Elements')
  const items = [
    {
      bold: 'Pseudo Elements',
      text: 'let you style specific parts of an element or insert content without adding extra HTML',
    },
    {
      bold: 'li::selection',
      text: 'styles when user highlights or selects the list item',
    },
    {
      bold: 'li::marker',
      text: 'targets the bullet so you can style it separately from the text',
    },
    {
      bold: '::before ::after',
      text: 'elements that let you insert content before or after an element’s real content, they always require the content property',
    },
    {
      bold: 'content: attr(data-___)',
      text: 'inserts the value of the data into the pseudo element',
    },
  ]

  changeMainText(items)
}

function openCssScroll(elListItem) {
  changeFormat()
  makeClickedBold(elListItem)
  changeHeader('Scroll')
  const items = [
    {
      bold: '&lt;h1 id="__"  &lt;a href="#__"',
      text: 'you can give an element an id and link to it other element so when clicked, the page automatically scrolls to that element',
    },
    {
      bold: 'scroll-margin-top: 5px;',
      text: 'adds a 5-pixel space above an element when it’s scrolled into view',
    },
    {
      bold: 'html{ scroll-behaviour: smooth; }',
      text: 'makes the page scroll smoothly',
    },
  ]

  changeMainText(items)
}

function openCssAnimation(elListItem) {
  changeFormat()
  makeClickedBold(elListItem)
  changeHeader('Animation')
  const items = [
    {
      bold: 'transform: translateX(50%);',
      text: 'moves an element horizontally to the right by 50% of its own width',
    },
    {
      bold: 'transform: rotate(50deg); || rotate: y 45deg;',
      text: 'rotate an element clockwise',
    },
    {
      bold: 'transform: scale(2); || scale: x y;',
      text: 'make an element grow bigger or smaller',
    },
    {
      bold: 'transform-origin: bottom left;',
      text: 'sets the point around which transformations',
    },
    {
      bold: 'perspective: 300px;',
      text: 'adds depth to 3D-transformed elements, making them appear closer or farther away',
    },
    {
      bold: 'keyframes name{ 0%{ }  100%{ } };',
      text: 'defines an animation by describing how an element’s styles change over time from start to finish',
    },
    {
      bold: 'keyframes name{ to{ } };',
      text: 'defines an animation that represents the final state of the animation',
    },
    {
      bold: 'animation-name: name',
      text: 'apply the animation to an element',
    },
    {
      bold: 'animation-duration: 1s;',
      text: 'sets how long the animation takes to complete one cycle',
    },
    {
      bold: 'animation-timing-function: ease/ ease-in/ ease-out/ ease-in-out;',
      text: 'controls how the animation progresses over time',
    },
    {
      bold: 'animation-fill-mode: forwards/ backwards/ both/ none ;',
      text: 'controls how an element’s styles are applied before and after an animation runs',
    },
    {
      bold: 'animation-iteration-count: infinite/ number;',
      text: 'sets how many times an animation repeats',
    },
    {
      bold: 'animation-play-state: paused/ runnig;',
      text: 'controls whether an animation is currently playing or stopped',
    },
    {
      bold: 'animate.style',
      text: 'it’s a library of ready‑to‑use CSS animations you can drop into your project',
      example:
        '&lt;link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"/&gt;',
    },
    {
      bold: 'font awsome',
      text: 'it’s a library that provides scalable vector icons that you can easily use in your web projects',
    },
  ]

  changeMainText(items)
}
