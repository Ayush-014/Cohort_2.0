useDeferredValue is a React Hook (introduced in React 18) that lets you defer a value update until the browser has spare time.

Concept:
It postpones updating a value that isn't urgent, so higher priority updates like input typing or transitions aren't blocked.

Common use-case:
While typing in an input, update the value immediately for display, but defer the expensive rendering (like filtering a big list) to avoid lag.


Debouncing vs useDeferredValue:-

Feature          | Debouncing                     | useDeferredValue
Type             | Manual optimization            | React Hook (built-in React 18+)
Delay            | You choose delay (e.g., 500ms) | React automatically defers rendering
Use-case         | API calls, text input          | Slow rendering (e.g., big lists)
Priority         | Skips intermediate values      | Keeps all updates, just delays rendering
Requires cleanup | ✅ Yes (clearTimeout)          | ❌ No cleanup needed