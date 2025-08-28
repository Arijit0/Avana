// import './style.css'
import "./styles/global.css";
// import javascriptLogo from "./javascript.svg";
// import viteLogo from "/vite.svg";
// import { setupCounter } from "./counter.js";

// document.querySelector("#app").innerHTML = `
//   <div>
//     <a href="https://vite.dev" target="_blank">
//       <img src="${viteLogo}" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
//       <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
//     </a>
//     <h1>Hello Vite!</h1>
//     <div class="card bg-red-600">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite logo to learn more
//     </p>
//   </div>
// `;

// setupCounter(document.querySelector("#counter"));

const loadComponent = (selector, url) => {
  // Use the Fetch API, which is built into all modern browsers
  fetch(url)
    .then((response) => {
      // Check if the request was successful
      if (!response.ok) {
        throw new Error(`Failed to fetch ${url}: ${response.statusText}`);
      }
      return response.text(); // Get the HTML content as text
    })
    .then((html) => {
      // Find the placeholder element and inject the HTML
      const element = document.querySelector(selector);
      if (element) {
        element.innerHTML = html;
      } else {
        console.warn(`Element with selector "${selector}" not found.`);
      }
    })
    .catch((error) => {
      console.error("Error loading component:", error);
    });
};

// Wait for the DOM to be fully loaded before running the script
document.addEventListener("DOMContentLoaded", () => {
  // Load the header into the div with id="header-container"
  loadComponent("#header-container", "/components/header.html");

  // Load the footer into the div with id="footer-container"
  loadComponent("#footer-container", "/components/footer.html");
});
