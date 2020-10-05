import React from 'react';
import FaqsContainer from './containers/FaqContainer';
import FooterContainer from './containers/FooterContainer';
import JumbotronContainer from './containers/JumbotronContainer';

function App() {
  return (
    <div className="App">
      <JumbotronContainer />
      <FaqsContainer />
      <FooterContainer />
    </div>
  );
}

export default App;
