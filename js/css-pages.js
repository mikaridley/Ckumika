'use strict'

function openCss() {
  var header = 'CSS'
  var elSideBar = document.querySelector('.side-bar')
  const topics = [
    { name: 'Formats and Basics', func: 'openCssFormats(this)' },
    { name: 'Common Properties', func: 'openCssProperties(this)' },
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
  ]
  var strHtml = ''
  for (var i = 0; i < topics.length; i++) {
    strHtml += `<li onclick="${topics[i].func}">${topics[i].name}</li>`
  }
  elSideBar.innerHTML = `<nav><h3>${header}</h3><ul>${strHtml}</ul></nav>`
}

function openCssFormats(elListItem) {
  changeFormat()
  makeClickedBold(elListItem)
  changeHeader('Formats and Basics')
  const items = [
    {
      bold: 'CSS (Cascading Style Sheets)',
      text: 'is used to control the appearance and layout of HTML elements. You can style elements by their tag, class, or id',
    },
    {
      bold: 'Right order',
      text: 'bow element stuff first, then style',
    },
  ]

  changeMainText(items)
}

function openCssProperties(elListItem) {
  changeFormat()
  makeClickedBold(elListItem)
  changeHeader('Common Properties')
  const items = [
    { bold: 'color:', text: 'text color' },
    { bold: 'background-color:', text: 'background color' },
    { bold: 'margin: / padding:', text: 'outer / inner spacing' },
    { bold: 'border', text: 'outline' },
    { bold: 'font-size:, font-weight:, font-family:', text: 'text style' },
    { bold: 'text-transform:uppercase/lowercase', text: 'uppercase/lowercase' },
    {
      bold: 'text-align:justify/center',
      text: 'aligns text stretched across the line or centered',
    },
    { bold: 'display:', text: 'layout behavior' },
    { bold: 'width:, height:', text: 'element size' },
    {
      bold: 'transition:1s | transition-color:',
      text: 'any change in a CSS numeric property will smoothly animate over 1 second',
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
      bold: 'min-height:',
      text: 'better than height: in order to prevent overflow',
    },
    {
      bold: '*{ box-sizing:border-box; }',
      text: 'make the block element include the border and padding in its default size',
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
      text: "percentage of the parent's width and not bigger then max-width",
    },
    {
      bold: 'font-size: max(18px, .75em)',
      text: 'be 75% of your parent, but not less than 18px',
    },
    {
      bold: 'max-width: 500px',
      text: "it's a percentage of the parent's width",
    },
    {
      bold: 'body:{ min-height(100vh) }',
      text: 'the body becomes the whole page',
    },
    {
      bold: 'overflow: clip<br>overflow: scroll<br>overflow-x/y:',
      text: 'hides/scroll the overflow content for one axis or both',
    },
    {
      bold: "min-height: calc(100vh -some element's height - some pixels that i want)",
      text: 'we can make calculation to the height',
      example: 'min-height: calc(100vh -10vh - 60px)',
    },
    {
      bold: 'vh/ vw',
      text: 'measurement units, viewport height/width, its the amount in percentage compared to the screen height/width',
    },
    {
      bold: 'ch',
      text: "measurement units, represents the width of the '0' (zero) character in the element's current font",
    },
    {
      bold: 'em/rem',
      text: 'em is relative to the font size of the  parent element while rem is relative to the font size of the root element',
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
      bold: 'display:grid',
      text: 'turns a container into a grid layout, letting you place items in rows and columns',
    },
    {
      bold: 'grid-template-columns/rows: col1 col2 col3...',
      text: 'defines the width of each column in a grid layout',
      example: 'grid-template-columns: 100px 10rem 1em',
    },
    {
      bold: 'grid-template-area:<br>"header header"<br>"aside main"<br>"ad main"<br>"footer footer"',
      text: "it defines the layout areas of a grid, where '.' represents empty cells, and each element needs grid-area: name to be placed in its section",
    },
    {
      bold: 'grid-column/row-start/end:2',
      text: 'sets where a grid item begins or ends on the grid lines. negative numbers count lines from the end',
    },
    {
      bold: 'grid-column:2/5 grid-row:2/span 5',
      text: 'sets where a grid item starts and ends: you can specify exact line numbers or a start line plus how many tracks it should span',
    },
    {
      bold: 'grid-area 2/2/4/4',
      text: 'kit starts at row line 2 and column line 2, and ends at row line 4 and column line 4',
    },
  ]

  changeMainText(items)
}
