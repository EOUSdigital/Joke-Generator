"use strict";

//  We do not need to study memory management, garbage collection, or the deeper internals of the JavaScript engine.

//  Synchronous callback: called as part of the current, ongoing execution.
//  Asynchronous callback: scheduled to run later, such as a setTimeout() callback.

//TODO  Joke Generator Project Challenge

//? First, what is AJAX?
//  AJAX stands for Asynchronous JavaScript and XML.

//! Despite the name, AJAX does not require XML. Modern applications commonly exchange data in JSON format.

//  AJAX is a technique that allows JavaScript to communicate with a server and update parts of a webpage without reloading the entire page.

//* For example, imagine a webpage displaying a list of products:
//  1. You click a button to load more products.
//  2. JavaScript sends a request to a server.
//  3. The server sends back product information.
//  4. JavaScript receives the information and updates the product list.
//  5. The rest of the webpage remains undisturbed.
//  That is the basic idea behind AJAX.

//? The XMLHttpRequest (XHR) object
//  The browser provides a built-in JavaScript object called XMLHttpRequest.

//  It allows JavaScript to:
//  - Create an HTTP request.
//  - Send that request to a server.
//  - Receive the server's response.
//  - React when the request completes.
//  Think of AJAX as the technique, and XHR as one tool JavaScript can use to perform it.

//? How XHR works
//* Here is the typical sequence:
//  1. Create an XMLHttpRequest object.
//  2. Configure the request using .open().
//  3. Send the request using .send().
//  4. Listen for the response.
//  5. Process the returned information.

//* Here is a small example so you can recognise the structure:

const xhr = new XMLHttpRequest();

xhr.open('GET', 'https://example.com/products');

xhr.onload == function () {
    if (xhr.status === 200)  {
        console.log(xhr.responseText);
    }
};

xhr.send();

//? Let's understand the important parts:

//  Code                    Purpose
//  new XMLHttpRequest()	Creates an XHR object
//  .open()                 Configures the HTTP method and destination
//  .send()                 Sends the request
//  onload                  Runs when the request completes
//  xhr.status              Gives us the HTTP status code
//  xhr.responseText        Gives us the response body as text

//! Important: .open() configures the request; .send() actually sends it.


//? Your task: Write the pseudocode for these four steps in your own words. Don't write JavaScript syntax yet.

//* Solution
```js
Begin

Create an XMLHttpRequest object.

Configure it to send a GET request to the joke server.

Wait for the server's response.

When the response arrives:
    Check whether the request was successful.
    If successful:
        Extract the joke from the returned data.
        Display the joke on the webpage.
    Otherwise:
        Display an error message.

Send the request.

End
```

//? Exercise

const xhttp = new XMLHttpRequest();

xhttp.open('GET', 'https://www.webjokes.com/jokes/')

xhttp.onload = function() {
    if (xhttp.status === 200)  {
        console.log(xhttp.responseText);
    } else {
        console.log('Try again, maybe next time you will be successful.');
    }
}

xhttp.send();


//!  Code

const httpErrorMessage = {
    message1: "Our server just tripped over a cable. Give it a second and try again!",
    message2: "The server had a brain freeze. Please try again.",
    message3: "Well, that didn't go as planned. Our server needs a do-over!",
    message4: "Abort mission! The server panicked. Hit retry to calm it down.",

};
const networkErrorMessage = {
    message1: "Your internet seems to be on a coffee break. Check your Wi-Fi and retry!",
    message2: "Carrier pigeons couldn't reach the server. Check your internet!",
    message3: "Hello? Is anyone there? Looks like your Wi-Fi wandered off.",
    message4: "Lost in cyberspace! Reconnect your internet and try again.",
};

const display = document.getElementById("display");
const button = document.getElementById("button");


button.addEventListener("click", () => {
    const xhttp = new XMLHttpRequest();
})








































