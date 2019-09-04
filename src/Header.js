import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'

function Header() {
  return (
    <React.Fragment>
      <Jumbotron>
        <h1>Shopping List</h1>
        <p>Keep track of your next climb.</p>
      </Jumbotron>
    </React.Fragment>
  );
}

export default Header;
