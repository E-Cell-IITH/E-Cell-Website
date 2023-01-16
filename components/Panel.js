import React from 'react';
import style from '../styles/workshops.module.css';

const Panel = () => {
  return (
    <section className="text-white flex flex-col justify-center items-center px-[3rem] lg:px-0 lg:pb-[3rem] mb-[8rem]">
      <div className={style.heading}>PANEL DISCUSSIONS</div>
      <ul className="text-xl list-disc">
        <li>Transformation of India&apos;s Digital Payment Landscape </li>
        <li className="py-5">
          Technological Innovations - The driving factors and Impact
        </li>
        <li>
          The Employer-Employee Paradox: Concurrency of Layoffs and Hiring
        </li>
      </ul>
    </section>
  );
};

export default Panel;
