useEffect is a side-effect hook in React that allows you to run code after a component renders. It’s commonly used for:
• Fetching data
• Setting up subscriptions
• Updating the DOM manually
• Running timers
• Cleaning up (e.g., removing event listeners)


1. When the component mounts:
    ✅ What happens:
        •The component renders for the first time.
        •After painting the UI (i.e., after render is committed to DOM), useEffect runs.
        •Since the dependency array [] is empty, this effect runs only once after the component mounts.

    ✅ Order:
        •React renders JSX (return (...))
        •DOM is updated
        •useEffect runs (console.log("Effect ran on mount"))
        •No cleanup is called yet because nothing needs cleanup on first mount.

2. When the component unmounts
    ✅ What happens:
        •Just before the component is removed from the DOM, React calls the cleanup function (if provided in useEffect). This is useful for: Removing event listeners, Aborting fetch requests, Clearing timers, etc

    ✅ Order:
        •Component is about to unmount.
        •The cleanup function from the last useEffect run is invoked:


3. When the component re-renders
This depends on whether the dependencies have changed.

    ✅ Case A: No dependencies (useEffect(() => {...}))
        •Runs after every render, including the initial mount and subsequent updates.

    ✅ Case B: Empty dependency array (useEffect(() => {...}, []))
        •Runs only on mount (already explained above).
        •Does not run again unless the component unmounts and mounts again.

    ✅ Case C: Specific dependencies
        ✅ What happens:
            •Component re-renders due to count changing.
            •React runs the cleanup function from the previous effect.
            •React runs the new effect.

        ✅ Order:
            •JSX re-renders
            •Cleanup runs (if dependencies changed and a cleanup was returned before)
            •New effect runs


Conclusion:-
Scenario               | Effect Runs               | Cleanup Runs
On mount               | ✅ Yes                    | ❌ No
On unmount             | ❌ No                     | ✅ Yes (if a cleanup function exists)
On re-render (no deps) | ✅ Yes (every render)     | ✅ Yes (before every new effect run)
On dep change          | ✅ Yes (when deps change) | ✅ Yes (before new effect runs)