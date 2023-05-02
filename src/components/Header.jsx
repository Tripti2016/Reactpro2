import React from "react";
import { Link } from 'react-router-dom';
import { HashLink } from "react-router-hash-link";

export default function Header() {
  return (
    <nav>
      <h1>Dummy Project1</h1>
      <main>
        <HashLink to={"/#Home"}>Home</HashLink>
        <HashLink to={"/#About"}>About</HashLink>
        <Link to={"/Contact"}>Contact</Link>
        <HashLink to={"/#Brands"}>Brands</HashLink>
        <Link to={"/services"}>Services</Link>
      </main>
    </nav>
  )
}
