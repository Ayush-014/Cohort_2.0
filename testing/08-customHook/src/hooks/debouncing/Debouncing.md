Debouncing is a programming pattern used to limit how often a function gets called. It's commonly used when dealing with high-frequency events like onChange in input fields or window resize events.

Concept:
Only execute the function after a delay, and restart the delay each time the event is triggered.

Common use-case in React:
Typing in a search input field and only making an API call after the user stops typing for a short period.