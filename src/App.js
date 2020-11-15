import React from 'react';
import { Link } from 'react-router-dom';
import Routes from './routes/Routes';

const App = () => {
  return (
    <div className="App">
      <header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </nav>
      </header>
      <Routes />
      <header>Footer</header>
    </div>
  );
};

export default App;
