import React from 'react';
import GuideCard from '../components/guideCard';

const SvgPage = () => (
    <>
        <div className='min-h-screen flex flex-col items-center'>
            {/* <img src='/page.svg' className='full-width-svg' alt="Page SVG" /> */}
            <GuideCard title="Food Court"
                description="Domino's, Roll Zone and Barrista Cafe."
                image="/guide/foodCourt.png" />
        </div>
    </>
);

export default SvgPage;
