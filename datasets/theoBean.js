const jQueryData = [
  {
    "title": "Hide",
    "jquery": "$(el).hide();",
    "vanilla": "el.style.display = 'none';\n",
    "id": 1
  },
  {
    "title": "Show",
    "jquery": "$(el).show();\n",
    "vanilla": "el.style.display = 'block';",
    "id": 2
  },
  {
    "title": "Add Class",
    "jquery": "$(el).addClass(className);",
    "vanilla": "if (el.classList)\n  el.classList.add(className);\nelse\n  el.className += ' ' + className;",
    "id": 3
  },
  {
    "title": "After",
    "jquery": "$(el).after(htmlString);",
    "vanilla": "el.insertAdjacentHTML('afterend', htmlString);",
    "id": 4
  },
  {
    "title": "Append",
    "jquery": "$(parent).append(el);",
    "vanilla": "parent.appendChild(el);",
    "id": 5
  },
  {
    "title": "Before",
    "jquery": "$(el).before(htmlString);",
    "vanilla": "el.insertAdjacentHTML('beforebegin', htmlString);",
    "id": 6
  },
  {
    "title": "Children",
    "jquery": "$(el).children();",
    "vanilla": "el.children",
    "id": 7
  },
  {
    "title": "Clone",
    "jquery": "$(el).clone();",
    "vanilla": "el.cloneNode(true);",
    "id": 8
  },
  {
    "title": "Contains",
    "jquery": "$.contains(el, child);",
    "vanilla": "el !== child && el.contains(child);",
    "id": 9
  },
  {
    "title": "Contains Selector",
    "jquery": "$(el).find(selector).length;",
    "vanilla": "el.querySelector(selector) !== null",
    "id": 10
  },
  {
    "title": "Each",
    "jquery": "$(selector).each(function(i, el){\n\n});",
    "vanilla": "var elements = document.querySelectorAll(selector);\nArray.prototype.forEach.call(elements, function(el, i){\n\n});",
    "id": 11
  },
  {
    "title": "Empty",
    "jquery": "$(el).empty();\n",
    "vanilla": "el.innerHTML = '';",
    "id": 12
  },
  {
    "title": "Filter",
    "jquery": "$(selector).filter(filterFn);",
    "vanilla": "Array.prototype.filter.call(document.querySelectorAll(selector), filterFn);\n",
    "id": 13
  },
  {
    "title": "Find Children",
    "jquery": "$(el).find(selector);",
    "vanilla": "el.querySelectorAll(selector);",
    "id": 14
  },
  {
    "title": "Find Elements",
    "jquery": "$('.my #awesome selector');",
    "vanilla": "document.querySelectorAll('.my #awesome selector');",
    "id": 15
  },
  {
    "title": "Get Attributes",
    "jquery": "$(el).attr('tabindex');",
    "vanilla": "el.getAttribute('tabindex');",
    "id": 16
  },
  {
    "title": "Get HTML",
    "jquery": "$(el).html();",
    "vanilla": "el.innerHTML",
    "id": 17
  },
  {
    "title": "Get Style",
    "jquery": "$(el).css(ruleName);",
    "vanilla": "getComputedStyle(el)[ruleName];",
    "id": 18
  },
  {
    "title": "Get Text",
    "jquery": "$(el).text();",
    "vanilla": "el.textContent",
    "id": 19
  },
  {
    "title": "Has Class",
    "jquery": "$(el).hasClass(className);",
    "vanilla": "if (el.classList)\n  el.classList.contains(className);\nelse\n  new RegExp('(^| )' + className + '( |$)', 'gi').test(el.className);",
    "id": 20
  },
  {
    "title": "Next",
    "jquery": "$(el).next();",
    "vanilla": "el.nextElementSibling",
    "id": 21
  },
  {
    "title": "Parent",
    "jquery": "$(el).parent();",
    "vanilla": "el.parentNode",
    "id": 22
  },
  {
    "title": "Prepend",
    "jquery": "$(parent).prepend(el);",
    "vanilla": "parent.insertBefore(el, parent.firstChild);",
    "id": 23
  },
  {
    "title": "Prev",
    "jquery": "$(el).prev();",
    "vanilla": "el.previousElementSibling",
    "id": 24
  },
  {
    "title": "Remove",
    "jquery": "$(el).remove();",
    "vanilla": "el.parentNode.removeChild(el);",
    "id": 25
  },
  {
    "title": "Remove Class",
    "jquery": "$(el).removeClass(className);",
    "vanilla": "if (el.classList)\n  el.classList.remove(className);\nelse\n  el.className = el.className.replace(new RegExp('(^|\\\\b)' + className.split(' ').join('|') + '(\\\\b|$)', 'gi'), ' ');",
    "id": 26
  },
  {
    "title": "Replace From HTML",
    "jquery": "$(el).replaceWith(string);",
    "vanilla": "el.outerHTML = string;",
    "id": 27
  },
  {
    "title": "Set Attributes",
    "jquery": "$(el).attr('tabindex', 3);",
    "vanilla": "el.setAttribute('tabindex', 3);",
    "id": 28
  },
  {
    "title": "Set HTML",
    "jquery": "$(el).html(string);",
    "vanilla": "el.innerHTML = string;",
    "id": 29
  },
  {
    "title": "Set Style",
    "jquery": "$(el).css('border-width', '20px');",
    "vanilla": "// Use a class if possible\nel.style.borderWidth = '20px';",
    "id": 30
  },
  {
    "title": "Set Text",
    "jquery": "$(el).text(string);\n",
    "vanilla": "el.textContent = string;",
    "id": 31
  },
  {
    "title": "Siblings",
    "jquery": "$(el).siblings();",
    "vanilla": "Array.prototype.filter.call(el.parentNode.children, function(child){\n  return child !== el;\n});",
    "id": 32
  },
  {
    "title": "Toggle Class",
    "jquery": "$(el).toggleClass(className);",
    "vanilla": "if (el.classList) {\n  el.classList.toggle(className);\n} else {\n  var classes = el.className.split(' ');\n  var existingIndex = classes.indexOf(className);\n\n  if (existingIndex >= 0)\n    classes.splice(existingIndex, 1);\n  else\n    classes.push(className);\n\n  el.className = classes.join(' ');\n}",
    "id": 33
  },
  {
    "title": "Off",
    "jquery": "$(el).off(eventName, eventHandler);",
    "vanilla": "el.removeEventListener(eventName, eventHandler);",
    "id": 34
  },
  {
    "title": "On",
    "jquery": "$(el).on(eventName, eventHandler);",
    "vanilla": "el.addEventListener(eventName, eventHandler);",
    "id": 35
  },
  {
    "title": "Ready",
    "jquery": "$(document).ready(function(){\n\n});",
    "vanilla": "function ready(fn) {\n  if (document.attachEvent ? document.readyState === \"complete\" : document.readyState !== \"loading\"){\n    fn();\n  } else {\n    document.addEventListener('DOMContentLoaded', fn);\n  }\n}",
    "id": 36
  },
  {
    "title": "Array Each",
    "jquery": "$.each(array, function(i, item){\n\n});",
    "vanilla": "array.forEach(function(item, i){\n\n});",
    "id": 37
  },
  {
    "title": "Index Of",
    "jquery": "$.inArray(item, array);",
    "vanilla": "array.indexOf(item);",
    "id": 38
  },
  {
    "title": "Map",
    "jquery": "$.map(array, function(value, index){\n\n});",
    "vanilla": "array.map(function(value, index){\n\n});",
    "id": 39
  },
  {
    "title": "Parse JSON",
    "jquery": "$.parseJSON(string);\n",
    "vanilla": "JSON.parse(string);",
    "id": 40
  },
  {
    "title": "Trim",
    "jquery": "$.trim(string);",
    "vanilla": "string.trim();",
    "id": 41
  }
]

module.exports = {
  jQueryData
};