import * as React from "react";
import Link from "next/link";

const Navbar = () => {
  const [checked, setChecked] = React.useState(false);
  return (
    <div className="navigation">
      <input
        type="checkbox"
        className="navigation__checkbox"
        defaultChecked={checked}
        onChange={(prev) => setChecked(!prev)}
        id="nav-toggle"
      ></input>
      <label htmlFor="nav-toggle" className="navigation__button">
        <span className="navigation__icon">&nbsp;</span>
      </label>
      <div className="navigation__background">&nbsp;</div>
      <nav className="navigation__nav">
        <ul className="navigation__list">
          <li className="navigation__item">
            <Link href="/">
              <a className="navigation__link">Home</a>
            </Link>
          </li>
          <li className="navigation__item">
            <a
              href="https://caprogram-ecell-iith.netlify.app"
              className="navigation__link"
            >
              CA Program
            </a>
          </li>
          <li className="navigation__item">
            <Link href="/Team">
              <a className="navigation__link">Team</a>
            </Link>
          </li>
          <li className="navigation__item">
            <a
              href="https://tanmayshah07.github.io/E-CELL-IITH-Startup/"
              className="navigation__link"
            >
              Notable Start-Ups
            </a>
          </li>
          <li className="navigation__item">
            <a
              href="https://esummit-ecell-iith.netlify.app"
              className="navigation__link"
            >
              E Summit
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
