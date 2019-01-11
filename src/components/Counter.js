import React, { useEffect, useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

   // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `Hook: You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button type="button" onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
};

export default Counter;
