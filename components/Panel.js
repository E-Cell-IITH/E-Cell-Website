import React from 'react';

const Panel = () => {
  return (
    <section className="text-white flex flex-col justify-center items-center px-[3rem] lg:px-0 lg:pb-[3rem] mb-[8rem]">
      <div className="text-5xl mb-20 text-blue text-center font-medium">PANEL DISCUSSIONS</div>
      <ul className="sm:text-xl text-md list-disc">
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
