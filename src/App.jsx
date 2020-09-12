import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import { decrementAction, incrementAction } from './action';
import './App.css';
import Nav from './components/nav/nav.container'
import Counter from './components/counter/count.container'
import Gallery from './components/gallery/gallery.container'

function App() {
  return (
    <div className="App">
      <Nav />
      <br />
      <hr />
      <header className="App-header">
        <Gallery />
        <br />
        <hr />
        <Counter />
      </header>
    </div>

  );
}

export default App;
