# Web Programming HW3: Object-Oriented JavaScript and Asynchronous Programming

## Part 0 - Creating a Login App (1 point)

First, open the [data/credentials.json](./data/credentials.json) file, and take a look at the data provided. This file contains an Object with the correct username and password for a user to login.

Your goal for this part is to create an App that manages the login functionality on the login page ([login.html](./login.html)).

In [js/login.js](./js/login.js), complete the ``constructor`` and ``login`` methods of the ``App`` class. 

### ``constructor`` 

This method should:

- set up instance variables that is a references to the username ``<input>`` element in [login.html](./login.html). 

- set up instance variables that is a references to the password ``<input>`` element in [login.html](./login.html). 
- set up an instance variable that is a reference to the error message ``<div>`` element in [login.html](./login.html).
- add a **submit** event listener to the login form with the ``login`` method as the event handler.

### ``login``

This asynchronous method should:

- store the current value of the username and password ``<input>`` elements in variables (before fetching the credentials).

- fetch the correct username and password from [data/credentials.json](./data/credentials.json)
- read the response and parse it as JSON (save the result in a variable)
- if the user input the correct username and password, then this method should change the current page of the window to ``browse.html``
- if the user input the incorrect, then this method should make the error message ``<div>`` visible.

<br>

**Note:** You must prevent the default behavior of the submit event **before** awaiting a ``Promise``. Otherwise, the default behavior will happen before the awaited ``Promise`` resolves.

**Warning:** Storing the username and password on the front-end in a JSON file is still not safe.

<br>

## Part 1 - Creating an Item class (1 point)

First, open the [browse.html](./browse.html) file, and take a look at the ``<script>`` tag in the ``<head>`` of the document. Already defined is an exampleItemData object with four properties ``name``, ``price``, ``description``, ``category``.

Your goal for this part is to create an Item class whose constructor, given a parent HTML Element, and an ``itemData`` object, creates an ``Item`` object with the following properties: 
- the four properties from the ``itemData`` object

- the parent HTML element
- an item ``<div>`` like the one below (in the ``constructor`` section)

Your Item constructor should also add the ``<div>`` to the DOM as a child of the Item's parent element.

<br>


In [js/items.js](./js/items.js), complete the ``constructor`` of the ``Item`` class.

### ``constructor``

This method should:

- save each of its parameters (``parentElement``, ``name``, etc.) as instance variables.
- create a ``<div>`` as an instance variable.
- use the JavaScript DOM to structure the ``<div>`` with the following HTML. 
```
<div class="item">
    <div class="item-section">
        <h2 class="item-name">iPhone 17 Pro</h2>
        <p class="item-price">$1099.00</p>
    </div>
    <div class="item-section">
        <p class="item-description">The all-new iPhone 17 Pro. Any more pro and it would need an agent.</p>
        <button>Add to Cart</button>
    </div>
</div>
```

**Note:** the ``price`` property contains the price in cents. Use the provided function ``formatCentsToDollars`` to format the price in USD.

- Add an event listener to the ``<button>`` with the ``addToCart`` method as the event handler.

<br>

### Testing your Item class

In the head of [browse.html](./browse.html), test your ``Item`` class by creating an ``Item`` object with ``<section id="items" class="item-container"></section>`` as the parent element and ``exampleItemData`` as the second parameter.

<br>

## Part 2 - Creating an App to manage the Items on the "Browse Items" page (2 points)

First, open the [data/items.json](./data/items.json) file, and take a look at the data provided. This file contains an Array of ``itemData`` objects like the example provided in Part 1.

Your goal for this part is to create an App that manages the Items that will be displayed on the "Browse Items" page ([browse.html](./browse.html)). This App should have an array of ``Item`` objects, which it will populate by fetching the data from [data/items.json](./data/items.json) and creating an ``Item`` object for each ``itemData`` object in the fetched data array.

In [js/items.js](./js/items.js), complete the ``constructor``, ``getItems``, and ``createItem`` methods of the ``App`` class.

### ``constructor``

This method should:

- set up an instance variable that is a reference to the item container ``<section>`` element in [browse.html](./browse.html). 

- set up an empty Array instance variable that will hold the Items on the page.
- call the ``getItems`` method.

### ``createItem``

This method has a parameter called ``itemData`` parameter, which it expects to be an object with four properties: ``name``, ``price``, ``description``, ``category``.

This method should:

- create a new Item object using the ``itemData`` parameter. The parent element of this object should be the item container ``section`` element.

- add the newly created Item to the App's array of items

### ``getItems``

This asynchronous method should:

- fetch the array of itemData objects from [data/items.json](./data/items.json)

- read the response and parse it as JSON (save the result in a variable)

- create a new Item for each of the itemData objects in the array. Use the ``createItem`` method.

- only after creating the Items, make the two ``<fieldset>`` elements visible

**Hint:** Check the ``class`` attribute of the ``<fieldset>`` elements.

**Note:** The ``<fieldset>`` elements will be used in the next two parts of this assignment for filtering and sorting. Filtering and sorting should only be available after the Items have been created. Thus, we make them visible at the end of this asynchronous function, so that users cannot interact with the filter or sort options until the Items have completely loaded.



<br>

### Testing your App class

In [js/items.js](./js/items.js), export the ``App`` class instead of the ``Item`` class.

In [browse.html](./browse.html), remove the ``Item`` testing code. Then, import the ``App`` class and create a new ``App`` object.

<br>

## Part 3 - Add Filtering Functionality to your "Browse Items" App class (2 points)

First, open the "Browse Items" page and take a look at "Filter" ``<fieldset>``. It contains two checkboxes that correspond to the two item categories in the ``items.json`` dataset. 

Your goal for this part of the assignment is to create an event listener the waits for the "Filter" ``<fieldset>`` to change. When it changes, your event handler method should filter the Items that are displayed in the item container ``<div>`` based on the checkboxes that are checked in the "Filter" ``<fieldset>``. If no checkboxes are checked, you should display **all** of the items.

In [js/items.js](./js/items.js), modify the ``constructor`` and complete the ``filterItems`` and ``renderItems`` methods of the ``App`` class.

### ``constructor``

Modify the constructor so that it also:

- sets up an instance variable that is a reference to the "Filter" ``<fieldset>`` element in [browse.html](./browse.html). 

- adds a **change** event listener to this ``fieldset`` with the ``filterItems`` method as the event handler.

### ``filterItems``

This method already contains the following line of code: 

```
const checkboxes = Array.from(document.querySelectorAll('[name="itemFilter"]:checked'));
```

The CSS selector ``[name="itemFilter"]:checked`` selects HTML elements that have a ``name`` attribute with the value ``itemFilter`` AND have the boolean attribute ``checked``. In [browse.html](./browse.html) there are two ``<input type="checkbox">`` elements with ``name="ItemFilter"``.

**Note:** ``document.querySelectorAll`` returns an array-like ``NodeList`` object, which does not have a ``.filter`` method. ``Array.from`` converts an array-like Object into an Array.

Thus, the line of code above initializes the variable ``checkboxes`` to an array of ``HTMLInputElement`` objects. This array will contain only the checkboxes that are currently checked.

The ``filterItems`` method should:

- check if the ``checkboxes`` array is empty.

- if the array is empty, call the ``renderItems`` method with the ``App``'s entire ``items`` array.
- if the array is not empty, call the ``renderItems`` method with the filtered ``items`` array.

**Hint:** Each ``Item`` object should have a property called ``category`` which has one of two values: ``smartphone`` or ``laptop``. The checkboxes also have an attribute with these two values.

**Hint:** Try creating a function to check whether an Item object matches one of the checked checkboxes. Then, call the filter method on the ``App``'s array of ``Item`` objects using this function as the callback.

### ``renderItems``

This method has one parameter: ``filteredItems``. This parameter is an array of ``Item`` objects that is a subset of the App's instance variable array of ``Item`` objects. 

This method should:

- remove all of the ``Item``s in the App's array of ``Item`` objects from the DOM.

- add each of the ``filteredItems`` as of a child of the item container ``<div>`` in the DOM.

**Note:** Don't select the item container ``<div>`` again. Each ``Item`` object should have a reference to this ``<div>``.

**Note:** An Item object is not an HTML ``Element`` object. However, one of the Item's properties should be.



## Part 4 - Add Sorting Functionality to your "Browse Items" App class (4 points)

First, open the "Browse Items" page and take a look at "Sort" ``<fieldset>``. It contains two radio buttons that correspond to two sorting options: 

- sorting by price ascending

- sorting by price descending

Your goal for this part of the assignment is to create an event listener the waits for the "Sort" ``<fieldset>`` to change. When it changes, your event handler method should sort the Items in the ``App``'s array of ``Item`` objects. It should then re-render the Items so that they display in the correctly sorted order.

**Note:** Your sorting method should make sure not to break the existing filtering functionality. When you re-render the Items after sorting, you should make sure to only re-render the Items that are currently visible based on the existing filters.

In [js/items.js](./js/items.js), modify the ``constructor`` and complete the ``sortItems`` method of the ``App`` class.

### ``constructor``

Modify the constructor so that it also:

- sets up an instance variable that is a reference to the **sort** options ``<fieldset>`` element in [browse.html](./browse.html). 

- adds a **change** event listener to this ``fieldset`` with the ``sortItems`` method as the event handler.

### ``sortItems``

This method should:

- get the value from the currently ``checked`` radio button in the "Sort" ``<fieldset>``.

- if the value is ``ascending``, sort the ``App``'s array of ``Item`` objects from lowest to highest ``price``.

- if the value is ``descending``, sort the ``App``'s array of ``Item`` objects from highest to lowest ``price``.

- re-render the currently visible Item objects.

**Hints:** 

- Take a look at [browse.html](./browse.html). Notice that the "Sort" ``<fieldset>`` has two ``<input type="radio">`` elements with ``name="itemSort"``. 

- **Only one** radio input with the same ``name`` property may be selected at a time (this is enforced by the HTML). 

- Select this radio input using a similar CSS selector to the one in the ``checkboxes`` initialization in the ``filterItems`` method.

- To sort the array of Items, you will only need **one callback function**. This callback function should handle the conditional behavior based on the value of the radio input.

- An Item object is visible if it's ``div`` is part of the DOM. If an ``Element`` object is not part of the DOM, it's ``parentNode`` property will have a value of ``null``.

