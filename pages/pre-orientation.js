import React, { useRef, useEffect } from "react";
import Head from "next/head";
import { gsap } from "gsap";
import Navbar from "../components/first";


const PreOrientation = () => {
    const parent = useRef();
    const tl = useRef();
    useEffect(() => {
        const ctx = gsap.context(() => {
            tl.current = gsap
                .timeline({
                    scrollTrigger: {
                        trigger: "#head",
                        start: "top 80%",
                        end: "top 50%",
                        toggleActions: "play none none reverse",
                    },
                })
                .fromTo(
                    "#head > *",
                    {
                        y: 20,
                        autoAlpha: 0.2,
                        scale: 0.9,
                    },
                    {
                        autoAlpha: 1,
                        scale: 1,
                        y: 0,
                        duration: 0.4,
                        ease: "power2.out",
                        stagger: 0.3,
                    }
                );

            const cards = gsap.utils.toArray(".card");
            cards.forEach((card) => {
                gsap
                    .timeline({
                        scrollTrigger: {
                            trigger: card,
                            start: "top 80%",
                            end: "top 50%",
                        },
                    })
                    .fromTo(
                        card.children,
                        {
                            y: 20,
                            autoAlpha: 0,
                        },
                        {
                            autoAlpha: 1,
                            y: 0,
                            duration: 0.4,
                            ease: "power2.out",
                            stagger: 0.3,
                        }
                    );
            });
        }, parent);

        return () => ctx.revert();
    }, []);

    return (
        <>
            <Head>
                <title>Freshers Guide | Entrepreneurship Cell IIT Hyderabad</title>
                <meta
                    name="google-site-verification"
                    content="agHaKoDcApHadKU7BhRCOJK0w5SRZtQCG9YxNKZBGvc"
                />
            </Head>

            <Navbar 
            subheading="Campus Guide" 
            heading="PRE-ORIENTATION 2024"
            preOrientation={true}
            desc={false} />


        </>);
}

export default PreOrientation