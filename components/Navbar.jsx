import * as React from "react";
import Link from "next/link";
import { useRef } from "react";

const Navbar = () => {
  const [checked, setChecked] = React.useState(false);
  const navRef = useRef();
  return (
    <div className="navigation">
      <input
        type="checkbox"
        className="navigation__checkbox"
        defaultChecked={checked}
        id="nav-toggle"
        onChange={() => {
          setChecked((e) => !e);
        }}
        ref={navRef}
      ></input>
      <label htmlFor="nav-toggle" className="navigation__button">
        <span className="navigation__icon">&nbsp;</span>
      </label>
      <div className="navigation__background">&nbsp;</div>
      <nav className="navigation__nav">
        <ul className="navigation__list">
          <li className="navigation__item">
            <Link
              href="/"
              className="navigation__link"
              onClick={() => {
                navRef.current.checked = false;
              }}
            >
              Home
            </Link>
          </li>
          {/* <li className="navigation__item">
            <a
              href="caprg"
              className="navigation__link"
              onClick={() => {
                navRef.current.checked = false;
              }}
            >
              CA Program
            </a>
          </li> */}
          <li className="navigation__item">
            <Link
              href="/team"
              className="navigation__link"
              onClick={() => {
                navRef.current.checked = false;
              }}
            >
              Team
            </Link>
          </li>
          <li className="navigation__item">
            <Link
              href="/sponsor22-23"
              className="navigation__link"
              onClick={() => {
                navRef.current.checked = false;
              }}
            >
              {" "}
              Partners 22-23
            </Link>
          </li>
          <li className="navigation__item">
            <Link
              href="/sponsor"
              className="navigation__link"
              onClick={() => {
                navRef.current.checked = false;
              }}
            >
              {" "}
              Partners 23-24
            </Link>
          </li>
          <li className="navigation__item">
            <Link
              href="/workshops"
              className="navigation__link"
              onClick={() => {
                navRef.current.checked = false;
              }}
            >
              {" "}
              Workshops
            </Link>
          </li>
          <li className="navigation__item">
            <Link
              href="/startups"
              className="navigation__link"
              onClick={() => {
                navRef.current.checked = false;
              }}
            >
              IITH Startups
            </Link>
          </li>
          <li className="navigation__item">
            <Link
              href="/startupfair"
              className="navigation__link"
              onClick={() => {
                navRef.current.checked = false;
              }}
            >
              Startup Fair
            </Link>
          </li>
          <li className="navigation__item">
            <Link
              href="/esummit"
              className="navigation__link"
              onClick={() => {
                navRef.current.checked = false;
              }}
            >
              E Summit
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
