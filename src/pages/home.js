import HomeWrapper from 'modules/HomeWrapper';
import React from 'react';

function Index() {
  // Returning the JSX for the Index component
  return (
    // Using React.StrictMode to enable additional runtime checks and warnings.
    <React.StrictMode>
      <HomeWrapper />
    </React.StrictMode>
  );
}
export default Index;
