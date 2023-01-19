import * as React from 'react';
import Link from 'next/link';
import { useRef } from 'react';

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
            <Link href="/">
              <a
                className="navigation__link"
                onClick={() => {
                  navRef.current.checked = false;
                }}
              >
                Home
              </a>
            </Link>
          </li>
          <li className="navigation__item">
            <a
              href="caprg/index.html"
              className="navigation__link"
              onClick={() => {
                navRef.current.checked = false;
              }}
            >
              CA Program
            </a>
          </li>
          <li className="navigation__item">
            <Link href="/Team">
              <a
                className="navigation__link"
                onClick={() => {
                  navRef.current.checked = false;
                }}
              >
                Team
              </a>
            </Link>
          </li>
          <li className="navigation__item">
            <Link href="/sponsor">
              <a
                className="navigation__link"
                onClick={() => {
                  navRef.current.checked = false;
                }}
              >
                {' '}
                Patners
              </a>
            </Link>
          </li>
          <li className="navigation__item">
            <Link href="/esummit">
              <a
                className="navigation__link"
                onClick={() => {
                  navRef.current.checked = false;
                }}
              >
                E Summit
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
