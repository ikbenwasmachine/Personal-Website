import React from 'react';
import Link from 'next/link';

function Header({ title }) {
  return (
    <header style={{display: 'inline-block'}}>
      <nav>
        <ul className="horizontal-menu">
          <li><Link href="/"><a>Home</a></Link></li>
          <li><Link href="/contact"><a>Contact</a></Link></li>
          <li><Link href="/parts"><a>De onderdelen</a></Link></li>
        </ul>
        <h1>{title}</h1>
      </nav>
      <style jsx>{`
        .horizontal-menu {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          background-color: black;
          justify-content: center;
        }

        .horizontal-menu li {
          margin: 0;
        }

        .horizontal-menu li a {
          display: block;
          color: white;
          text-align: center;
          padding: 8px 12px;
          text-decoration: none;
        }

        .horizontal-menu li a:hover {
          background-color: #111;
        }
      `}</style>
    </header>
  );
}

export default Header;