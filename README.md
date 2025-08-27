### 6. Answer the following questions clearly:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
2. How do you **create and insert a new element into the DOM**?
3. What is **Event Bubbling** and how does it work?
4. What is **Event Delegation** in JavaScript? Why is it useful?
5. What is the difference between **preventDefault() and stopPropagation()** methods?

Ans of question no.1 ---|

getElementById - The getElementById method is used to get the specific #id from the DOM and can deliver only one output and if there is nothing which doesn't match with it, it delivers null;

getElementsByClassName - To apply a specific style or property on more than one attribute the getElementsByClassName method is used, it allows to catch multiple attributes with same class using a loop;

querySelector - querySelector grabs the first file of matching and even the inner class or id as well but it ignores the rest and it is also convenient for complex names.

querySelectorAll - querySelectorAll grabs all the matched class names and delivers as an array like object which can be looped through.

Ans of question no.2 ---|

To create and insert a new element into the DOM first we need to get the preffered attribute by --const container = document.createElement("p");
than we need to append the attribute as child element into the desired section by --anyParent.appendChild(container);

Ans of question no.3 ---|

When clicking a child element it triggers bubbles(get back) backwards to its parent is called Event Bubbling. When the child is clicked it propogates through every element backwards and eventually the document, which lets us to control the events.

Ans of question no.4 ---|

Event Delegation means mainly controlling the events and to run the events as we wants, it saves loads of codes and memories and most importantly saves the stress of debugging many event listeners.

Ans of question no.5 ---|

preventDefault() - it is used to bypass the normal browser behaviour and gives us the full control of that attribute and it prevents the pages from reloading itself.

stopPropagation() - this method stimulates the functionality of event bubbling, by using this method the propogation can be stopped or manupulated.
