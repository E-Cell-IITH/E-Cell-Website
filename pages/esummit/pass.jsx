import React from 'react';
import Navbar from '../../components/esummit25/navbar';
import { Josefin_Sans } from 'next/font/google';
import { Tilt } from 'react-next-tilt';
import PASSDATA from './passdata';
import Link from 'next/link';

import Device from './Device/Device';
import { isMobile } from 'react-device-detect';

const josefinSans = Josefin_Sans({ subsets: ['latin'], display: 'swap' });


const Card = ({ titlecolor, title, c1, c2, c3, c4, c5, c6, c7, price, cardcolor, cl1, cl2, cl3, cl4, cl5, cl6, cl7, td4, td5, td6, td7, bw }) => {
    return (
        <Tilt scale={1.05} tiltMaxAngleX={0} tiltMaxAngleY={0} style={{ borderRadius: "12px" }}>
            <div
                style={{
                    background: cardcolor,
                    paddingTop: '4rem',
                    paddingLeft: '4rem',
                    paddingRight: '4rem',
                    paddingBottom: '1rem',
                    margin: '1rem',
                    minWidth: '20vw',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                    borderWidth: bw,
                    borderColor:"#d3d3d3"
                }}
            >
                <div>
                    <div
                        style={{
                            color: titlecolor,
                            fontSize: '1.5rem',
                            marginBottom: '1rem',
                        }}
                    >
                        {title}
                    </div>
                    <br />
                    <div style={{color:cl1}}>{c1}</div>
                    <div style={{color:cl2}}>{c2}</div>
                    <div style={{color:cl3}}>{c3}</div>
                    <div style={{color:cl4, textDecoration:td4}}>{c4}</div>
                    <div style={{color:cl5, textDecoration:td5}}>{c5}</div>
                    <div style={{color:cl6, textDecoration:td6}}>{c6}</div>
                    <div style={{color:cl7, textDecoration:td7}}>{c7}</div>
                    <br />
                    <div
                        className="flex flex-wrap space-x-5"
                        style={{
                            marginTop: '1rem',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                        }}
                    >
                        <div style={{ fontWeight: 'bold' }}>
                            {String.fromCharCode(0x20B9)}{price}
                        </div>
                        <Link
                            href="/buy"
                            style={{
                                backgroundColor: '#FF5100',
                                padding: '0.5rem 1rem',
                                borderRadius: '5px',
                                color: 'white',
                                textDecoration: 'none',
                                fontWeight: 'bold',
                            }}
                        >
                            Buy Now
                        </Link>
                    </div>
                </div>
            </div>
        </Tilt>
    );
};

const Panel = () => {
    return (
        <div
            style={{
                color: 'white',
                fontSize: '24px',
                padding: '20px',
                borderRadius: '10px',
                maxWidth: '90%',
                height: "auto",
                margin: '0 auto',
            }}
        >
            <br /><br />
            <div
                className='flex flex-wrap justify-center'
                style={{
                    fontSize: '3vh',
                    fontWeight: '500',
                    textAlign: 'center',
                    marginBottom: '2rem',
                    letterSpacing: "0.5rem",
                }}
            >
                BUY&nbsp;ESUMMIT&nbsp;PASS
            </div>
            <div
                style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    gap: '1.5rem',
                }}
            >
                {PASSDATA.map((pass, index) => (
                    <Card
                        key={index}
                        titlecolor={pass.titlecolor}
                        title={pass.title}
                        c1={pass.co1}
                        c2={pass.co2}
                        c3={pass.co3}
                        c4={pass.co4}
                        c5={pass.co5}
                        c6={pass.co6}
                        c7={pass.co7}
                        price={pass.price}
                        cardcolor={pass.cardcolor}
                        cl1={pass.cl1}
                        cl2={pass.cl2}
                        cl3={pass.cl3}
                        cl4={pass.cl4}
                        cl5={pass.cl5}
                        cl6={pass.cl6}
                        cl7={pass.cl7}
                        td4={pass.td4}
                        td5={pass.td5}
                        td6={pass.td6}
                        td7={pass.td7}
                        bw = {pass.bw}

                    />
                ))}
                <br /><br /><br /><br /><br />
            </div>
        </div>
    );
};

function MainPasses() {
    return (
        <div
            suppressHydrationWarning
            suppressContentEditableWarning
            className={josefinSans.className}
            style={{
                backgroundImage: "url('/esummit25/bg.png')",
                backgroundAttachment: 'fixed', 
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                width: '100vw',
                height: '100vh',
                overflowX:"hidden",
                overflowY:"hidden"
            }}
        >
            <div className='static'>
            <Device>
                {({ isMobile }) => {
                    if (isMobile) return <></>
                    return <Navbar />
                }}
                </Device>
            </div>
            

            <div
                style={{
                    position: 'relative',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    overflowY: 'scroll', // Make content scrollable
                    padding: '2rem 0',
                    overflowX: 'hidden',
                }}
            >
                <Panel />
                
            </div>
        </div>
    );
}

export default MainPasses;

