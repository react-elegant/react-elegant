import React from 'react';
import { Link } from 'react-router-dom';

export default function Index() {
  return (
    <nav>
      <ul>
        <Link to="/Button">Button</Link>
      </ul>
    </nav>
  );
}
