import React, { useState } from 'react';
import { useKeyPress } from '@newrelic/gatsby-theme-newrelic';

const Shortcuts = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Open the shorcuts legend
  useKeyPress('SHIFT+/', () => {
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

  return <> {isOpen ? <div className="modal">Modal content</div> : null} </>;
};

export default Shortcuts;
