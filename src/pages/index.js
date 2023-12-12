// Importing the LoginWrapper component from the 'modules' directory
import LoginWrapper from 'modules/LoginWrapper';

// Importing the React library
import React from 'react';

// Functional component named Index
function Index() {
  // Returning the JSX for the Index component
  return (
    // Using React.Fragment to group multiple components without adding extra nodes to the DOM
    <React.Fragment>
      {/* Rendering the LoginWrapper component */}
      <LoginWrapper />
    </React.Fragment>
  );
}

// Exporting the Index component as the default export
export default Index;
