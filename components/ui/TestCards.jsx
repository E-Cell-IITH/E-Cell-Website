'use client'
import React from 'react'
import { InfiniteMovingCards } from "../ui/infinite-moving-cards"

const cardsData = [
    {
        quote: "Conferences That Matter",
        name: (
            <>
                <b>Our three dynamic conferences</b> focus on critical discussions surrounding the future of <b>social enterprises</b> and <b>sustainable business practices.</b>
                These sessions bring together thought leaders and industry experts to address real-world challenges, share insights, and explore collaborative solutions.
            </>
        ),
        photo: "../../public/campusPhotos/mic.webp"
    },
    {
        quote: "Networking at its Finest",
        name: "Whether you’re looking to connect with peers, mentors, or potential collaborators, E-Merge offers unmatched networking opportunities. Engage with changemakers from various fields, fostering relationships that can lead to future partnerships and growth.",
    },
    {
        quote: "Sustainable Exhibition & Market",
        name: "Discover innovative products and solutions at the Sustainable Exhibition and Market, showcasing eco-conscious brands and startups that are pushing the boundaries of ethical business practices. This is your chance to engage with sustainability at its core.",
    },
    {
        quote: "Business Boardroom Competition",
        name: "Step into the role of a C-suite executive in this high-stakes boardroom simulation! Teams will assume roles such as CEO, CFO, and other key decision-makers, sitting around the table to address complex business scenarios. It’s a thrilling opportunity to demonstrate leadership, strategic thinking, and teamwork in a simulated corporate environment.",
    },
    {
        quote: "A Mysterious Grand Finale",
        name: "To close the event on an unforgettable note, we’ve planned a surprise event that will leave you guessing. A memorable finish to a day of enriching conversations and connections—but we’re keeping the details under wraps for now!",
    }
];

const TestCards = () => {
    return (
        <div className="h-[30rem] w-full dark:bg-black bg-white dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
            <h2 className="text-4xl font-bold text-white text-center mb-8 z-10 hidden md:block">Highlights of E-Merge 2.0</h2>
            <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
                <div className="w-full max-w-6xl">
                    <InfiniteMovingCards
                        items={cardsData}
                        direction="right"
                        speed="slow"
                    />
                </div>
            </div>
        </div>
    )
}

export default TestCards;
