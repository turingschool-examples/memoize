const cssFlashcardsData = {
	"easier": [{
			"question": "How would you add a grid to your element class?",
			"codeFormatAnswers": ["section {display: segmented;}", "section {background: grid;}", "section {display: grid;}"],
			"correctAnswerIndex": 2
		},

		{
			"question": "How does the below class effect your page?",
			"codeFormatQuestion": "body {background-color: blue;}",
			"answers": ["Applies a blue tint to all images contained in the body", "Changes the background color of the body to blue", "Changes the background color of all the children elements of the body to blue"],
			"correctAnswerIndex": 1
		},

		{
			"question": "How could you increase the border around an image?",
			"codeFormatAnswers": ["img {border-width: thick;}", "img {edge-height: high;}", "picture {border-width: wider;}"],
			"correctAnswerIndex": 0
		},

		{
			"question": "Change the paragraph font to Helvetica.",
			"codeFormatAnswers": ["p {text-style: Helvetica;}", "p {font-family: Helvetica;}", "p {fonts: Helvetica;}"],
			"correctAnswerIndex": 1
		},

		{
			"question": "What is the difference between margin and padding?",
			"answers": ["Padding seperates the content of an element from itself, while margin seperates the element from surrounding elements", "Padding is a deprecated method of creating space around an element, which is now done by margin", "Margin adds space between all the children of an element, while padding only affects the parent"],
			"correctAnswerIndex": 0
		},

		{
			"question": "Select the default font size used by browsers.",
			"codeFormatAnswers": ["32px", "8px", "16px"],
			"correctAnswerIndex": 2
		},

		{
			"question": "Which styling tools offer you better placement options than floating your elements?",
			"answers": ["Grid", "Flexbox", "All of the above"],
			"correctAnswerIndex": 3
		},

		{
			"question": "How could you horizontally center the text inside an element?",
			"codeFormatAnswers": ["h2 {text-align: center;}", "h2 {content-center: text}", "h2 {text-float: middle;}"],
			"correctAnswerIndex": 0
		},

		{
			"question": "Describe the reason you might name your header element as a header tag rather than a div tag.",
			"answers": ["The browser will automatically render the header fonts as larger font styles", "Describing the header with a header tag is a best practice that makes the page more semantically specific and accessable", "Browsers use the header tag to place the header content at the top of the page"],
			"correctAnswerIndex": 1
		},

		{
			"question": "Why is the below class style a bad choice?",
			"codeFormatQuestion": "body {background-color: blue; color: red;}",
			"answers": ["The two colors clash and make the page text difficult to read", "This color combination has been known to confuse Google data scrapers", ["The blue background and red text combination has been trademarked by Jeff Bezos for a top-secret project collaboration with The Learning Company"]],
			"correctAnswerIndex": 0
		},

		{
			"question": "What does the below class do?",
			"codeFormatQuestion": "article {display: none;}",
			"answers": ["The article text is hidden", "The entire element and the space it occupies are removed", "Hides all the other elements on the display so only the article element is visible"],
			"correctAnswerIndex": 1
		},

		{
			"question": "Describe use cases for hover and active on a CSS class.",
			"answers": ["An active class gives an element styles to apply when the element is hovered over with the cursor", "The hover class specifies styles to apply when the page is in a scrolling motion", "Active applies styles to an element when the element is clicked on"],
			"correctAnswerIndex": 2
		},

		{
			"question": "What does CSS stand for?",
			"answers": ["Controled Surface-level Styles", "Cascading Style Sheets", "Counter Styled Schematics"],
			"correctAnswerIndex": 1
		},

		{
			"question": "What's the most specific way for a class to target an element?",
			"answers": ["With a class selector (.your-class)", "By using an HTML tag (h2)", "An id (#your-id)"],
			"correctAnswerIndex": 2
		},

		{
			"question": "Why is it a good idea to sort class properties in alphabetical order?",
			"answers": ["The compiler reads alphabetized data easier", "It makes your class properties easier to find and easier on the eyes", "It's not. Beat your competitors to market and please the investors, speed and ROI is all that counts"],
			"correctAnswerIndex": 1
		}
	],

	"harder": [{
			"question": "display: none removes the entire element and the space it occupied. What does visibility: hidden do?",
			"answers": ["Visibility: none is the deprecated style for visibility: hidden. There is essentially no other difference", "It hides the element from view without clearing the space the element occupied", "It only hides child elements"],
			"correctAnswerIndex": 1
		},

		{
			"question": "What could the addtion of a z-index style to an element do for you?",
			"answers": ["If several elements overlap each other, the element with the highest z-index will cover the other ones", "z-index can control which elements are read by the compiler first", "Transition timing can be controlled by adjusting the z-index value"],
			"correctAnswerIndex": 0
		},

		{
			"question": "Which sizing method would you use to adjust the height of an icon element?",
			"answers": ["height", "line-height", "font-size"],
			"correctAnswerIndex": 2
		},

		{
			"question": "In which situation would you use justify-content on an element?",
			"answers": ["Grid", "Flexbox", "Can be used for both"],
			"correctAnswerIndex": 1
		},

		{
			"question": "Why might you want to use background-color instead of opacity to adjust the transparency of an element?",
			"answers": ["Adjusting with the opacity property also applies opacity styling to children elements, whereas background-color only adjusts transparenct on the target element", "The opacity property is deprecated", "This is either a matter of opinion or a trick question"],
			"correctAnswerIndex": 0
		},

		{
			"question": "Which one of these classes is a pseudo element?",
			"codeFormatAnswers": ["footer::before {background-color: pink;}", "header:hover {background-color: turquoise;", "article {pseudo: {background-color: pink;}}"],
			"correctAnswerIndex": 0
		},

		{
			"question": "Which one of these classes is a pseudo class?",
			"codeFormatAnswers": ["img::after {transistion: 500ms;}", "input:active {caret-color: yellow}", "h1::pseudo-class {font-weight: 300}"],
			"correctAnswerIndex": 1
		},

		{
			"question": "What does SCSS stand for?",
			"answers": ["Sorted Collection of Styling Systems", "Super Conscientious Sorted Styles", "Sassy CSS"],
			"correctAnswerIndex": 2
		},

		{
			"question": "What does SASS stand for?",
			"answers": ["Syntactically Awesome Style Sheets", "Style Anything with Style Sheets", "Sorted Accumulation of Styling Systems"],
			"correctAnswerIndex": 0
		},

		{
			"question": "Why might you want to write styles in SCSS rather than in original SASS?",
			"answers": ["Original SASS is deprecated and has been replaced with SCSS", "SCSS can accept vanilla CSS syntax", "SCSS is more powerful than SASS, with greater flexibility in layout and faster deployment"],
			"correctAnswerIndex": 1
		},

		{
			"question": "Explain what effect the previous class has over the second class.",
			"codeFormatQuestion": "sidebar {caret-color: white;&:hover {caret-color: tangerine;}}",
			"answers": ["The color of the caret will turn tangerine when the cursor hovers over the sidebar", "All carets on the page will turn tangerine when the cursor hovers over the sidebar", "What the hell is a caret?"],
			"correctAnswerIndex": 0
		},

		{
			"question": "Explain the difference between position: absolute and position: relative.",
			"answers": ["position: relative positions the element based on it's position in the window. position: absolute positions the element based on where the element would belong in the normal flow of the page", "Both positions allow surrounding elements to flow in the direction of whichever direction the element is set to float. The difference is in the initial z-index of the parent container", "position: absolute positions the element based on it's position in the window. position: relative positions the element based on where the element would belong in the normal flow of the page"],
			"correctAnswerIndex": 2
		},

		{
			"question": "What does @include allow you to do?",
			"answers": ["It allows you to add variables representing CSS properties to classes in SCSS", "You can use @include to add property values to classes if you can't remember the property name. It's top secret, don't tell anyone", "It used to be used to bind hover classes to parent elements, but has since been discontinued and is no longer recognized"],
			"correctAnswerIndex": 0
		},

		{
			"question": "What does linear-gradient do?",
			"answers": ["It adds a transtition to two elements along a linear axis", "It adds a transition between two or more colors along a straight line", "It adjusts the speed of transition properties in a class, but only along their linear axes"],
			"correctAnswerIndex": 1
		},

		{
			"question": "What does HSLA stand for?",
			"answers": ["Hue, Saturation, Lumination, and Ambience", "Honed Styling of Light and Animation", "Hue, Saturation, Lightness, and Alpha"],
			"correctAnswerIndex": 2
		}
	]
}

module.exports = { cssFlashcardsData };
