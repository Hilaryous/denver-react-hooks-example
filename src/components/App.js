import React from 'react';
import Counter from './Counter';
import ClassCounter from './ClassCounter';

const App = () => (
  <div>
    <header className="search-bar">
      React Context Example
    </header>
    <div className="content">
      <Counter />
      <ClassCounter />
    </div>
  </div>
);

export default App;
