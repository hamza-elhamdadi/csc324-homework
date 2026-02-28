# Web Programming HW2: JavaScript DOM and Event Listeners

## Part 0 - Hiding HTML Elements (1 point)

In the [css/styles.css](./css/styles.css) file, style the "hidden" class. 

[login.html](./login.html) contains a **div** with an error message. Your CSS styles should tell the browser not to render this div by default.

In a later part of this assignment, you will write code that will render this **div** if the user types in the wrong username and password.

## Part 1 - Calling the setup function (1 point)

In the head of [login.html](./login.html), call the **setup** function in [js/login.js](./js/login.js).

## Part 2 - Implementing the setup function (2 points)

Write your code for this part in [js/login.js](./js/login.js).

Your JavaScript code should add an **event listener** to the login button in [login.html](./login.html). When the button is clicked, your code should call the login function in [js/login.js](./js/login.js) with the appropriate arguments.


The **login** function has three parameters:

- ``username``: the string value that the user enters into the "username" input field.

- ``password``: the string value that the user enters into the "password" input field.

- ``errorDiv``: a Node object representing the **div** containing the error message "Invalid Username or Password" (note: this a Node of the DOM tree, it has nothing to do with NodeJS)

Your **event handler** should retrieve the appropriate values/objects from the JavaScript DOM and pass them to this function.

If your code works, you should see the following messages in the Developer Console:

``Username: <the current text in the username input field>``

``Password: <the current text in the password input field>``

``The error message in errorDiv reads "Invalid Username or Password"``

## Part 3 - Implementing the login function (2 points)

Write your code for this part in [js/login.js](./js/login.js).

First things first, assign string values to the variables "correctUsername" and "correctPassword". 

**Note:** Please do not use a username/password that you use (or plan to use) for anything else. 

Then, update the body of the **login** function to do the following:

- Remove the console.log statements

- If the user entered the correct username and password, change the current webpage to "browse.html".

- If the user did not enter the correct username or password, make the errorDiv visible. 

**Hint:** You can assign a new value to ``window.location.href`` to change the current webpage.

**Hint:** The "hidden" class is the only thing causing the error message not to render. Remove this class from the errorDiv's list of classes to make it visible.

**Warning:** Storing the username and password directly in your login.js file is not safe. Later on, we will see better alternatives for implementing authentication. 

**Warning:** Setting the current webpage with ``window.location.href`` is not good practice. When we learn about servers (back-end), we will see a better way to update the current webpage.

## Part 4 - Implementing the createItemCard function (5 points)

First, call the **createItems** function in the head of [browse.html](./browse.html). Your code should look very similar to what you wrote for Part 1.

Then, write the body of the **createItemCard** function in [js/createItems.js](./js/createItems.js).

This function takes as a parameter a single object representing an item for sale and destructures the object into three separate parameters:

- ``name``: a string containing the name of the item (e.g., iPhone 17 Pro)

- ``price``: a number containing the price of the item

- ``description``: a string containing a description of the item

Your job is to write the body of this function to build and return a JavaScript Node object that represents the following HTML code.

```
<div class="item">
    <div class="item-section">
        <h2 class="item-name">iPhone 17 Pro</h2>
        <p class="item-price">$1099.00</p>
    </div>
    <div class="item-section">
        <p class="item-description">The all-new iPhone 17 Pro. Any more pro and it would need an agent.</p>
        <button type="button">Add to Cart</button>
    </div>
</div>
```

**Note:** The "Add to Cart" button should have an event listener that sends an **alert** to the browser with a message stating that the cart is unavailable at this time. (e.g., "Thank you for your interest in the iPhone 17 Pro. Unfortunately, the cart is unavailable at this time.")

**If your code is working**, you should see the HTML above printed in the Developer Console (on one line without indentations).

## Part 5 - Implementing the createItems function (5 points)

Write the body of the **createItems** function in [js/createItems.js](./js/createItems.js).

First, select the item container using the JavaScript DOM.

Then, **using Higher-Order Array method chaining**, convert each of the objects in the array "items" into an item card Node object, and make each item a child of the item container. 

Hint: We learned four higher-order array methods (see the video linked on Canvas).

**To receive full credit for this part, you must use higher-order array methods and method chaining**