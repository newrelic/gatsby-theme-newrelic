import React, { useState } from 'react';
import {
  useKeyPress,
  useInstrumentedHandler,
} from '@newrelic/gatsby-theme-newrelic';

const Shortcuts = () => {
  const [isOpen, setIsOpen] = useState(false);

  const legend = (
    <div className="modal">
      <div className="modal_content">
        <h1>Keyboard Shortcuts</h1>
        <p>e: Edit the page</p>
        <p>i: Open a Github issue</p>
        <p>d: Toggle between light and dark mode</p>
      </div>
    </div>
  );

  // Open the shorcuts legend
  useKeyPress('?', () => {
    setIsOpen(true);
  });

  // Edit page
  useKeyPress('e', () => console.log('Edit the page'));

  // Open Github issue
  useKeyPress('i', () => console.log('Open a Github issue'));

  // Toggle dark/light mode
  useKeyPress('d', () => console.log('Toggle dark/light mode'));

  // Close the shortcuts legend
  useKeyPress('Escape', () => {
    setIsOpen(false);
  });

  return <> {isOpen ? legend : null} </>;
};

export default Shortcuts;
