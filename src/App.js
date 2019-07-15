import React from 'react';
import './App.css';
import Home from './components/home';
import Nav from './components/nav';

class App extends React.Component {
  render() {
    const data = {
      url: 'https://www.freecodecamp.org/news/',
    };
    const name = 'Alex';
    return (
      <div>
        <Home name={name} url={data.url} />
        <Nav name={name} />
      </div>
    );
  }
}

export default App;
