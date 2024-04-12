// use getElem(id) to target DOM elements by their ID. 
// use by assigning it to a variable with the element ID as function parameter -> const var = getElem('id');

const getElem = (id) => document.getElementById(id);

// use querySelect(element) to target DOM elements. If a specific element needs to be targeted, specify this with bracket notation.
// use by assigning it to a variable with the element as a function parameter -> const var = querySelect('element');

const querySelect = (element) => document.querySelector(element);

// use getTag(tag) to target DOM elements by their tag.
// use by assigning it to a variable with the element as the function parameter -> const var = getTag('tag');

const getTag = (tag) => document.getElementByTagName(tag);

// use getClass(class) to target DOM elements by class. If a specific element sharing a class with others needs to be target, specify with bracket notation.
// use by assigning it to a variable iwth the class as the function parameter -> const var = getClass('class');

const getClass = (class) => document.getElementsByClass(class);

// Example: getClass('name')[0].innerHTML = 'abc';

