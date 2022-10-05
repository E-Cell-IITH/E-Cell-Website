import * as React from "react";
// import "../styles/globals";

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
            <a href="https://ecell.ac.in/#about" className="navigation__link">
              About
            </a>
          </li>
          <li className="navigation__item">
            <a href="https://ecell.ac.in/#motto" className="navigation__link">
              Motto
            </a>
          </li>
          <li className="navigation__item">
            <a href="https://ecell.ac.in/#vision" className="navigation__link">
              Vision
            </a>
          </li>
          <li className="navigation__item">
            <a href="https://ecell.ac.in/#events" className="navigation__link">
              Events
            </a>
          </li>
          <li className="navigation__item">
            <a
              href="https://ecell.ac.in/#competitions"
              className="navigation__link"
            >
              Competitions
            </a>
          </li>
          <li className="navigation__item">
            <a
              href="https://ecell.ac.in/#sponsors"
              className="navigation__link"
            >
              Sponsors
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
