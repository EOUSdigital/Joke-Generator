"use strict";

//TODO  Joke Generator Project Challenge

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
    xhttp.open('GET', 'https://v2.jokeapi.dev/joke/Any?type=single', true);
    xhttp.onload = () => {
        if (xhttp.status >= 200 && xhttp.status < 300) {
            const jokeData = JSON.parse(xhttp.responseText);
            const jokeText = jokeData.joke;
            display.textContent = jokeText;
        } else {
            const messages = Object.values(httpErrorMessage);
            const index = Math.floor(Math.random() * messages.length);
            const errorText = messages[index];
            display.textContent = errorText;
        }
    }
    xhttp.send();
})








































