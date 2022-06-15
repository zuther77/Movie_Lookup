import React from 'react';


//Import styles
import { GlobalStyle } from './GlobalStyle';

//Import Components
import Header from './Componets/header';
import Home from './Componets/Home';

// Without arrow function
function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <GlobalStyle/>
    </div>
  );
}




export default App;
  