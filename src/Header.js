import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'

function Header() {
  return (
    <React.Fragment>
      <Jumbotron>
        <h1>Shopping List</h1>
        <p>Keep track of what matters most -- the stuff going in your belly next.</p>
      </Jumbotron>
    </React.Fragment>
  );
}

export default Header;
