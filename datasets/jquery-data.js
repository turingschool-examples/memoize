const jQuery = {
  "lessons": [{
    "title": "What is JQuery?",
    "info": ["jQuery is a small, fast javaScript library that simplifies dom traversal, event handling, and animations", "It is a tool to make JavaScript tasks more concise", "jQuery is cross-browser compatible so it is viewable in any browser"]
  }, {
    "title": "How to implement jQuery in a project",
    "info": ["Download the jQuery library from jQuery.com and include it as a script tag in your html file", "Use a CDN to import the jQuery library without downloading it to your computer and include this in your script tag", "Make sure to import the jQuery file before importing your script file in the HTML"]
  }, {
    "title": "Selecting elements",
    "info": ["jQuery allows you to easily select and perform actions on elements based on their CSS selectors", "The element selector selects based on element name', '$('p') will select all <p> elements on the page"]
  }, {
    "title": "Selecting by id or class",
    "info": ["Instead of using document.querySelector('.class'), you can select using $('.class')", "$('#submit-button') selects all elements with an id of submit-button", "You can chain selectors using dot notation: $('li.chosen') selects all <li> elements with a class of chosen"]
  }, {
    "title": "Implementing methods using selectors",
    "info": ["Once elements are selected, you can easily implement methods by chaining them", "$('selector').method() runs the method on that specific selector"]
  }, {
    "title": "Adding event listeneners",
    "info": ["Many common event listeneners in JavaScript have a shorthand in jQuery", "addEventListener('click', function) can be written as .on('click', function)"]
  }, {
    "title": "Changing text values",
    "info": ["Jquery makes it much more concise to change text values", "changedVar.innerText = 'Hello!' can be written as changedVar.text('Hello!') in jQuery", "Input values can be selected using $('element).val()"]
  }],

  "questions": [{
    "id": 1,
    "category": "Selecting elements",
    "vanilla": "document.querySelectorAll('.button')",
    "jquery": "$('.button')"
  }, {
    "id": 2,
    "category": "Selecting elements",
    "vanilla": "document.querySelector('div')",
    "jquery": "$('div')"
  }, {
    "id": 3,
    "category": "Selecting elements",
    "vanilla": "document.querySelectorAll('.selected-paragraph')",
    "jquery": "$('.selected-paragraph')"
  }, {
    "id": 4,
    "category": "Selecting elements",
    "vanilla": "document.querySelectorAll('#button')",
    "jquery": "$('#button')"
  }, {
    "id": 5,
    "category": "Adding event listeneners",
    "vanilla": "document.querySelector('.button').addEventListener('click', displayMessage)",
    "jquery": ["$(.button).on('click', displayMessage)", "$(.button).click(displayMessage)"]
  }, {
    "id": 6,
    "category": "Adding event listeneners",
    "vanilla": "document.querySelectorAll('.form-input').addEventListener('keyup', submitForm)",
    "jquery": ["$('.form-input').on('keyup', submitForm)", "$('.form-input').keyup(submitForm)"]
  }, {
    "id": 7,
    "category": "Adding event listeneners",
    "vanilla": "document.querySelectorAll('.list-item').addEventListener('click', addToFavorites)",
    "jquery": ["$('.list-item').on('click', addToFavorites)", "$('.list-item').click(addToFavorites)"]
  }, {
    "id": 8,
    "category": "Getting/changing text values",
    "vanilla": "document.getElementById('submit-button').value = 'Hello, world!'",
    "jquery": "$('#submit-button').val('Hello, world!')"
  }, {
    "id": 9,
    "category": "Adding event listeneners",
    "vanilla": "myButton.addEventListener('click', myFunc)",
    "jquery": ["myButton.on('click', myFunc)", "myButton.click(myFunc)"]
  }, {
    "id": 10,
    "category": "Changing attributes of elements",
    "vanilla": "document.getElementById('close-button').disabled = true",
    "jquery": "$('#my-button').prop('disabled', true)"
  }, {
    "id": 11,
    "category": "Getting/changing text values",
    "vanilla": "document.querySelector('p').innerHTML = 'My new paragraph'",
    "jquery": "$('p').html('My new paragraph')"
  }, {
    "id": 12,
    "category": "Adding and removing classes",
    "vanilla": "this.classList.add('hidden')",
    "jquery": "this.addClass('hidden')"
  }, {
    "id": 13,
    "category": "Adding and removing classes",
    "vanilla": "if (this.parentNode.classList.contains('read'))",
    "jquery": "if ($(this).parent().hasClass('read'))"
  }, {
    "id": 14,
    "category": "Getting/changing text values",
    "vanilla": "changedVariable.innerText = 'Hello!'",
    "jquery": "changedVariable.text('Hello!')"
  }, {
    "id": 15,
    "category": "Getting/changing text values",
    "vanilla": "document.querySelector('h1').innerText",
    "jquery": "$('h1').text()"
  }, {
    "id": 16,
    "category": "Adding and removing classes",
    "vanilla": "document.querySelector('h1').classList.add('hidden')",
    "jquery": ["$('div').hide()", "$('h1').addClass('hidden')", "$('h1').remove()"]
  }, {
    "id": 17,
    "category": "Adding event listeneners",
    "vanilla": "object.addEventListener('mouseover', hoverFunction)",
    "jquery": "object.hover(hoverFunction)"
  }, {
    "id": 18,
    "category": "Adding and removing classes",
    "vanilla": "newDiv.classList.add('foo')",
    "jquery": "newDiv.addClass('foo')"
  }, {
    "id": 19,
    "category": "Adding and removing classes",
    "vanilla": "document.body.appendChild(document.createElement('p'))",
    "jquery": "$('body').append($('<p/>'))"
  }, {
    "id": 20,
    "category": "Getting/changing text values",
    "vanilla": "document.querySelector('input').value",
    "jquery": "$('p').val()"
  }, {
    "id": 21,
    "category": "Getting/changing text values",
    "vanilla": "var text = document.querySelector('#textarea').value = 'New text!'",
    "jquery": "var text = $('#textarea').val('New text!')"
  }, {
    "id": 22,
    "category": "Changing attributes of elements",
    "vanilla": "checkBoxes.disabled = true",
    "jquery": ["checkBoxes.prop('disabled', true)", "checkBoxes.attr('disabled', 'disabled')"]
  }, {
    "id": 23,
    "category": "Changing attributes of elements",
    "vanilla": "document.querySelector('button').disabled = false",
    "jquery": ["$('button').prop('disabled', false)", "checkBoxes.removeAttr('disabled')"]
  }, {
    "id": 24,
    "category": "Selecting elements",
    "vanilla": "document.querySelector('li.chosen')",
    "jquery": "$('li.chosen')"
  }, {
    "id": 25,
    "category": "Adding and removing classes",
    "vanilla": "newDiv.toggleClass('foo')",
    "jquery": "newDiv.classList.toggle('foo')"
  }, {
    "id": 26,
    "category": "Getting/changing text values",
    "vanilla": "document.getElementById('myelement').innerHTML = 'HELLO'",
    "jquery": "$('#myelement').html('HELLO')"
  }, {
    "id": 27,
    "category": "Selecting elements",
    "vanilla": "var parent = document.getElementById('info').parentNode;",
    "jquery": "var parent = $('#info').parent();"
  }, {
    "id": 28,
    "category": "Getting/changing text values",
    "vanilla": "document.body.appendChild(document.createElement('p'))",
    "jquery": "$('body').append($('<p/>'))"
  }, {
    "id": 29,
    "category": "Adding and removing classes",
    "vanilla": "myParagraph.classList.add('foo')",
    "jquery": "myParagraph.addClass('foo')"
  }, {
    "id": 30,
    "category": "Selecting elements",
    "vanilla": "var nextListElement = document.querySelector('#list').nextSibling",
    "jquery": "var nextListElement = $('#list').next()"
  }]
}

module.exports = {
  jQuery
}