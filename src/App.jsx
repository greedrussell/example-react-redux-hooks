import React from 'react';
import './App.css';
import Nav from './components/nav/nav.container'
import Counter from './components/counter/count.container'
import Gallery from './components/gallery/gallery.container'

function App() {
  return (
    <div className="App">
      <Nav />
      <header className="App-header">
        <Gallery />
        <Counter />
      </header>
    </div>

  );
}

export default App;
