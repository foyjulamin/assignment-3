# Emergency Hotline Website

This project is a single-page application built using HTML, CSS, and Vanilla JavaScript. It simulates an emergency hotline directory with interactive features like a history log, coin-based calls, and a copy-to-clipboard function.

## Assignment Questions & Answers

### 1. What is the difference between `getElementById`, `getElementsByClassName`, and `querySelector / querySelectorAll`?

* **`getElementById`**: This is the most specific and fastest method to select a single element. It works by targeting an element's unique `id` attribute. Since an ID must be unique within a document, this method always returns a single element object or `null` if no element with that ID is found.

* **`getElementsByClassName`**: This method selects all elements that have a specific class name. It returns a "live" `HTMLCollection`, which means it automatically updates if elements with that class are added or removed from the DOM.

* **`querySelector` / `querySelectorAll`**: These are modern, more versatile methods that use CSS selectors to find elements.
    * `querySelector` returns the **first** element that matches the specified CSS selector.
    * `querySelectorAll` returns a "static" `NodeList` containing **all** matching elements. Unlike an `HTMLCollection`, a `NodeList` does not automatically update when the DOM changes. These methods are powerful because they can use complex selectors (e.g., `#myId .myClass > p`).

### 2. How do you create and insert a new element into the DOM?

To create and insert a new element, you follow these steps:

1.  **Create the element:** Use `document.createElement('tagName')`. For example, `const newItem = document.createElement('li');`.
2.  **Add content/attributes:** You can set its text content using `newItem.textContent = 'New Item';` or add classes using `newItem.classList.add('my-class');`.
3.  **Find the parent:** Get a reference to the element where you want to insert the new element. For example, `const parentList = document.getElementById('my-list');`.
4.  **Insert the element:** Use an insertion method like `parentList.appendChild(newItem);` to add it as the last child, or `parentList.prepend(newItem);` to add it as the first child.

### 3. What is Event Bubbling and how does it work?

Event bubbling is a mechanism in the DOM that describes how an event propagates. When an event (like a click) is triggered on an element, the event first runs on that specific element. Then, it "bubbles up" or travels up the DOM tree, triggering the same event on each of the parent elements in succession, all the way up to the `document` object. This process allows parent elements to listen for and react to events that happen on their child elements.

### 4. What is Event Delegation in JavaScript? Why is it useful?

Event delegation is a design pattern that leverages event bubbling. Instead of adding an event listener to every single element you want to track, you add just one listener to a common parent element. When a child element's event bubbles up to the parent, the single listener on the parent catches it. You can then use the `event.target` property to identify which specific child element was originally clicked and perform an action based on that.

**Why it is useful:**
* **Performance:** It significantly reduces the number of event listeners, which saves memory and improves performance, especially on pages with many elements.
* **Dynamic Elements:** It works perfectly for elements that are added to the page dynamically (e.g., via JavaScript). You don't need to manually add a new listener for each new element; the single parent listener will handle it automatically.

### 5. What is the difference between `preventDefault()` and `stopPropagation()` methods?

* **`preventDefault()`**: This method prevents the **default browser behavior** for a specific event. For example, if you click a link (`<a>`), `preventDefault()` will stop the browser from navigating to the URL. If you click a submit button on a form, it will prevent the form from being submitted and the page from reloading.

* **`stopPropagation()`**: This method stops the **event from bubbling up** the DOM tree. When called, the event will not propagate to the parent elements, and any event listeners on the parent elements for that specific event will not be triggered. It essentially "stops the flow" of the event.