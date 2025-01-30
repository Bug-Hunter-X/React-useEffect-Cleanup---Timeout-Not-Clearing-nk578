```javascript
import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This effect runs only once on mount
    console.log('Mounted!');
    return () => {
      // Cleanup function
      console.log('Unmounted!');
    };
  }, []); // Empty dependency array ensures this runs only once

  useEffect(() => {
    // This effect runs every time count changes
    console.log('Count changed:', count);
    // Simulate an asynchronous operation
    const timeoutId = setTimeout(() => {
      console.log('Asynchronous operation completed.');
    }, 1000);
    // Cleanup function to clear the timeout
    return () => clearTimeout(timeoutId);
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default MyComponent;
```