# React useEffect Cleanup Issue

This repository demonstrates a common error in React's `useEffect` hook: improper cleanup of asynchronous operations, leading to potential memory leaks.  The `bug.js` file shows the faulty implementation.  The solution, in `bugSolution.js`, addresses this by correctly clearing the timeout within the cleanup function.